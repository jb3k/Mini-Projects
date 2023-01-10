import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import HomePage from './components/homepage';
import WeatherApp from './Components/weather api';

function App() {
  return (
    <BrowserRouter>
      <Route path='/weather' exact={true}>
        <WeatherApp />
      </Route>
      <Route path='/'>
        <HomePage />
      </Route>
    </BrowserRouter>
  );
}

export default App;
