import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import { useLocalStorage } from './hooks';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import DetailsPage from './pages/DetailsPage';

function App() {
  const [characters, setCharacters] = useState([]);
  const [favList, setFavList, removeFavList] = useLocalStorage('favList', []);

  useEffect(() => {
    async function fetchCharacters() {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();

        const fetchedCharacters = data.results.map((character) => {
          return {
            id: character.id,
            name: character.name,
            source: character.image,
            status: character.status,
            species: character.species,
            gender: character.gender,
            origin: character.origin.name,
            location: character.location.name,
          };
        });

        setCharacters(fetchedCharacters);
      } catch (error) {
        console.error('Fetching data failed: ' + error);
      }
    }

    fetchCharacters();
  }, []);

  function toggleFavorites(name) {
    setFavList((prevFavList) =>
      prevFavList.includes(name)
        ? prevFavList.filter((favName) => favName !== name)
        : [...prevFavList, name]
    );
  }

  function clearFavorites() {
    setFavList([]);
  }

  return (
    <div className="App">
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<HomePage characters={characters} />} />
          <Route
            path="/favorites"
            element={
              <FavoritesPage
                characters={characters}
                onFavToggle={toggleFavorites}
                favList={favList}
                onClear={clearFavorites}
              />
            }
          />
          <Route
            path="/details/:characterID"
            element={
              <DetailsPage
                characters={characters}
                onFavToggle={toggleFavorites}
                favList={favList}
              />
            }
          />
        </Routes>
      </Content>
      <Footer />
    </div>
  );
}

export default App;

const Content = styled.main`
  padding-bottom: 2rem;
`;
