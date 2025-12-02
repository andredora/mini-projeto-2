'use client';

import { useState } from "react";
import Image from "next/image";
import styled, { keyframes } from "styled-components";

interface MovieCardProps {
  movie: {
    serial: string;
    title: string;
    release_date: string;
    poster: string;
  };
}

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const Card = styled.div`
  background-color: rgba(0,0,0,0.7);
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 10px 15px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  color: #facc15;
  font-weight: bold;
  text-align: center;
`;

const PosterWrapper = styled.div`
  position: relative;
  width: 330px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0;
`;

const Spinner = styled.div`
  position: absolute;
  width: 3rem; /* 12 */
  height: 3rem;
  border: 4px solid #facc15;
  border-top-color: transparent;
  border-radius: 9999px;
  animation: ${spin} 1s linear infinite;
`;

const PosterImage = styled(Image) <{ $loading: boolean }>`
  transition: opacity 0.5s;
  opacity: ${props => props.$loading ? 0 : 1};
`;

const ReleaseDate = styled.p`
  color: white;
  text-align: center;
`;

export default function MovieCard({ movie }: MovieCardProps) {
  const [loading, setLoading] = useState(true);

  return (
    <Card>
      <Title>{movie.title}</Title>
      <PosterWrapper>
        {loading && <Spinner />}
        <PosterImage
          src={movie.poster}
          alt={movie.title}
          width={250}
          height={400}
          $loading={loading}
          onLoadingComplete={() => setLoading(false)}
        />
      </PosterWrapper>
      <ReleaseDate>{movie.release_date}</ReleaseDate>
    </Card>
  );
}
