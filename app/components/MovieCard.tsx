import Image from "next/image";

interface MovieCardProps {
  movie: {
    id: string;
    title: string;
    release_date: string;
    poster: string;
  };
}

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="bg-black/70 p-4 rounded-xl shadow-lg flex flex-col items-center">
      <Image
        src={movie.poster}
        alt={movie.title}
        width={300}
        height={450}
      />
      <h2>{movie.title}</h2>
      <p>{movie.release_date}</p>
    </div>
  );
}
