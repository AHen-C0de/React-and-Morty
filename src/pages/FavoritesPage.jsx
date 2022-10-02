import styled from 'styled-components';

import Card from '../components/cards/Card';
import CardsContainer from '../components/cards/CardContainer';

export default function FavoritesPage({
  characters,
  favList,
  onFavToggle,
  onClear,
}) {
  return (
    <FavoritesWrapper>
      <ClearButton onClick={onClear}>Clear Favorites</ClearButton>
      <CardsContainer>
        {characters
          .filter((character) => favList.includes(character.name))
          .map(({ id, name, ...character }) => (
            <Card
              key={id}
              id={id}
              name={name}
              info={{ ...character }}
              hideDetails={false}
              isFav={true}
              onFavToggle={onFavToggle}
            />
          ))}
      </CardsContainer>
    </FavoritesWrapper>
  );
}

const FavoritesWrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: start; */
`;

const ClearButton = styled.button`
  position: absolute;
  margin-left: 0.9%;
  margin-top: 0.9%;
  background-color: #c14a4a;
  border-color: #b34545;
  color: white;
  font-style: italic;

  &:hover {
    background-color: #993b3b;
    cursor: pointer;
  }
`;
