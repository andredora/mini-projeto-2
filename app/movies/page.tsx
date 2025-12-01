"use client";

import { useState } from "react";
import { useGetMoviesQuery } from "../../store/services/moviesApi";
import MovieCard from "../components/MovieCard";
import Image from "next/image";

const officialHarryPotterTitles = [
    "Harry Potter and the Philosopher's Stone",
    "Harry Potter and the Chamber of Secrets",
    "Harry Potter and the Prisoner of Azkaban",
    "Harry Potter and the Goblet of Fire",
    "Harry Potter and the Order of the Phoenix",
    "Harry Potter and the Half-Blood Prince",
    "Harry Potter and the Deathly Hallows: Part 1",
    "Harry Potter and the Deathly Hallows: Part 2",
];

export default function MoviesPage() {
    const [page, setPage] = useState(1);
    const { data, isLoading, isError } = useGetMoviesQuery({
        search: "Harry Potter",
        page,
    });

    const movies = data?.Search
        ? Array.from(
            new Map(
                data.Search.filter(
                    (m) =>
                        m.Type === "movie" && officialHarryPotterTitles.includes(m.Title)
                ).map((m) => [m.imdbID, m])
            ).values()
        )
        : [];

    return (
        <div className="min-h-screen p-8 py-20 flex flex-col items-center bg-black/50">

            <div className="fixed inset-0 w-full h-full z-0">
                <Image
                    src="/images/hogwarts.jpg"
                    alt="Background"
                    fill
                    className="object-cover "
                />

                <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
            </div>

            <div className="text-center w-full max-w-5xl mt-8 mb-8">
                <h1 className="text-6xl text-yellow-400 drop-shadow-lg">Filmes Harry Potter</h1>
            </div>

            {isLoading && <p className="text-white">A carregar filmes...</p>}
            {isError && <p className="text-red-500">Erro ao carregar filmes</p>}
            {!isLoading && movies.length === 0 && (
                <p className="text-white">Nenhum filme oficial encontrado</p>
            )}

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-14">
                {movies.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))}
            </div>
        </div>
    );
}
