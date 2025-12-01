import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // usa localStorage
import { charactersApi } from "./services/charactersApi";
import { spellsApi } from "./services/spellsApi";
import favoritesReducer from "./slices/favoritesSlice";
import { moviesApi } from "./services/moviesApi";

const rootReducer = combineReducers({
  [charactersApi.reducerPath]: charactersApi.reducer,
  [spellsApi.reducerPath]: spellsApi.reducer,
  [moviesApi.reducerPath]: moviesApi.reducer,
  favorites: favoritesReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"], 
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(charactersApi.middleware)
      .concat(spellsApi.middleware)
      .concat(moviesApi.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
