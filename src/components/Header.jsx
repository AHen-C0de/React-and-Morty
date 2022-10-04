import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <StyledHeader>
      <Headline>React & Morty</Headline>
      <nav>
        <NavigationList>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/random">Random</StyledNavLink>
          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
          <StyledNavLink to="/creative">Get creative</StyledNavLink>
        </NavigationList>
      </nav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background-color: var(--color-main);
  color: white;
  text-align: center;
`;

const Headline = styled.h1`
  padding: 0.5rem;
`;

const NavigationList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 0;
  border-top: solid 1px var(--color-main-sub);

  > * {
    border-right: solid 1px var(--color-main-sub);
    padding: 0.3rem;
    height: 100%;
    color: white;
    text-decoration: none;

    &:last-child {
      border-right: none;
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  &.active {
    background-color: var(--color-main-sub);
  }

  &:hover {
    background-color: var(--color-main-sub);
  }
`;
