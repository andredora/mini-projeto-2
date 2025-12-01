import { HarryPotterCharacter } from "../../../types/harryPotter";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";
import BackButton from "../../components/backButton";

async function getCharacter(id: string): Promise<HarryPotterCharacter | null> {
  try {
    const res = await fetch("https://hp-api.onrender.com/api/characters");
    if (!res.ok) throw new Error();
    const all: HarryPotterCharacter[] = await res.json();

    return (
      all.find(
        (c) =>
          c.id === id ||
          c.name.toLowerCase().includes(id.toLowerCase())
      ) || null
    );
  } catch {
    return null;
  }
}

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const character = await getCharacter(id);

  if (!character) notFound();

  return (

    <div className="relative min-h-screen bg-black/50 py-20 px-8">
      <div className="fixed inset-0 w-full h-full z-0">
        <Image
          src="/images/hogwarts.jpg"
          alt="Background"
          fill
          className="object-cover "
        />

        <div className="absolute inset-0 bg-black/70 pointer-events-none"></div>
      </div>

      <div className="relative py-2 px-8">
        <BackButton />
      </div>

      <div className="text-black  p-8 flex flex-col justify-center items-center font-['Crimson_Text'] relative"
        style={{ marginTop: '4rem' }}
      >



        <div
          className="
          w-full max-w-4xl
          p-10 pt-16
          bg-cover bg-center
          rounded-md border border-[#c2b49a]
          shadow-xl clip-path-envelope
          mx-auto
          relative z-1
        "
          style={{ backgroundImage: "url('/images/letter.jpg')" }}
        >

          <div className="flex gap-6 items-start mt-20 ml-8"
            style={{ marginTop: "4rem", marginLeft: "5rem" }}
          >

            <div className="ml-4">
              <img
                src={character.image?.trim() ? character.image : "/images/no-image.png"}
                alt={character.name}
                className="object-cover object-center rounded-md shadow-lg"
                style={{ width: "250px", height: "400px" }}
              />

            </div>

            <div className="flex-1 text-lg text-[#3a2f23] leading-relaxed space-y-2 mr-4">

              <h1
                className="
                text-4xl mb-6 text-left font-['Cinzel'] text-black
                drop-shadow-[1px_1px_0px_#e6dcc1]
              "
              >
                {character.name}
              </h1>

              {character.house && (
                <p><span className="font-bold font-['Cinzel']">Casa:</span> {character.house}</p>
              )}

              {character.species && (
                <p><span className="font-bold font-['Cinzel']">Espécie:</span> {character.species}</p>
              )}

              {character.gender && (
                <p><span className="font-bold font-['Cinzel']">Género:</span> {character.gender}</p>
              )}

              {character.patronus && (
                <p><span className="font-bold font-['Cinzel']">Patronus:</span> {character.patronus}</p>
              )}

              {character.ancestry && (
                <p><span className="font-bold font-['Cinzel']">Ancestralidade:</span> {character.ancestry}</p>
              )}

              {character.wand?.wood && (
                <p>
                  <span className="font-bold font-['Cinzel']">Varinha:</span>{" "}
                  {character.wand.wood} · {character.wand.core} ·{" "}
                  {character.wand.length || "-"}"
                </p>
              )}
            </div>
          </div>
        </div>

        <style>{`
        .clip-path-envelope {
          clip-path: polygon(35% 0, 65% 0, 90% 20%, 90% 99%, 10% 100%, 10% 20%);
        }
      `}</style>
      </div>
    </div>
  );
}