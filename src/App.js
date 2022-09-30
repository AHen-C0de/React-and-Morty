import './App.css';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Card from './components/Card.jsx';

function App() {
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
