import { theme } from '@/styles/themes'
import { ChakraProvider } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import '../styles/swiper.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  ) 
}
