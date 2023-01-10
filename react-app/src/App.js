import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { authenticate } from './store/session';
import HomePage from './components/homepage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
