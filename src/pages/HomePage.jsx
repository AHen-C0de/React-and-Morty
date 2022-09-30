import styled from 'styled-components';

import CardsContainer from '../components/cards/CardContainer.jsx';
import Card from '../components/cards/Card.jsx';

export default function CardsPage({ characters }) {
  return (
    <CardsContainer>
      {characters.map(({ id, ...character }) => {
        return <Card key={id} id={id} info={{ ...character }} hideDetails={true} />;
      })}
    </CardsContainer>
  );
}
