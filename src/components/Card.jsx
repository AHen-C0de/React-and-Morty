import styled from 'styled-components';

export default function Card() {
  return (
    <CardContainer>
      <Image src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
      <Name>Name</Name>
      <ShowMoreButton>Show more</ShowMoreButton>
      <Details>Detailed Information...</Details>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  background-color: var(--color-main-sub);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
  width: 70%;
  border-radius: 0.3rem;
  margin: 2rem auto;
`;

const Name = styled.h2`
  color: white;
`;

const ShowMoreButton = styled.button`
  background-color: var(--color-main);
  color: white;
  border-radius: 0.4rem;
  padding: 0.35rem;
`;

const Details = styled.p`
  background-color: var(--color-main);
  color: white;
  padding: 1.5rem;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;
