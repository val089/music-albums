import { Grid, GridItem } from '@chakra-ui/react';
import { Form } from '../../components/Form';
import { useAppSelector } from '../../hooks/reduxHooks';
import { FavMusicList } from '../../components/FavMusicList';

export const HomePage = () => {
  const albums = useAppSelector((state) => state.albums.albums);

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
        Header
      </GridItem>
      <GridItem pl="2" area={'form'}>
        <Form />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={'main'}>
        <FavMusicList albums={albums} />
      </GridItem>
    </Grid>
  );
};
