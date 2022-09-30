import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Card from '../components/Card.jsx';

export default function DetailsPage({ characters, id }) {
  const character = characters.filter((character) => character.id === id);
  console.log(character);
  return (
    <CardsContainer>
      <Card key={id} info={{ ...character }} />;
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
`;
