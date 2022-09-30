import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';

import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
// delete below!
import Card from './components/Card';

function App() {
  const [characters, setCharacters] = useState([]);
  const [one, setOne] = useState({});

  async function fetchCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
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
      setOne(fetchedCharacters[0]);
    } catch (error) {
      console.error('Fetching data failed: ' + error);
    }
  }

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage characters={characters} />}></Route>
          <Route path="/details/:id" element={<Card key={one.id} info={{ ...one }} />}></Route>
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
