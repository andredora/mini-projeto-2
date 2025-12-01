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
      <div className="text-center">

        <h2 className="text-yellow-400 font-bold">{movie.title}</h2>
      </div>
      <Image
        src={movie.poster}
        alt={movie.title}
        width={300}
        height={450}
      />
      <div className="text-center">
        <p className="text-white ">{movie.release_date}</p>
      </div>
    </div>
  );
}
