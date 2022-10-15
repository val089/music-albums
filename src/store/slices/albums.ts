import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlbumType } from '../../types';

type InitialStateType = {
  albums: AlbumType[];
};

const initialState: InitialStateType = {
  albums: [],
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
    // setAsTheBest: () => {},
  },
});

export const { addAlbum, deleteAlbum } = albumsSlice.actions;

export default albumsSlice.reducer;
