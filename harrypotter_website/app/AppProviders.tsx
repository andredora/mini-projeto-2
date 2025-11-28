"use client";

import { Provider } from "react-redux";
import { store } from "./store";
import { FiltersProvider } from "./context/FiltersContext";

export default function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <FiltersProvider>{children}</FiltersProvider>
    </Provider>
  );
}
