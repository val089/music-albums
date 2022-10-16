import { useAppSelector } from '../../hooks/reduxHooks';
import { deleteBestAlbum } from '../../store/slices/albums';
import { useAppDispatch } from '../../hooks/reduxHooks';

export const BestAlbumsPage = () => {
  const dispatch = useAppDispatch();
  const bestAlbums = useAppSelector((state) => state.albums.bestAlbums);

  return (
    <div>
      {bestAlbums?.length > 0 &&
        bestAlbums.map(({ id, albumName, createdAt }) => (
          <div key={id}>
            <p>{albumName}</p>
            <p>{createdAt}</p>
            <button
              style={{ background: '#ddd' }}
              onClick={() => dispatch(deleteBestAlbum({ id }))}
            >
              DELETE
            </button>
          </div>
        ))}
    </div>
  );
};
