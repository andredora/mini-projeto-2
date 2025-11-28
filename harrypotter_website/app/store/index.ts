import { configureStore } from "@reduxjs/toolkit";
import { charactersApi } from "./services/charactersApi";
import { spellsApi } from "./services/spellsApi";

export const store = configureStore({
  reducer: {
    [charactersApi.reducerPath]: charactersApi.reducer,
    [spellsApi.reducerPath]: spellsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(charactersApi.middleware)
      .concat(spellsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
