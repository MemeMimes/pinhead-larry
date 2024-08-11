import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import { ColorModeScript } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import '@fontsource/noto-sans-mono/700.css'

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Container minHeight="100vh" maxW='2xl'>
        <main id="root">
          {children}
        </main>
      </Container>
    </ChakraProvider>
  )
}