import { Link } from 'react-router-dom';

import { ReactComponent as FavLogoInac } from '../../assets/heart_empty.svg';
import { ReactComponent as FavLogoAc } from '../../assets/heart_full.svg';
import styled from 'styled-components';

export default function Card({ id, info, hideDetails }) {
  const { source, name, status, species, gender, origin, location } = info;
  return (
    <CardContainer>
      <FavButton />
      <Image src={source} />
      <Name>{name}</Name>
      {hideDetails ? (
        <StyledLink to={`/details/${id}`}>Show More</StyledLink>
      ) : (
        <StyledLink to="/">Go to Home</StyledLink>
      )}
      <Details hidden={hideDetails}>
        <tbody>
          <tr>
            <td>Status:</td>
            <td>{status}</td>
          </tr>

          <tr>
            <td>Species:</td>
            <td>{species}</td>
          </tr>

          <tr>
            <td>Gender:</td>
            <td>{gender}</td>
          </tr>

          <tr>
            <td>Origin:</td>
            <td>{origin}</td>
          </tr>

          <tr>
            <td>Location:</td>
            <td>{location}</td>
          </tr>
        </tbody>
      </Details>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  position: relative;
  background-color: var(--color-main-sub);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 1rem;
  gap: 1rem;
  width: 200px;
  height: 320px;
  border-radius: 0.3rem;
  margin: auto;
  box-shadow: 5px 5px 10px grey;
`;

const Name = styled.h2`
  color: white;
  font-size: 1.1rem;
  text-align: center;
`;

const StyledLink = styled(Link)`
  background-color: var(--color-main);
  color: white;
  border-radius: 0.4rem;
  padding: 0.35rem;
  text-decoration: none;
`;

const Details = styled.table`
  background-color: var(--color-main);
  color: white;
  padding: 0.5rem;
  font-size: 0.8rem;
  border-radius: 0.3rem;
  width: 100%;

  tr > td:nth-child(1) {
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`;

const FavButton = styled(FavLogoInac)`
  position: absolute;
  fill: black;
  bottom: 19rem;
  left: 11.3rem;
  transform: scale(1.5);
`;
