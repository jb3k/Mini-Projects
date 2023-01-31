import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/auth/NavBar';
// import { useDispatch } from 'react-redux';
// import { authenticate } from './store/session';
import HomePage from './components/homepage';
import TicTacToe from './components/tictactoe/tictactoe';
import WeatherApp from './components/weatherAPI';
import Forecast from './components/weatherAPI/forecast';
import Search from './components/weatherAPI/search';
import { WEATHER_API_URL, WEATHER_API_KEY } from './components/weatherAPI/search/api';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);


  const handleOnSearchChange = (searchData) => {
    //search data comes from the fetch data we return in search component.
    //      we returned it as an object with two k/v pairs: 'value', 'label'
    //      we split on the space because that how we formatted the data, lat being first, then long being 2nd. 
    const [lat, lon] = searchData.value.split(" ")

    //both api urls
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`)

    // console.log(currentWeatherFetch)

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherReponse = await response[0].json();
        const forecastReponse = await response[1].json();

        //setting state with this fetched information, also adding label from the search component
        setCurrentWeather({ city: searchData.label, ...weatherReponse })
        setForecast({ city: searchData.label, ...forecastReponse })

      })
      .catch((err) => console.log(err))


  }


  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/weather' exact={true}>
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <WeatherApp data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
        </Route>
        <Route path='/tictactoe' exact={true}>
          <TicTacToe />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
