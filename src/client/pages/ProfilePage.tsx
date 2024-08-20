import { type AuthUser } from 'wasp/auth'
import { Avatar, Button, Card, CardBody, Flex, Icon, Image, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { useQuery, getUserGuilds } from 'wasp/client/operations';
import { HardDrives } from '@phosphor-icons/react';

export interface UserGuildsProps {
  guilds: Awaited<ReturnType<typeof getUserGuilds>>;
}

export default function ProfilePage({ user }: { user: AuthUser }) {
  const { data: guilds } = useQuery(getUserGuilds);
  console.log(guilds);
  const inviteLink = "https://discord.com/oauth2/authorize?client_id=1272012582211031072&permissions=8&integration_type=0&scope=bot+applications.commands"

  return (
    <Flex p={12} flexDirection="column" mx="auto" justifyContent={"center"} gap={8}>
      <Text fontSize={24}>Welcome back, {user.username}!</Text>
      <Link href={inviteLink} isExternal>
        <Button>Add to a server</Button>
      </Link>
      {guilds && (
        <Flex flexDirection="column" gap={4}>
          <Text fontSize={20}>Your guilds:</Text>
          <SimpleGrid columns={3} gap={4}>
            {guilds.map((guild: UserGuildsProps["guilds"][0]) => (
              <Card key={guild.id} p={4} borderRadius={8}>
                <CardBody>
                  {guild.iconUrl ? (
                    <Avatar src={guild.iconUrl} width={32} height={32} />
                  ) : (
                    <Icon as={HardDrives} width={32} height={32} />
                  )}
                  <Text fontSize={16}>{guild.name}</Text>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Flex>
      )}
    </Flex>
  );
}