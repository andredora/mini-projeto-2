"use client";

import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { removeCharacter, removeSpell } from "../../store/slices/favoritesSlice";
import CharacterCard from "../components/CharacterCard";
import SpellCard from "../components/SpellCard";

export default function FavoritesPage() {
    const { characters, spells } = useAppSelector((state) => state.favorites);
    const dispatch = useAppDispatch();

    return (
        <div className="min-h-screen p-8 py-20 flex flex-col items-center">
            <h1 className="text-6xl text-yellow-400 mb-12">Favoritos</h1>

            <h2 className="text-3xl text-yellow-300">Personagens</h2>
            {characters.length === 0 ? (
                <p>Nenhum personagem favorito.</p>
            ) : (
                <div className="max-w-6xl mx-auto z-10 relative font-['Crimson_Text'] p-10">

                    <div className="grid grid-cols-4 gap-6">
                        {characters.map((char) => (
                            <CharacterCard key={char.id} character={char} />
                        ))}
                    </div>
                </div>
            )}

            <h2 className="text-3xl mb-4 text-yellow-300">Feitiços</h2>
            {spells.length === 0 ? (
                <p>Nenhum feitiço favorito.</p>
            ) : (

                <div className="max-w-6xl mx-auto z-10 relative font-['Crimson_Text'] p-10">

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {spells.map((spell) => (
                            <div key={spell.name} className="relative">
                                <SpellCard spell={spell} />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
