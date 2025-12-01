import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

export interface MoviesResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

const apiKey = process.env.NEXT_PUBLIC_OMDB_API_KEY;

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, { search: string; page: number }>({
      query: ({ search, page }) =>
        `?s=${encodeURIComponent(search)}&page=${page}&apikey=${apiKey}`,
    }),
  }),
});

export const { useGetMoviesQuery } = moviesApi;
