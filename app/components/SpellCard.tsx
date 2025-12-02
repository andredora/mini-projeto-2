'use client';

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addSpell, removeSpell } from "../../store/slices/favoritesSlice";
import styled from "styled-components";

export interface Spell {
    name: string;
    description?: string;
    type?: string;
}

interface SpellCardProps {
    spell: Spell;
}

const Card = styled.div`
  position: relative;
  padding: 1.5rem; /* p-6 */
  border-radius: 0.375rem; /* rounded-md */
  border: 1px solid #c2b49a;
  box-shadow: 0 10px 15px rgba(0,0,0,0.3);
  background-image: url('/images/letter.jpg');
  background-size: cover;
  background-position: center;
`;

const FavoriteButton = styled.div`
  position: absolute;
  top: 0.5rem; /* top-2 */
  right: 0.5rem; /* right-2 */
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 10;

  span {
    color: #facc15; /* text-yellow-400 */
    font-size: 1rem;
  }
`;

const SpellName = styled.h2`
  font-family: 'Cinzel', serif;
  font-size: 1.5rem; /* text-2xl */
  margin-bottom: 0.5rem;
  color: #3a2f23;
`;

const SpellDescription = styled.p`
  font-weight: 900; /* font-black */
  color: #3a2f23;
`;

const SpellType = styled.p`
  font-size: 0.875rem; /* text-sm */
  color: #3a2f23;
`;

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
        <Card>
            <FavoriteButton onClick={toggleFavorite}>
                <span>{isFavorite ? "★" : "☆"}</span>
            </FavoriteButton>

            <SpellName>{spell.name}</SpellName>
            {spell.description && <SpellDescription>{spell.description}</SpellDescription>}
            {spell.type && <SpellType>Tipo: {spell.type}</SpellType>}
        </Card>
    );
}
