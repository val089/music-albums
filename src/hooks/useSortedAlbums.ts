import { useState, useEffect } from 'react';
import { useAppSelector } from '../hooks/reduxHooks';
import { SortType, SortDirectionType, AlbumType } from '../types';

export const useSortedAlbums = () => {
  const albums = useAppSelector((state) => state.albums.albums);
  const [data, setData] = useState<AlbumType[]>([]);

  useEffect(() => {
    setData(albums);
  }, [albums]);

  const sortData = (sortBy: SortType, sortDirection: SortDirectionType) => {
    const sortAsc = [...albums].sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
    const sortDesc = [...albums].sort((a, b) => b[sortBy].localeCompare(a[sortBy]));

    return sortDirection === 'asc' ? setData(sortAsc) : setData(sortDesc);
  };

  return {
    sortData,
    data,
  };
};
