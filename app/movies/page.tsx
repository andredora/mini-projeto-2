"use client";

import { useGetMoviesQuery } from "../../store/services/moviesApi";
import MovieCard from "../components/MovieCard";
import Image from "next/image";

export default function MoviesPage() {
    const { data: movies, isLoading, isError } = useGetMoviesQuery();

    return (
        <div className="min-h-screen p-8 py-20 flex flex-col items-center justify-center bg-black/50">

            <div className="fixed inset-0 w-full h-full z-0">
                <Image
                    src="/images/hogwarts.jpg"
                    alt="Background"
                    fill
                    className="object-cover "
                />

                <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
            </div>
            <div className="z-10 items-center justify-center relative flex flex-col">
                <h1 className="text-6xl text-yellow-400 drop-shadow-lg mb-8">
                    Filmes Harry Potter
                </h1>

                {isLoading && <p className="text-white">A carregar filmes...</p>}
                {isError && (
                    <p className="text-red-500">Não foi possível carregar os filmes.</p>
                )}
                {!isLoading && movies?.length === 0 && (
                    <p className="text-white">Nenhum filme encontrado.</p>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl mt-6">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.serial} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    );
}
