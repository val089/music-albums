export type AlbumType = {
  id: string;
  createdAt: string;
  albumName: string;
};

export type SortType = 'id' | 'albumName' | 'createdAt';

export type SortDirectionType = 'asc' | 'desc';

export type SortPropertyType = {
  sortBy: SortType;
  sortDirection: SortDirectionType;
};
