
import React, { useState } from 'react';



function WeatherApp() {
    const [isLoaded, setIsLoaded] = useState(false)


    return isLoaded && (
        <>
            <h1>Hello! Welcome to my Weather App!</h1>
        </>
    )

}

export default WeatherApp;
