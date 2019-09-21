import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import * as ROUTES from './constants/routes';
import Home from './pages/Home';
import Battle from './pages/Battle';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path={ROUTES.HOME} component={Home}/>
        <Route path={ROUTES.BATTLE} component={Battle}/>
      </Switch>
    </Router>
  );
};

export default App;
