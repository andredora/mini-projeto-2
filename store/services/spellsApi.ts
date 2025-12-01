import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Spell = {
  name: string;
  type?: string;
  effect?: string;
  description?: string;
};

export type GetSpellsResult = {
  spells: Spell[];
  total: number;
};

export const spellsApi = createApi({
  reducerPath: "spellsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://hp-api.onrender.com/api/" }),
  endpoints: (builder) => ({
    getSpells: builder.query<
      GetSpellsResult,
      { page: number; pageSize: number; search?: string; type?: string }
    >({
      query: () => "spells",
      transformResponse: (response: Spell[], meta, arg) => {
        const { page, pageSize, search = "", type = "" } = arg;

        const filtered = response.filter((spell) => {
          const matchName = spell.name.toLowerCase().includes(search.toLowerCase());
          const matchType = type ? spell.type === type : true;
          return matchName && matchType;
        });

        const total = filtered.length;

        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        const paginated = filtered.slice(start, end);

        return { spells: paginated, total };
      },
    }),
  }),
});

export const { useGetSpellsQuery } = spellsApi;
