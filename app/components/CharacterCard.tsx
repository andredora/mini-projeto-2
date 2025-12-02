'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";
import { HarryPotterCharacter } from "../../types/harryPotter";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { addCharacter, removeCharacter } from "../../store/slices/favoritesSlice";
import styled from "styled-components";

interface CharacterCardProps {
  character: HarryPotterCharacter;
}

const Card = styled.div`
  background-image: url('/images/letter.jpg');
  background-size: cover;
  background-position: center;
  margin: 5px;
  cursor: pointer;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const FavoriteButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  width: 2rem;
  height: 2rem;
  background-color: black;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;

  span {
    color: #facc15; // amarelo
    font-size: 1rem;
  }
`;

const SealContainer = styled.div`
  position: relative;
  width: 100%;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  svg {
    width: 100%;
  }

  img {
    position: absolute;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const CharacterName = styled.p`
  text-align: center;
  color: black;
  margin-top: 4rem;
  padding-bottom: 1.5rem;
`;

export default function CharacterCard({ character }: CharacterCardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const favorites = useAppSelector((state) => state.favorites.characters);
  const isFavorite = favorites.some((c) => c.id === character.id);

  const handleClick = () => {
    router.push(`/character/${character.id}`);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    if (isFavorite) {
      dispatch(removeCharacter(character.id));
    } else {
      dispatch(addCharacter(character));
    }
  };

  return (
    <Card onClick={handleClick}>
      <FavoriteButton onClick={toggleFavorite}>
        <span>{isFavorite ? "★" : "☆"}</span>
      </FavoriteButton>

      <SealContainer>
        <svg viewBox="0 0 100 25" preserveAspectRatio="none">
          <defs>
            <filter id="shadow" x="-70%" y="-70%" width="250%" height="250%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1" floodColor="black" floodOpacity="0.7" />
            </filter>
          </defs>
          <polyline points="0,0 50,20 100,0" stroke="black" strokeWidth="0.5" fill="none" filter="url(#shadow)" />
        </svg>

        <Image
          src={"/images/hogwarts-seal.png"}
          alt={character.name}
          width={110}
          height={110}
        />
      </SealContainer>

      <CharacterName>Para: {character.name}</CharacterName>
    </Card>
  );
}
