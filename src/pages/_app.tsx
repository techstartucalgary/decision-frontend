import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { CookiesProvider } from 'react-cookie';
import { store } from '../store';
import { Provider } from 'react-redux';

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
    <CookiesProvider>
      <Provider store={store}>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </CookiesProvider>
  );
}

export default MyApp;
