import { useEffect, useState } from 'react';

import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';

function App() {
  const [characters, setCharacters] = useState([]);

  async function fetchCharacters() {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      const data = await response.json();
      //console.log(data.results);

      const test = data.results.map((character) => {
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

      console.log(test);
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
        <Card />
        <Card />
      </main>
      <Footer />
    </div>
  );
}

export default App;
