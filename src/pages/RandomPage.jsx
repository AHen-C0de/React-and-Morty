import styled from 'styled-components';

export default function RandomPage() {
  return (
    <NotLoadedWrapper>
      <NotLoaded>?</NotLoaded>
      <GetButton>Get random character</GetButton>
    </NotLoadedWrapper>
  );
}

const NotLoadedWrapper = styled.div`
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
