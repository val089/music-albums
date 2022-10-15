import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react';

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => (
  <ChakraProvider theme={theme}>
    <ColorModeScript />
    {children}
  </ChakraProvider>
);
