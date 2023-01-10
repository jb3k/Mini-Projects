import React, { useState } from 'react';



function HomePage() {
    const [isLoaded, setIsLoaded] = useState(false)


    return isLoaded && (
        <>
            <h1> Hello Welcome to my Mini Projects Repo!</h1>
        </>
    )

}

export default HomePage;
