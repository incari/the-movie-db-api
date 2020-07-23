import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/the-movie-db-api' component={Home} />
    </Switch>
  </BrowserRouter>
);

export default App;
