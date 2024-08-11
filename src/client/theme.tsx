import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import '@fontsource-variable/noto-sans-mono';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Noto Sans Mono', monospace`,
    body: `'Noto Sans Mono', monospace`,
  }
})

export default theme