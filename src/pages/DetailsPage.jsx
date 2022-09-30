import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import CardsContainer from '../components/cards/CardContainer.jsx';
import Card from '../components/cards/Card.jsx';

export default function DetailsPage({ characters }) {
  const { characterID } = useParams();

  const [clickedCharacter] = characters.filter((character) => character.id == characterID);

  return (
    <CardsContainer>
      <Card key={clickedCharacter.id} id={clickedCharacter.id} info={{ ...clickedCharacter }} />;
    </CardsContainer>
  );
}
