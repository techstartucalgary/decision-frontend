import { ChakraProvider } from "@chakra-ui/react"
import { extendTheme } from "@chakra-ui/react"

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
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp