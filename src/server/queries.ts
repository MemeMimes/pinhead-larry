import { HttpError } from "wasp/server";
import { PinheadLarryClient } from "../lib/PinheadLarryClient";

import {
  type GetUserGuilds,
} from "wasp/server/operations";
import { Guild } from "wasp/entities";

export const getUserGuilds = (async (_args, context) => {

  if (!context.user) {
    throw new HttpError(401, "Unauthorized");
  }

  const discordId = context.user.getFirstProviderUserId();
  if (!discordId) {
    throw new HttpError(401, "Unauthorized");
  }

  const client = await PinheadLarryClient.getInstance();
  const guilds = await client.getUserManagedGuilds(discordId);

  // for each guild, check if it exists in the database, if not, create it
  for (const guild of guilds.values()) {
    const dbGuild = await context.entities.Guild.findFirst({
      where: {
        id: guild.id,
      },
    });

    if (!dbGuild) {
      await context.entities.Guild.create({
        data: {
          id: guild.id,
          name: guild.name,
          iconUrl: guild.iconURL(),
          owner: {
            connect: {
              id: context.user.id,
            }
          }
        },
      });
    }
  }

  const dbGuilds = await context.entities.Guild.findMany({
    where: {
      id: {
        in: Array.from(guilds.keys()),
      },
    },
  });

  return dbGuilds;
}) satisfies GetUserGuilds<void, Guild[]>;