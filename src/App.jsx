import { Header } from './components/Header.jsx'
import { GameCard } from './components/GameCard.jsx'
import { Banner } from './components/Banner.jsx'
import './App.css'
import { GameListing } from './components/GameListing.jsx';

function App() {
  return (
    <>
    <Header/>
    <hr></hr>
    <Banner/>
    <GameListing/>
    </>
  );
}

export default App;
