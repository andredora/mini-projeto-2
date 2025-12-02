'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 50;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem;
`;

const Logo = styled.div`
  color: #facc15;
  font-size: 1.25rem;
  font-weight: bold;
`;

const LinksContainer = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  position: relative;
  font-weight: 600;
  color: #fcd34d; /* text-yellow-200 */
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  transition: all 0.3s;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 0;
    background: linear-gradient(to right, #3b82f6, #a855f7); /* from-blue-400 to-purple-500 */
    transition: all 0.3s;
  }

  &:hover::after {
    width: 100%;
  }

  ${props => props.active && css`
    &::after {
      width: 100%;
    }
  `}
`;

export default function ContentSwitcher() {
  const pathname = usePathname();

  const links = [
    { name: 'Home', href: '/' },
    { name: 'Personagens', href: '/characters' },
    { name: 'Feitiços', href: '/spells' },
    { name: 'Filmes', href: '/movies' },
    { name: 'Favoritos', href: '/favourites' },
  ];

  return (
    <Nav>
      <NavContainer>
        <Logo>Harry Potter</Logo>
        <LinksContainer>
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} active={pathname === link.href}>
              {link.name}
            </NavLink>
          ))}
        </LinksContainer>
      </NavContainer>
    </Nav>
  );
}
