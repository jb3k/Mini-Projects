import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { authenticate } from './store/session';
import HomePage from './components/homepage';
import WeatherApp from './components/weatherAPI';
import Search from './components/weatherAPI/search';

function App() {
  // const [loaded, setLoaded] = useState(false);
  // const dispatch = useDispatch();

  // if (!loaded) {
  //   return null;
  // }

  const handleOnSearchChange = (searchData) => {

    console.log()

  }


  return (
    <BrowserRouter>
      <Switch>
        <Route path='/weather' exact={true}>
          <Search onSearchChange={handleOnSearchChange} />
          <WeatherApp />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
