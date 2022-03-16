import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';

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
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default MyApp;
