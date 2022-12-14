import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { useAppSelector } from '../hooks/reduxHooks';
import { IntlProvider, ReactIntlErrorCode } from 'react-intl';
import messages from '../translations/messages';
import { theme } from '../theme';

// following method added due to error: [Error: [@formatjs/intl Error MISSING_DATA]
const onError = (e: any) => {
  if (e.code === ReactIntlErrorCode.MISSING_DATA) {
    return;
  }
  console.error(e);
};

type AppProvidersProps = {
  children: React.ReactNode;
};

export const AppProviders = ({ children }: AppProvidersProps) => {
  const { locale } = useAppSelector((state) => state.locale);

  return (
    <ChakraProvider theme={theme}>
      <IntlProvider
        messages={messages[locale]}
        locale={locale}
        defaultLocale="pl"
        onError={onError}
      >
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </IntlProvider>
    </ChakraProvider>
  );
};
