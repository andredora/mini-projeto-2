"use client";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addSpell, removeSpell } from "../../store/slices/favoritesSlice";

export interface Spell {
    name: string;
    description?: string;
    type?: string;
}

interface SpellCardProps {
    spell: Spell;
}

export default function SpellCard({ spell }: SpellCardProps) {
    const dispatch = useAppDispatch();
    const favoriteSpells = useAppSelector((state) => state.favorites.spells);
    const isFavorite = favoriteSpells.some((s) => s.name === spell.name);

    const toggleFavorite = () => {
        if (isFavorite) {
            dispatch(removeSpell(spell.name));
        } else {
            dispatch(addSpell(spell));
        }
    };

    return (
        <div
            className="p-6 rounded-md border border-[#c2b49a] shadow-lg bg-cover bg-center relative"
            style={{ backgroundImage: "url('/images/letter.jpg')" }}
        >
            <div
                className="absolute w-8 h-8 flex items-center justify-center top-2 right-2 bg-black rounded-full cursor-pointer z-10"
                onClick={toggleFavorite}
            >
                <span className="text-yellow-400">{isFavorite ? "★" : "☆"}</span>
            </div>


            <h2 className="text-2xl mb-2 font-['Cinzel'] text-[#3a2f23]">
                {spell.name}
            </h2>
            {spell.description && (
                <p className="font-black text-[#3a2f23]">{spell.description}</p>
            )}
            {spell.type && <p className="text-sm text-[#3a2f23]">Tipo: {spell.type}</p>}
        </div>
    );
}
