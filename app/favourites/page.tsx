'use client';

import { useAppSelector } from "../../store/hooks";
import CharacterCard from "../components/CharacterCard";
import SpellCard from "../components/SpellCard";
import Image from "next/image";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 5rem 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const BackgroundWrapper = styled.div`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  .overlay {
    position: absolute;
    inset: 0;
    background-color: rgba(0,0,0,0.7);
    pointer-events: none;
  }
`;

const ContentWrapper = styled.div`
  z-index: 10;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3.75rem;
  color: #facc15;
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.4rem;
  color: #fbbf24;
  margin-bottom: 1rem;
`;

const Message = styled.p`
  color: white;
  margin-top: 1.5rem;
`;

const GridWrapper = styled.div`
  max-width: 72rem;
  margin: 0 auto;
  position: relative;
  z-index: 10;
  padding: 2.5rem;
  font-family: 'Crimson Text', serif;
`;

const CharacterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
`;

const SpellGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  max-width: 80rem;
  width: 100%;
  font-family: 'Crimson Text', serif;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default function FavoritesPage() {
  const { characters, spells } = useAppSelector((state) => state.favorites);

  return (
    <PageContainer>
      <BackgroundWrapper>
        <Image
          src="/images/hogwarts.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="overlay" />
      </BackgroundWrapper>

      <ContentWrapper>
        <Title>Favoritos</Title>

        <SectionTitle>Personagens</SectionTitle>
        {characters.length === 0 ? (
          <Message>Nenhum personagem favorito.</Message>
        ) : (
          <GridWrapper>
            <CharacterGrid>
              {characters.map((char) => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </CharacterGrid>
          </GridWrapper>
        )}

        <SectionTitle>Feitiços</SectionTitle>
        {spells.length === 0 ? (
          <Message>Nenhum feitiço favorito.</Message>
        ) : (
          <GridWrapper>
            <SpellGrid>
              {spells.map((spell) => (
                <SpellCard key={spell.name} spell={spell} />
              ))}
            </SpellGrid>
          </GridWrapper>
        )}
      </ContentWrapper>
    </PageContainer>
  );
}
