import React from 'react';
import './App.scss';
import 'font-awesome/css/font-awesome.min.css'

import Game from '../game/Game'
import Footer from '../footer/Footer';
import Lore from '../lore/Lore';
import Sidebar from '../ads/Sidebar';

function App() {
  return (
    <div className="App">
      <h1>Cidade dorme</h1>
      <div className="gamedisplay">
        
        <Game/>
        
      </div>
      <Lore/>
      <Footer/>
    </div>
  );
}

export default App;
