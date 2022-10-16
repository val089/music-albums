import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import Lottie from 'lottie-react';
import { NavLink } from 'react-router-dom';
import { I18n } from '../../translations/I18n';
import musicAnimation from '../../assets/lottie/musicAnimation.json';
import { LanguageSwitcher } from '../LanguageSwitcher';

export const Header = () => {
  return (
    <Box width="100%" bg="black" py="10px">
      <Flex
        maxW={1000}
        justifyContent="space-between"
        alignItems={{ base: 'center', md: 'normal' }}
        margin="0 auto"
        direction={{ base: 'column', md: 'row' }}
      >
        <Flex w={{ base: 100, md: 200 }} alignItems="center">
          <Lottie animationData={musicAnimation} loop={true} />
          <Heading as="h1" size={{ base: 'xs', md: 'lg' }}>
            Music Albums
          </Heading>
        </Flex>
        <Flex as="nav" alignItems="center">
          <Link mx={2} p={2} as={NavLink} to="/" fontSize={{ base: 12, md: 16 }}>
            <I18n id="text.home" />
          </Link>
          <Link mx={2} p={2} as={NavLink} to="/best-albums" fontSize={{ base: 12, md: 16 }}>
            <I18n id="text.bestAlbums" />
          </Link>
          <LanguageSwitcher />
        </Flex>
      </Flex>
    </Box>
  );
};
