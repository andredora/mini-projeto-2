// app/characters/page.tsx
import { HarryPotterCharacter } from "../types/harryPotter";
import CharacterCard from "../components/CharacterCard";
import Image from "next/image";

async function getCharacters(): Promise<HarryPotterCharacter[]> {
  const res = await fetch("https://hp-api.onrender.com/api/characters", { cache: "no-store" });
  if (!res.ok) throw new Error("Falha ao buscar personagens");
  const data: HarryPotterCharacter[] = await res.json();
  return data.map((char, idx) => ({ ...char, id: char.id || `char-${idx}` }));
}

export default async function CharactersPage() {
  const characters = await getCharacters();

  return (
    <div className="relative min-h-screen py-20 bg-black/50">
      <div>
        <Image
          src="/images/hogwarts.jpg"
          alt="Background"
          width={800}
          height={600}
          className="fixed inset-0 w-full fixed opacity-30 z-0"

        />
      </div>

      <div className="text-center mb-12 pt-8 z-10 relative">
        <h1 className="text-6xl font-wizard text-yellow-400 drop-shadow-lg">
          Personagens
        </h1>
        <p className="text-lg mt-2">
          Conhece todas as personagens aqui!
        </p>
      </div>


      <div
        className="max-w-6xl mx-auto z-10 relative"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "1.5rem",
        }}
      >
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
}
