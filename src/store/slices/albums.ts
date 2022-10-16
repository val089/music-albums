import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlbumType } from '../../types';

type InitialStateType = {
  albums: AlbumType[];
  bestAlbums: AlbumType[];
};

const initialState: InitialStateType = {
  albums: [],
  bestAlbums: [],
};

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {
    addAlbum: (state, action: PayloadAction<AlbumType>) => {
      state.albums.push(action.payload);
    },
    deleteAlbum: (state, action: PayloadAction<{ id: string }>) => {
      state.albums = state.albums.filter((album) => album.id !== action.payload.id);
    },
    addToBestAlbums: (state, action: PayloadAction<{ id: string }>) => {
      const bestAlbum = state.albums.filter((album) => album.id === action.payload.id);
      const isInBestAlbums = !!state.bestAlbums.find((album) => album.id === action.payload.id);

      if (bestAlbum && !isInBestAlbums) {
        state.bestAlbums.push(...bestAlbum);
      }
    },
    deleteBestAlbum: (state, action: PayloadAction<{ id: string }>) => {
      state.bestAlbums = state.bestAlbums.filter((album) => album.id !== action.payload.id);
    },
  },
});

export const { addAlbum, deleteAlbum, addToBestAlbums, deleteBestAlbum } = albumsSlice.actions;

export default albumsSlice.reducer;
