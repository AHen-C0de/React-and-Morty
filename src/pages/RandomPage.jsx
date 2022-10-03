import styled from 'styled-components';
import { useState } from 'react';

import Card from '../components/cards/Card';
import CardsContainer from '../components/cards/CardContainer';

export default function RandomPage({ onRandom }) {
  const [randomChar, setRandomChar] = useState([]);

  return (
    <RandomPageWrapper>
      {randomChar.length === 0 ? (
        <NotLoaded>?</NotLoaded>
      ) : (
        <CardsContainer>
          {randomChar.map(({ id, name, ...character }) => (
            <Card
              id={id}
              name={name}
              info={{ ...character }}
              hideDetails={true}
            />
          ))}
        </CardsContainer>
      )}
      <GetButton onClick={() => setRandomChar(onRandom())}>
        Get random character
      </GetButton>
    </RandomPageWrapper>
  );
}

const RandomPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const NotLoaded = styled.p`
  font-family: 'Poppins';
  font-size: 10rem;
  line-height: 10rem;
`;

const GetButton = styled.button`
  background-color: var(--color-main);
  padding: 1.5rem;
  color: white;
  font-size: 1.3rem;
  cursor: pointer;

  &:hover {
    background-color: var(--color-main-sub);
  }
`;
