import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.css';

import Header from './elements/Header';
import Account from './pages/Account';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/account' exact component={Account} />
      </div>
    </Router>
  );
}

export default App;
