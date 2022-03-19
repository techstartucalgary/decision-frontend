import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"
import { CookiesProvider } from "react-cookie"

const theme = extendTheme({
  colors: {
    primary: {
      100: "#FFDD99",
      300: "#FFDD99",
      500: "#FFDD99",
      
    },
  },
})

function MyApp({ Component, pageProps } : any) {
  return (
    <CookiesProvider>
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
    </CookiesProvider>
  )
}

export default MyApp