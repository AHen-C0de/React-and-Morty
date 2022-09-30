import styled from 'styled-components';

export default function Header() {
  return (
    <StyledHeader>
      <Headline>React & Morty</Headline>
      <nav>
        <NavigationList>
          <NavigationItem>Home</NavigationItem>
          <NavigationItem>Random</NavigationItem>
          <NavigationItem>Favorites</NavigationItem>
          <NavigationItemLast>Get creative</NavigationItemLast>
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

const NavigationList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  padding: 0;
  border-top: solid 1px var(--color-main-sub);
`;

const NavigationItem = styled.li`
  border-right: solid 1px var(--color-main-sub);
  padding: 0.3rem;
  height: 100%;
`;

const NavigationItemLast = styled.li`
  padding: 0.3rem;
`;
