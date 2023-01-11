export const geoApiOptions = {
    method: 'GET',
    url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/cities',
    params: { countryIds: 'USA' },
    headers: {
        'X-RapidAPI-Key': '50d59d0504mshcd1e54064668a77p1e96c6jsncaa048b28a6d',
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};


export const GEO_API_URL = 'https://wft-geo-db.p.rapidapi.com/v1/geo';

//API call from openweathermap website
export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";
//API key needed in order to fetch data from website
export const WEATHER_API_KEY = "601a96406581d63d8e40f85751dd0076";
