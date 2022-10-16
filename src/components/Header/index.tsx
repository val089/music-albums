import { Box, Flex, Link } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { Locale } from '../../translations/messages';
import { changeLocale } from '../../store/slices/locale';
import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';
import { I18n } from '../../translations/I18n';

export const Header = () => {
  const dispatch = useAppDispatch();
  const { locale } = useAppSelector((state) => state);

  const handleChangeLocale = (option: Locale) => {
    dispatch(changeLocale({ locale: option }));
  };

  return (
    <Box width="100%" pt={5}>
      <Flex maxW={1000} justifyContent="space-between" margin="0 auto">
        <Flex as="nav">
          <Link mx={2} p={2} as={NavLink} to="/">
            Home
          </Link>
          <Link mx={2} p={2} as={NavLink} to="/best-albums">
            Best Albums
          </Link>
        </Flex>

        <Box>
          <ColorModeSwitcher justifySelf="flex-end" />
          <h1>{locale.locale}</h1>
          <h2>
            <I18n id="text.test" />
          </h2>
          <button onClick={() => handleChangeLocale('en')}>EN</button>
          <button onClick={() => handleChangeLocale('pl')}>PL</button>
        </Box>
      </Flex>
    </Box>
  );
};
