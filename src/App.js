import './App.css';

function App() {
  return (
    <div className="App">
      {' '}
      <header>
        <h1>React & Morty</h1>
        <nav>
          <ul>
            <li>Home</li>
            <li>Random</li>
            <li>Favorites</li>
            <li>Get creative</li>
          </ul>
        </nav>
      </header>
      <main>
        <article>
          <img src="https://rickandmortyapi.com/api/character/avatar/2.jpeg" />
          <h2>Name</h2>
          <button>Show more</button>
          <p hidden>Detailed Information...</p>
        </article>
      </main>
      <footer>
        <a href="https://de.wikipedia.org/wiki/Rick_and_Morty">What is Rick & Morty?</a>
      </footer>
    </div>
  );
}

export default App;
