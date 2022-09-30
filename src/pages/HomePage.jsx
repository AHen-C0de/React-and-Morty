import styled from 'styled-components';

import Card from '../components/Card.jsx';

export default function CardsPage({ characters }) {
  return (
    <CardsContainer>
      {characters.map(({ id, ...character }) => {
        return <Card key={id} info={{ ...character }} />;
      })}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
