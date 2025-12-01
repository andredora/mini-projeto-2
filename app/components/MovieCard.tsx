import { useState } from "react";
import Image from "next/image";
import { Movie } from "../../store/services/moviesApi";


interface MovieCardProps {
  movie: {
    serial: string;
    title: string;
    release_date: string;
    poster: string;
  };
}


export default function MovieCard({ movie }: MovieCardProps) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="bg-black/70 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <div className="text-center">
        <h2 className="text-yellow-400 font-bold">{movie.title}</h2>
      </div>

      <div className="relative w-[330px]  flex items-center justify-center">

        {/* Spinner */}
        {loading && (
          <div className="absolute w-12 h-12 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
        )}

        <Image
          src={movie.poster}
          alt={movie.title}
          width={250}
          height={400}
          className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
            }`}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>

      <div className="text-center">
        <p className="text-white">{movie.release_date}</p>
      </div>
    </div>
  );
}
