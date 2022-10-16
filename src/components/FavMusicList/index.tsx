import { AlbumType } from '../../types';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { deleteAlbum, addToBestAlbums, deleteBestAlbum } from '../../store/slices/albums';
import { AlbumItem } from '../AlbumItem';
import { useAppSelector } from '../../hooks/reduxHooks';

type FavMusicListProps = {
  albums: AlbumType[];
  isGridList?: boolean;
};

export const FavMusicList = ({ albums, isGridList = false }: FavMusicListProps) => {
  const bestAlbums = useAppSelector((state) => state.albums.bestAlbums);
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteAlbum({ id }));
  };

  const addToBest = (id: string) => {
    const isInBestAlbums = !!bestAlbums.find((item) => item.id === id);

    isInBestAlbums ? dispatch(deleteBestAlbum({ id })) : dispatch(addToBestAlbums({ id }));
  };

  return (
    <>
      {albums?.length > 0 &&
        albums.map((album) => (
          <AlbumItem
            isGridList={isGridList}
            key={album.id}
            album={album}
            handleDelete={() => handleDelete(album.id)}
            addToBest={() => addToBest(album.id)}
          />
        ))}
    </>
  );
};
