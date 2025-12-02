'use client';

import React from 'react';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const Container = styled.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #111827, #000);
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`;

const HeroBackground = styled.div<{ $image: string; $opacity?: number }>`
  position: absolute;
  inset: 0;
  background-image: url(${props => props.$image});
  background-size: cover;
  background-position: center;
  opacity: ${props => props.$opacity ?? 1};
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, black, transparent, black);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  padding: 0 1rem;
  animation: ${fadeIn} 1.5s ease-out;
`;

const HeroTitle = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  color: #facc15;
  margin-bottom: 1.75rem;
  @media(max-width: 768px) { font-size: 4rem; }
`;

const HeroText = styled.p`
  font-size: 1.5rem;
  color: #d1d5db;
  margin-bottom: 2rem;
  max-width: 40rem;
  margin-left: auto;
  margin-right: auto;
  @media(max-width: 768px) { font-size: 1.25rem; }
`;

const HeroButton = styled.button`
  background-color: #facc15;
  color: black;
  font-weight: bold;
  padding: 1rem 2rem;
  border-radius: 1rem;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s;
  &:hover { transform: scale(1.1); }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: ${bounce} 1.5s infinite;

  .inner {
    width: 0.25rem;
    height: 0.75rem;
    background: #facc15;
    border-radius: 9999px;
    margin-top: 0.5rem;
  }
`;

const Section = styled.section<{ $bgImage?: string }>`
  position: relative;
  padding: 5rem 1rem;

  ${props => props.$bgImage && `
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: url(${props.$bgImage});
      background-size: cover;
      background-position: center;
      opacity: 0.5;
      z-index: 0;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, black, transparent, black);
      z-index: 1;
    }
  `}
`;

const SectionTitle = styled.h2`
  font-size: 4rem;
  font-weight: bold;
  color: #facc15;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 10;
  @media(max-width: 768px) { font-size: 2.5rem; }
`;

const Grid = styled.div<{ cols?: number }>`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(${props => props.cols ?? 1}, 1fr);
  @media(max-width: 400px) { grid-template-columns: 1fr; }
  max-width: 72rem; 
  item-align: center;
  margin: 0 auto;
    

`;

const Card = styled.div`
  position: relative;
  z-index: 10;
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid rgba(250, 204, 21, 0.3);
  transition: all 0.3s;
  items-align: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  &:hover { border-color: #facc15; transform: translateY(-0.5rem); }
`;

const CardIcon = styled.div<{ size?: string }>`
  width: ${props => props.size ?? '5rem'};
  height: ${props => props.size ?? '5rem'};
  background-color: #facc15;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 1.5rem auto;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #fbbf24;
  margin-bottom: 1rem;
  text-align: center;
`;

const CardText = styled.p`
  color: #d1d5db;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const CardLink = styled(Link)`
  color: black;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 0.75rem;
  text-align: center;
  display: inline-block;
  transition: all 0.3s;
  background-color: #facc15; 
`;

const TechCardContainer = styled.div`
  max-width: 72rem; 
  margin: 3rem auto 0 auto;
  backdrop-filter: blur(20px);
  border-radius: 2rem;
  padding: 2rem;
  border: 1px solid rgba(250, 204, 21, 0.3);
  transition: all 0.3s;
  &:hover { border-color: #facc15; transform: translateY(-0.5rem); }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  justify-items: center;
  @media(min-width: 640px) {
    grid-template-columns: repeat(5, 1fr);
  }
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TechIcon = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  border: 1px solid #facc15;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.5rem;
  overflow: hidden;
`;

const TechName = styled.span`
  color: #d1d5db;
  font-size: 0.875rem;
  text-align: center;
`;



export default function Home() {
  return (
    <Container>
      <HeroSection>
        <HeroBackground $image="/images/Hogwarts.avif" $opacity={0.5} />
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Harry Potter</HeroTitle>
          <HeroText>Website feito para quem gosta do universo de Harry Potter.</HeroText>
          <HeroButton onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}>
            Sobre o projeto
          </HeroButton>
        </HeroContent>
        <ScrollIndicator><div className="inner" /></ScrollIndicator>
      </HeroSection>

      <Section id="features" $bgImage="/images/hogwarts.jpg">
        <SectionTitle>Conteúdos Disponíveis</SectionTitle>
        <Grid cols={3}>
          <Card>
            <CardIcon><img src="/images/wizzard.png" className="w-20 h-20" /></CardIcon>
            <CardTitle>Personagens</CardTitle>
            <CardText>Aqui encontras todas as personagens do universo Harry Potter</CardText>
            <CardLink href="/characters">Ver Personagens</CardLink>
          </Card>
          <Card>
            <CardIcon><img src="/images/wand.png" className="w-12 h-12" /></CardIcon>
            <CardTitle>Feitiços</CardTitle>
            <CardText>Todos os feitiços do universo Harry Potter estão aqui.</CardText>
            <CardLink href="/spells">Explorar Feitiços</CardLink>
          </Card>
          <Card>
            <CardIcon><img src="/images/movie.png" className="h-14" /></CardIcon>
            <CardTitle>Filmes</CardTitle>
            <CardText>Todos os filmes de Harry Potter.</CardText>
            <CardLink href="/movies">Ver Filmes</CardLink>
          </Card>
        </Grid>
      </Section>

      <Section id="about-project">
        <SectionTitle>Sobre o Projeto</SectionTitle>
        <Grid cols={2}>
          <Card>
            <CardIcon><img src="/images/projeto.png" className="w-14 h-14" /></CardIcon>
            <CardTitle>Projeto</CardTitle>
            <CardText>
              Este projeto foi desenvolvido por <span style={{ color: '#facc15', fontWeight: 'bold' }}>André Dora</span>.
              É um website que apresenta personagens, feitiços e filmes do universo de Harry Potter.
            </CardText>
          </Card>

          <Card>
            <CardIcon><img src="/images/api.png" className="w-14 h-14" /></CardIcon>
            <CardTitle>API's</CardTitle>
            <CardText>
              Personagens e feitiços foram obtidos da API{' '}
              <a href="https://hp-api.onrender.com" target="_blank" style={{ color: '#facc15', textDecoration: 'underline' }}>hp-api</a>.
              <br />
              Filmes obtidos através da{' '}
              <a href="https://potterhead-api.vercel.app/api/movies" target="_blank" style={{ color: '#facc15', textDecoration: 'underline' }}>Potterhead API</a>.
            </CardText>
          </Card>
        </Grid>
        <TechCardContainer>
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fbbf24', marginBottom: '2rem' }}>
              Tecnologias Usadas
            </h3>
            <TechGrid>
              {[
                { name: "Next.js", img: "/images/nextjs.png" },
                { name: "Tailwind CSS", img: "/images/tailwind.png" },
                { name: "Redux Toolkit", img: "/images/redux.png" },
                { name: "React Context", img: "/images/react.png" },
                { name: "ESLint", img: "/images/eslint.png" },
              ].map(tech => (
                <TechItem key={tech.name}>
                  <TechIcon>
                    <img src={tech.img} alt={tech.name} style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} />
                  </TechIcon>
                  <TechName>{tech.name}</TechName>
                </TechItem>
              ))}
            </TechGrid>
          </div>
        </TechCardContainer>


      </Section>
    </Container>
  );
}
