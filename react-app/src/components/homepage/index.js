import React from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css'

function HomePage() {


    return (
        <>
            <h1 style={{ display: "flex", justifyContent: 'center' }}> Here is a collection of my mini projects: </h1>
            <div className='home'>
                <div className='mainpage-template'>
                    <div className='project-container'>
                        <NavLink to={'/weather'}>
                            <div> Weather App</div>
                        </NavLink>
                    </div>
                    <div className='project-container'>
                        <NavLink to={'/tictactoe'}>
                            <div> TicTacToe Game</div>
                        </NavLink>
                    </div>
                    <div className='project-container'>
                        <NavLink to={'/calc'}>
                            <div>
                                Simple Calculator
                            </div>
                        </NavLink>
                    </div>
                    <div className='project-container'>
                        something else
                    </div>
                </div>
            </div>
        </>
    )

};

export default HomePage;
