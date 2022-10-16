import { Flex, Image, Button } from '@chakra-ui/react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { Locale } from '../../translations/messages';
import { changeLocale } from '../../store/slices/locale';
import plFlagImg from '../../assets/images/poland.png';
import enFlagImg from '../../assets/images/united-kingdom.png';

export const LanguageSwitcher = () => {
  const dispatch = useAppDispatch();
  const locale = useAppSelector((state) => state.locale.locale);

  const handleChangeLocale = (option: Locale) => {
    dispatch(changeLocale({ locale: option }));
  };

  return (
    <Flex w={120} gap={2}>
      <Button
        p={0}
        borderRadius={50}
        bg={locale === 'pl' ? 'secondary' : 'none'}
        type="button"
        onClick={() => handleChangeLocale('pl')}
      >
        <Image src={plFlagImg} alt="Poland flag" />
      </Button>
      <Button
        p={0}
        borderRadius={50}
        bg={locale === 'en' ? 'secondary' : 'none'}
        type="button"
        onClick={() => handleChangeLocale('en')}
      >
        <Image src={enFlagImg} alt="United Kingdom flag" />
      </Button>
    </Flex>
  );
};
