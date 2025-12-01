import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movie {
    id: string;
    title: string;
    year: string;
    poster: string;
}

export const moviesApi = createApi({
    reducerPath: "moviesApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://potterhead-api.vercel.app/api" }),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], void>({
            query: () => "/movies",
            transformResponse: (response: any) => {
                // Se a API retorna um array direto, apenas retorna-o
                if (Array.isArray(response)) return response;
                return [];
            },
        }),
    }),
});

export const { useGetMoviesQuery } = moviesApi;
