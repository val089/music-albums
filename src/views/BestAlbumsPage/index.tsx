import { Box } from '@chakra-ui/react';
import { useAppSelector } from '../../hooks/reduxHooks';
import { deleteBestAlbum } from '../../store/slices/albums';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { AlbumItem } from '../../components/AlbumItem';

export const BestAlbumsPage = () => {
  const dispatch = useAppDispatch();
  const bestAlbums = useAppSelector((state) => state.albums.bestAlbums);

  return (
    <Box maxW={1000} margin="0 auto" pt="40px">
      {bestAlbums?.length > 0 &&
        bestAlbums.map((album) => (
          <AlbumItem
            key={album.id}
            album={album}
            handleDelete={() => dispatch(deleteBestAlbum({ id: album.id }))}
          />
        ))}
    </Box>
  );
};
