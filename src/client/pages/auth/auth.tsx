import { Center, Flex } from '@chakra-ui/react'
import { LoginForm } from 'wasp/client/auth'

export function Login() {
  return (
    <Layout>
      <LoginForm />
    </Layout>
  )
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex>
      <Center width="100%" height="80vh">
        {children}
      </Center>
    </Flex>
  )
}