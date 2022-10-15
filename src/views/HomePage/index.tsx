import { Grid, GridItem } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../../components/ColorModeSwitcher';
import { Form } from '../../components/Form';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { FavMusicList } from '../../components/FavMusicList';
import { Locale } from '../../translations/messages';
import { changeLocale } from '../../store/slices/locale';
import { I18n } from '../../translations/I18n';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { albums, locale } = useAppSelector((state) => state);

  const handleChangeLocale = (option: Locale) => {
    dispatch(changeLocale({ locale: option }));
  };

  return (
    <Grid
      templateAreas={`"header header"
                  "form main"`}
      gridTemplateRows={'100px 1fr'}
      gridTemplateColumns={'500px 1fr'}
      h="100vh"
      gap="1"
      color="blackAlpha.700"
      fontWeight="bold"
    >
      <GridItem pl="2" bg="orange.300" area={'header'}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <h1>{locale.locale}</h1>
        <h2>
          <I18n id="text.test" />
        </h2>
        <button onClick={() => handleChangeLocale('en')}>EN</button>
        <button onClick={() => handleChangeLocale('pl')}>PL</button>
      </GridItem>
      <GridItem pl="2" area={'form'}>
        <Form />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={'main'}>
        <FavMusicList albums={albums.albums} />
      </GridItem>
    </Grid>
  );
};
