"use client";

import Image from "next/image";

interface MovieCardProps {
  movie: {
    imdbID: string;
    Title: string;
    Year: string;
    Poster: string;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div
      className="bg-cover shadow-2xl  items-center  relative"
      style={{ backgroundImage: "url('/images/letter.jpg')", margin: "5px" }}
    >
      <div className="relative w-full h-10 flex items-center justify-center">
        <Image
          src={movie.Poster !== "N/A" ? movie.Poster : "/images/hogwarts-seal.png"}
          alt={movie.Title}
          width={110}
          height={110}
          className="absolute rounded object-cover"
          style={{ marginTop: "2.5rem" }}
        />
      </div>

      <p className="text-black text-center mt-24 pb-6">
        {movie.Title} ({movie.Year})
      </p>
    </div>
  );
}
