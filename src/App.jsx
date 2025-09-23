import React from 'react';
import { Create } from './components/Create';
import { CardsGrid } from './components/CardsGrid';
import './style/App.css';
import './style/fonts.css';

const App = () => {
  return (
    <div>
      <header>
        <h1 className="heading">Notes & Tasks Dashboard</h1>
        <Create />
      </header>
      <main>
        <CardsGrid />
      </main>
    </div>
  );
};

export default App;
