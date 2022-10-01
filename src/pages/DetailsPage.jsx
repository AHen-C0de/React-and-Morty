import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import CardsContainer from '../components/cards/CardContainer.jsx';
import Card from '../components/cards/Card.jsx';

export default function DetailsPage({ characters }) {
  const { characterID } = useParams();

  return (
    <CardsContainer>
      {characters
        .filter((character) => character.id == characterID)
        .map(({ id, ...character }) => (
          <Card key={id} id={id} info={{ ...character }} hideDetails={false} />
        ))}
    </CardsContainer>
  );
}
