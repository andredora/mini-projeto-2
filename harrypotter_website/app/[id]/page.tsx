// CharacterPage.tsx - Carta Mágica
import { HarryPotterCharacter } from '../../types/harryPotter';
import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getCharacter(id: string): Promise<HarryPotterCharacter | null> {
  try {
    const res = await fetch('https://hp-api.onrender.com/api/characters');
    if (!res.ok) throw new Error('Failed to fetch characters');
    const characters: HarryPotterCharacter[] = await res.json();

    const character = characters.find(char =>
      char.id === id || char.name.toLowerCase().includes(id.toLowerCase())
    );

    return character || null;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
}

interface CharacterPageProps {
  params: Promise<{ id: string }>
}

export default async function CharacterPage({ params }: CharacterPageProps) {
  const { id } = await params;
  const character = await getCharacter(id);

  if (!character) notFound();

  return (
    <div className="min-h-screen py-12 px-4 bg-parchment bg-cover bg-center flex justify-center items-start">
      {/* Carta mágica */}
      <div className="relative w-full max-w-lg bg-yellow-50/90 border-4 border-yellow-700 rounded-3xl shadow-2xl p-8 flex flex-col items-center mt-12 transform transition-transform hover:scale-105">

        {/* Efeitos de pergaminho rasgado */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none border-4 border-dashed border-yellow-800 rounded-3xl"></div>

        {/* Botão de voltar */}
        <div className="w-full flex justify-start mb-6">
          <Link
            href="/"
            className="bg-yellow-400 text-black font-bold py-2 px-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-all"
          >
            ← Voltar
          </Link>
        </div>

        {/* Imagem do personagem */}
        {character.image && (
          <div className="relative w-32 h-32 mb-6">
            <img
              src={character.image}
              alt={character.name}
              className="rounded-full object-cover w-full h-full shadow-lg border-2 border-yellow-700"
            />
          </div>
        )}

        {/* Nome e casa */}
        <h1 className="text-2xl font-wizard text-yellow-800 mb-1 text-center">{character.name}</h1>
        {character.house && (
          <p className="text-yellow-700 italic mb-4 text-center">Casa: {character.house}</p>
        )}

        {/* Informações */}
        <div className="w-full grid grid-cols-1 gap-3 mb-4">
          {character.species && <InfoCard label="Espécie" value={character.species} />}
          {character.gender && <InfoCard label="Gênero" value={character.gender} />}
          {character.dateOfBirth && <InfoCard label="Nascimento" value={character.dateOfBirth} />}
          {character.ancestry && <InfoCard label="Ancestralidade" value={character.ancestry} />}
          <InfoCard label="Status Mágico" value={character.wizard ? 'Bruxo(a)' : 'Trouxa'} />
          {character.patronus && <InfoCard label="Patrono" value={character.patronus} />}
        </div>

        {/* Varinha */}
        {(character.wand?.wood || character.wand?.core || character.wand?.length) && (
          <div className="w-full bg-yellow-100 border-2 border-yellow-700 rounded-lg p-4 mb-4 shadow-inner">
            <h2 className="font-bold font-wizard text-yellow-800 text-lg mb-2 text-center">Varinha Mágica</h2>
            <div className="grid grid-cols-1 gap-2">
              {character.wand.wood && <InfoCard label="Madeira" value={character.wand.wood} />}
              {character.wand.core && <InfoCard label="Núcleo" value={character.wand.core} />}
              {character.wand.length && <InfoCard label="Comprimento" value={`${character.wand.length}"`} />}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function InfoCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-700 p-2 rounded shadow-sm hover:shadow-md transition-all">
      <div className="font-wizard font-semibold text-yellow-800">{label}</div>
      <div className="text-yellow-700">{value}</div>
    </div>
  );
}
