import { Link } from 'react-router-dom';

import { ReactComponent as FavLogoInac } from '../../assets/heart_empty.svg';
import { ReactComponent as FavLogoAc } from '../../assets/heart_full.svg';
import styled from 'styled-components';

export default function Card({
  id,
  name,
  info,
  hideDetails,
  onFavToggle,
  isFav,
}) {
  const { source, status, species, gender, origin, location } = info;

  return (
    <CardContainer hideDetails={hideDetails}>
      {!hideDetails &&
        isFav && ( // on DetailsPage only + favorite
          <StyledFavLogoAc onClick={() => onFavToggle(name)} />
        )}
      {!hideDetails &&
        !isFav && ( // on DetailsPage only + NOT favorite
          <StyledFavLogoInac onClick={() => onFavToggle(name)} />
        )}
      <Image src={source} />
      <Name>{name}</Name>
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
      {hideDetails ? (
        <StyledLink to={`/details/${id}`}>Show More</StyledLink>
      ) : (
        <StyledLink to="/">Go to Home</StyledLink>
      )}
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
  width: ${(props) => (props.hideDetails ? '200px' : '220px')};
  height: ${(props) => (props.hideDetails ? '320px' : 'fit-content')};
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
  margin-left: 1rem;
  margin-right: 1rem;

  tr > td:nth-child(1) {
    font-weight: bold;
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 0.3rem;
`;

const StyledFavLogoInac = styled(FavLogoInac)`
  position: absolute;
  fill: black;
  right: -0.4rem;
  top: -0.4rem;
  transform: scale(1.5);
`;

const StyledFavLogoAc = styled(FavLogoAc)`
  position: absolute;
  fill: #c14a4a;
  right: -0.4rem;
  top: -0.4rem;
  transform: scale(1.5);
`;
