import { type AuthUser } from 'wasp/auth'
import { Flex } from '@chakra-ui/react';

export default function ProfilePage({ user }: { user: AuthUser }) {
  return (
    <Flex p={12}>
      <h1 className="text-4xl font-bold">{user.username}</h1>
    </Flex>
  );
}