import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';
import { store } from '../store';
import { Provider } from 'react-redux';
import Head from 'next/head';

const theme = extendTheme({
  colors: {
    primary: {
      100: '#FFDD99',
      300: '#FFDD99',
      500: '#FFDD99',
    },
  },
});

function MyApp({ Component, pageProps }: any) {
  return (
    <>
      <CookiesProvider>
        <Provider store={store}>
          <ChakraProvider theme={theme}>
            <Head>
              <link rel="preconnect" href="https://fonts.googleapis.com" />
              <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                cross-origin
              />
              <link
                href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
                rel="stylesheet"
              />
            </Head>
            <Component {...pageProps} />
          </ChakraProvider>
        </Provider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
