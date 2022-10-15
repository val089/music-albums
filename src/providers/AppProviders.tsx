import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { store } from '../store';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ColorModeScript />
        {children}
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
