import React from 'react';
import './styles.css';

import Header from './elements/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <h2>Mês Atual</h2>
        <p>Gráficos</p>
      </div>

    </div>
  );
}

export default App;
