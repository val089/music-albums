import { Grid, GridItem } from '@chakra-ui/react';
import { Form } from '../../components/Form';
import { FavMusicList } from '../../components/FavMusicList';
import { useSortedAlbums } from '../../hooks/useSortedAlbums';

export const HomePage = () => {
  const { data: favMusicList, sortData: sortAlbums } = useSortedAlbums();

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
        <div>
          <button style={{ background: 'yellow' }} onClick={() => sortAlbums('albumName', 'asc')}>
            SORT BY NAME ASC
          </button>
          <button style={{ background: 'green' }} onClick={() => sortAlbums('albumName', 'desc')}>
            SORT BY NAME DESC
          </button>
          <button style={{ background: 'yellow' }} onClick={() => sortAlbums('id', 'asc')}>
            SORT BY NAME ASC
          </button>
          <button style={{ background: 'green' }} onClick={() => sortAlbums('id', 'desc')}>
            SORT BY NAME DESC
          </button>
        </div>
        <Form />
      </GridItem>
      <GridItem pl="2" bg="green.300" area={'main'}>
        <FavMusicList albums={favMusicList} />
      </GridItem>
    </Grid>
  );
};
