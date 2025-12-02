'use client';

import { useFilters } from "../../context/FiltersContext";
import styled from "styled-components";

const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem; /* gap-8 */
  margin-bottom: 1.5rem; /* mb-6 */
  align-items: flex-start;

  @media(min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Input = styled.input`
  padding: 0.5rem; /* p-2 */
  height: 2.5rem; /* h-10 */
  border-radius: 0.375rem; /* rounded */
  border: 1px solid #facc15; /* border-yellow-400 */
  background-color: black;
  color: white;
  flex: 1;
  outline: none;

  &:focus {
    ring: none;
    box-shadow: 0 0 0 2px #facc15;
  }
`;

const Select = styled.select`
  padding: 0.5rem; /* p-2 */
  height: 2.5rem; /* h-10 */
  border-radius: 0.375rem;
  border: 1px solid #facc15;
  background-color: black;
  color: white;
  outline: none;

  &:focus {
    box-shadow: 0 0 0 2px #facc15;
  }
`;

export default function Filters() {
  const { search, house, setSearch, setHouse } = useFilters();

  return (
    <FiltersContainer>
      <Input
        type="text"
        placeholder="Pesquisar personagem"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Select
        value={house}
        onChange={(e) => setHouse(e.target.value)}
      >
        <option value="">Todas as casas</option>
        <option value="Gryffindor">Gryffindor</option>
        <option value="Slytherin">Slytherin</option>
        <option value="Ravenclaw">Ravenclaw</option>
        <option value="Hufflepuff">Hufflepuff</option>
      </Select>
    </FiltersContainer>
  );
}
