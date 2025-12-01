import Image from "next/image";

interface MovieCardProps {
  movie: {
    serial: string;
    title: string;
    year?: string;
    poster: string;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-black/70 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <Image
        src={movie.poster || "/images/placeholder.png"}
        alt={movie.title}
        width={200}
        height={300}
        className="rounded-lg object-cover"
      />
      <h2 className="text-yellow-400 font-bold mt-2 text-center">{movie.title}</h2>
      {movie.year && <p className="text-white text-sm">{movie.year}</p>}
    </div>
  );
}
