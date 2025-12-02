'use client';

import styled, { css } from 'styled-components';

type Props = {
  currentPage: number;
  pageSize: number;
  totalItems: number;
  onPageChange: (page: number) => void;
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem; /* gap-3 */
  padding: 2rem 0; /* py-8 */
  color: white;
`;

const PageButton = styled.button<{ active?: boolean }>`
  padding: 0.25rem 0.75rem; /* py-1 px-3 */
  border-radius: 0.375rem;
  border: 1px solid #facc15;
  background-color: black;
  color: white;
  cursor: pointer;
  transition: all 0.3s;

  ${props => props.active && css`
    background-color: #facc15;
    color: black;
  `}

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const PagesWrapper = styled.div`
  display: flex;
  gap: 0.5rem; /* gap-2 */
`;

export default function PaginationControls({ currentPage, pageSize, totalItems, onPageChange }: Props) {
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const canPrev = currentPage > 1;
  const canNext = currentPage < totalPages;

  const pagesToShow = 5;
  let start = Math.max(1, currentPage - Math.floor(pagesToShow / 2));
  let end = Math.min(totalPages, start + pagesToShow - 1);
  if (end - start < pagesToShow - 1) start = Math.max(1, end - pagesToShow + 1);

  return (
    <Nav>
      <PageButton onClick={() => canPrev && onPageChange(currentPage - 1)} disabled={!canPrev}>
        ‹ Anterior
      </PageButton>

      <PagesWrapper>
        {Array.from({ length: end - start + 1 }, (_, i) => start + i).map((p) => (
          <PageButton key={p} onClick={() => onPageChange(p)} active={p === currentPage}>
            {p}
          </PageButton>
        ))}
      </PagesWrapper>

      <PageButton onClick={() => canNext && onPageChange(currentPage + 1)} disabled={!canNext}>
        Seguinte ›
      </PageButton>
    </Nav>
  );
}
