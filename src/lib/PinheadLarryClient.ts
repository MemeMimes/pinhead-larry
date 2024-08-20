import { Client, Collection, Events, GatewayIntentBits, OAuth2Guild } from "discord.js";

export class PinheadLarryClient {
  private static instance: PinheadLarryClient;
  private discordJS: Client;

  private constructor() {
    this.discordJS = new Client({ intents: [GatewayIntentBits.Guilds] });
    console.log("Discord client created");
  }

  public static async getInstance(): Promise<PinheadLarryClient> {
    try {
      if (!PinheadLarryClient.instance) {
        PinheadLarryClient.instance = new PinheadLarryClient();
        PinheadLarryClient.instance.discordJS.once(Events.ClientReady, readyClient => {
          console.log(`Ready! Logged in as ${readyClient.user.tag}`);
        });
        await PinheadLarryClient.instance.discordJS.login(process.env.DISCORD_BOT_TOKEN);
      }

      return PinheadLarryClient.instance;
    } catch (error) {
      console.error(error);

      throw error;
    }
  }

  public async getUserManagedGuilds(discordId: string): Promise<Collection<string, OAuth2Guild>> {
    const guilds = await this.discordJS.guilds.fetch();
    const memberGuilds = guilds.filter(guild => guild.fetch().then(guild => guild.fetchOwner().then(owner => owner.id === discordId)));
    return memberGuilds;
  }

  public async getGuildChannels(guildId: string): Promise<any> {
    const guild = await this.discordJS.guilds.fetch(guildId);
    const channels = await guild.channels.fetch();
    return channels;
  }
}