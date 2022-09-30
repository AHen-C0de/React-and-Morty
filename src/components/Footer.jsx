import styled from 'styled-components';

export default function Footer() {
  return (
    <StyledFooter>
      <a href="https://www.moviepilot.de/serie/rick-and-morty">The TV Serial</a>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: var(--color-main);
  padding: 0.5rem;

  > a {
    color: white;
    font-size: 0.8rem;
  }
`;
