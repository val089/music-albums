import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import polandFlag from 'tastigoFrontendNative/src/assets/images/flags/poland.png';
// import russiaFlag from 'tastigoFrontendNative/src/assets/images/flags/russia.png';
import type { Locale } from '../../translations/messages';

export const localeOptions = {
  en: {
    label: 'english',
    // flag: ukFlag,
  },
  pl: {
    label: 'polski',
    // flag: polandFlag,
  },
};

const initialState = {
  locale: 'pl' as Locale,
};

export const localeSlice = createSlice({
  name: 'locale',
  initialState,
  reducers: {
    changeLocale: (state, action: PayloadAction<{ locale: Locale }>) => {
      state.locale = action.payload.locale;
    },
  },
});

export const { changeLocale } = localeSlice.actions;

export default localeSlice.reducer;
