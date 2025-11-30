"use client";

import { Provider } from "react-redux";
import { store, persistor } from "../store";
import { PersistGate } from "redux-persist/integration/react";
import { FiltersProvider } from "../context/FiltersContext";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <FiltersProvider>
          {children}
        </FiltersProvider>
      </PersistGate>
    </Provider>
  );
}
