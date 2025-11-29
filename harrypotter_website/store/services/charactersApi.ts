import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { HarryPotterCharacter } from "../../types/harryPotter";

export type GetCharactersResult = {
  characters: HarryPotterCharacter[];
  total: number;
};

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hp-api.onrender.com/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      GetCharactersResult,
      { page: number; pageSize: number; search?: string; house?: string }
    >({
      query: () => "characters",
      transformResponse: (response: HarryPotterCharacter[], meta, arg) => {
        const { page, pageSize, search = "", house = "" } = arg;

        const filtered = response.filter((c) => {
          const matchName = c.name.toLowerCase().includes(search.toLowerCase());
          const matchHouse = house ? c.house === house : true;
          return matchName && matchHouse;
        });

        const total = filtered.length;

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginated = filtered.slice(start, end).map((c, i) => ({
          ...c,
          id: c.id || `char-${start + i}`,
        }));

        return { characters: paginated, total };
      },
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;
