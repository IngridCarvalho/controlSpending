import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './styles.css';

import Header from './elements/Header';
import Account from './pages/Account';
import Category from './pages/Category';
import Expense from './pages/Expense';
import Revenue from './pages/Revenue';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route path='/account' exact component={Account} />
        <Route path='/category' exact component={Category} />
        <Route path='/expense' exact component={Expense} />
        <Route path='/revenue' exact component={Revenue} />
      </div>
    </Router>
  );
}

export default App;
