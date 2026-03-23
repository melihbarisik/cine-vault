import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { TMDBMovie } from "@/common/types/tmdb.types";

interface FavoritesState {
  items: TMDBMovie[];
}

const initialState: FavoritesState = {
  items: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<TMDBMovie>) {
      const exists = state.items.some((m) => m.id === action.payload.id);
      if (!exists) state.items.push(action.payload);
    },
    removeFavorite(state, action: PayloadAction<number>) {
      state.items = state.items.filter((m) => m.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
