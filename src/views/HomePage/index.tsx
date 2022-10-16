import { useState } from 'react';
import { Grid, GridItem, Box, SimpleGrid, Button } from '@chakra-ui/react';
import { Form } from '../../components/Form';
import { FavMusicList } from '../../components/FavMusicList';
import { useSortedAlbums } from '../../hooks/useSortedAlbums';
import { SortButton } from '../../components/SortButton';
import { I18n } from '../../translations/I18n';

export const HomePage = () => {
  const [isGrid, setIsGrid] = useState(false);
  const { data: favMusicList, sortData: sortAlbums } = useSortedAlbums();

  return (
    <Grid
      gridTemplateColumns={{ lg: '300px 1fr' }}
      h="100vh"
      gap="20px"
      color="blackAlpha.700"
      fontWeight="bold"
      maxW={1000}
      margin="0 auto"
      p="40px 16px"
    >
      <GridItem>
        <Form />
        <Box mt="40px">
          <SortButton
            sortBy="id"
            sortAsc={() => sortAlbums('id', 'asc')}
            sortDesc={() => sortAlbums('id', 'desc')}
          />
          <SortButton
            sortBy="albumName"
            sortAsc={() => sortAlbums('albumName', 'asc')}
            sortDesc={() => sortAlbums('albumName', 'desc')}
          />
          <SortButton
            sortBy="createdAt"
            sortAsc={() => sortAlbums('createdAt', 'asc')}
            sortDesc={() => sortAlbums('createdAt', 'desc')}
          />
        </Box>
        <Button
          size="xs"
          mt="30px"
          bg="secondary"
          _hover={{ bg: 'green1' }}
          onClick={() => setIsGrid((prev) => !prev)}
        >
          <I18n id="text.changeListView" />
        </Button>
      </GridItem>
      <GridItem>
        {isGrid ? (
          <SimpleGrid columns={2} spacing="10px">
            <FavMusicList albums={favMusicList} isGridList={isGrid} />
          </SimpleGrid>
        ) : (
          <FavMusicList albums={favMusicList} />
        )}
      </GridItem>
    </Grid>
  );
};
