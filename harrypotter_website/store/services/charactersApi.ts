import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { HarryPotterCharacter } from "../../types/harryPotter";

export type GetCharactersResult = {
  characters: HarryPotterCharacter[];
  total: number;
};

export const charactersApi = createApi({
  reducerPath: "charactersApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/" }),
  endpoints: (builder) => ({
    getCharacters: builder.query<
      GetCharactersResult,
      { page: number; pageSize: number; search?: string; house?: string }
    >({
      query: ({ page, pageSize, search = "", house = "" }) =>
        `characters?page=${page}&pageSize=${pageSize}&search=${search}&house=${house}`,
    }),
  }),
});

export const { useGetCharactersQuery } = charactersApi;

