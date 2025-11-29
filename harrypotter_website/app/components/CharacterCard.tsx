"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HarryPotterCharacter } from "../../types/harryPotter";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCharacter, removeCharacter } from "../../store/slices/favoritesSlice";

interface CharacterCardProps {
  character: HarryPotterCharacter;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.characters);
  const isFavorite = favorites.some((c) => c.id === character.id);

  const handleClick = () => {
    router.push(`/character/${character.id}`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); // Evita que clique abra a página
    if (isFavorite) {
      dispatch(removeCharacter(character.id));
    } else {
      dispatch(addCharacter(character));
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-cover shadow-2xl hover:scale-105 transition-all items-center cursor-pointer relative"
      style={{ backgroundImage: "url('/images/letter.jpg')", margin: "5px" }}
    >
      <div
        className="absolute w-8 h-8 flex items-center justify-center top-2 right-2 bg-black rounded-full cursor-pointer z-10"
        onClick={toggleFavorite}
      >
        <span className="text-yellow-400">{isFavorite ? "★" : "☆"}</span>
      </div>

      <div
        className="relative w-full h-10 flex items-center justify-center"
        style={{ marginTop: "1.5rem" }}
      >
        <svg className="w-full" viewBox="0 0 100 25" preserveAspectRatio="none">
          <defs>
            <filter id="shadow" x="-70%" y="-70%" width="250%" height="250%">
              <feDropShadow
                dx="0"
                dy="1.5"
                stdDeviation="1"
                floodColor="black"
                floodOpacity="0.7"
              />
            </filter>
          </defs>
          <polyline
            points="0,0 50,20 100,0"
            stroke="black"
            strokeWidth="0.5"
            fill="none"
            filter="url(#shadow)"
          />
        </svg>

        <Image
          src={"/images/hogwarts-seal.png"}
          alt={character.name}
          width={110}
          height={110}
          className="absolute rounded-full object-cover"
          style={{ marginTop: "2.5rem" }}
        />
      </div>

      <p className="text-black text-center mt-16 pb-6">Para: {character.name}</p>
    </div>
  );
}
