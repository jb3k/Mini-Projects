import React from 'react';
import { NavLink } from 'react-router-dom';


function HomePage() {


    return (
        <>
            <h1> Here is a collection of my mini projects: </h1>
            <div>
                <NavLink to={'/weather'}>
                    <div> Click Here for Weather App!</div>
                </NavLink>
            </div>
            <div>
                chatgpt api
            </div>
            <div>
                simple calculator
            </div>

        </>
    )

};

export default HomePage;
