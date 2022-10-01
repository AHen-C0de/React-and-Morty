import styled from 'styled-components';
import { useParams } from 'react-router-dom';

import CardsContainer from '../components/cards/CardContainer.jsx';
import Card from '../components/cards/Card.jsx';

export default function DetailsPage({ characters, onFavToggle, favList }) {
  const { characterID } = useParams();
  console.log(favList);

  return (
    <CardsContainer>
      {characters
        .filter((character) => character.id == characterID)
        .map(({ id, name, ...character }) => (
          <Card
            key={id}
            id={id}
            name={name}
            info={{ ...character }}
            hideDetails={false}
            onFavToggle={onFavToggle}
            isFav={favList.includes(name)}
          />
        ))}
    </CardsContainer>
  );
}
