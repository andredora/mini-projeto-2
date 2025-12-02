'use client';

import { useGetMoviesQuery } from "../../store/services/moviesApi";
import MovieCard from "../components/MovieCard";
import Image from "next/image";
import styled from "styled-components";

const PageContainer = styled.div`
  min-height: 100vh;
  padding: 5rem 1rem 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: rgba(0,0,0,0.5);
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
  width: 100%;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #facc15;
  margin-bottom: 2rem;
  text-align: center;
  text-shadow: 2px 2px 8px black;
`;

const Message = styled.p<{ color?: string }>`
  color: ${(props) => props.color || "white"};
  margin-top: 1rem;
  text-align: center;
`;

const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin-top: 1.5rem;
`;

export default function MoviesPage() {
  const { data: movies, isLoading, isError } = useGetMoviesQuery();

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
        <Title>Filmes Harry Potter</Title>

        {isLoading && <Message>A carregar filmes...</Message>}
        {isError && <Message color="red">Não foi possível carregar os filmes.</Message>}
        {!isLoading && movies?.length === 0 && <Message>Nenhum filme encontrado.</Message>}

        <MoviesGrid>
          {movies?.map((movie) => (
            <MovieCard key={movie.serial} movie={movie} />
          ))}
        </MoviesGrid>
      </ContentWrapper>
    </PageContainer>
  );
}
