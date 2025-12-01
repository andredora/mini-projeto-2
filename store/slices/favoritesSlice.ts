import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { HarryPotterCharacter } from "../../types/harryPotter";
import type { Spell } from "../services/spellsApi";

interface FavoritesState {
  characters: HarryPotterCharacter[];
  spells: Spell[];
}

const initialState: FavoritesState = {
  characters: [],
  spells: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addCharacter: (state, action: PayloadAction<HarryPotterCharacter>) => {
      // Remove duplicados
      if (!state.characters.find((c) => c.id === action.payload.id)) {
        state.characters.push(action.payload);
      }
    },
    removeCharacter: (state, action: PayloadAction<string>) => {
      state.characters = state.characters.filter((c) => c.id !== action.payload);
    },
    addSpell: (state, action: PayloadAction<Spell>) => {
      if (!state.spells.find((s) => s.name === action.payload.name)) {
        state.spells.push(action.payload);
      }
    },
    removeSpell: (state, action: PayloadAction<string>) => {
      state.spells = state.spells.filter((s) => s.name !== action.payload);
    },
  },
});

export const { addCharacter, removeCharacter, addSpell, removeSpell } = favoritesSlice.actions;
export default favoritesSlice.reducer;
