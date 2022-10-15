import { AlbumType } from '../../types';

type FavMusicListProps = {
  albums: AlbumType[];
};

export const FavMusicList = ({ albums }: FavMusicListProps) => {
  return (
    <div>
      {albums?.length > 0 &&
        albums.map(({ id, albumName, createdAt }) => (
          <div key={id}>
            <p>{albumName}</p>
            <p>{createdAt}</p>
          </div>
        ))}
    </div>
  );
};
