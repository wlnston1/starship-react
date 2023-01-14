import logo from './logo.svg';
import './App.css';
import { Board } from './components/Board';
import { fetchStarWars } from './components/Board/urls';
import { useEffect, useState } from 'react';

function App() {

  const [ss, setSS] = useState([])

  useEffect( () => {
    fetchStarWars().then(res => setSS(res));
  })

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div>
        <Board ss={ss}></Board>
      </div>
    </div>
  );
}

export default App;
