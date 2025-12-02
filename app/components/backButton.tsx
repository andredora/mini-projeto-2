'use client';

import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  position: absolute;
  top: 1.5rem; 
  left: 2rem; 
  background-color: #facc15; 
  color: black;
  font-weight: bold;
  padding: 0.5rem 1.5rem; 
  border-radius: 1rem; 
  font-size: 1.125rem; 
  z-index: 10;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default function BackButton() {
  return (
    <Button onClick={() => window.history.back()}>
      Voltar
    </Button>
  );
}
