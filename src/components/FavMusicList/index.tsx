import { AlbumType } from '../../types';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { deleteAlbum, addToBestAlbums } from '../../store/slices/albums';

type FavMusicListProps = {
  albums: AlbumType[];
};

export const FavMusicList = ({ albums }: FavMusicListProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = (id: string) => {
    dispatch(deleteAlbum({ id }));
  };

  const addToBest = (id: string) => {
    dispatch(addToBestAlbums({ id }));
  };

  return (
    <div>
      {albums?.length > 0 &&
        albums.map(({ id, albumName, createdAt }) => (
          <div key={id}>
            <p>{albumName}</p>
            <p>{createdAt}</p>
            <button style={{ background: '#ddd' }} onClick={() => handleDelete(id)}>
              DELETE
            </button>
            <button style={{ background: 'aqua' }} onClick={() => addToBest(id)}>
              ADD TO BEST
            </button>
          </div>
        ))}
    </div>
  );
};
