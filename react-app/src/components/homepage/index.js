import React from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css'
import SliderComponent from './slider';

function HomePage() {


    return (
        <div className='body'>
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

            <div className='container'>
                <div className='slider'>
                    <img src='https://via.placeholder.com/210?text=1' />
                    <img src='https://via.placeholder.com/220?text=2' />
                    <img src='https://via.placeholder.com/230?text=3' />
                    <img src='https://via.placeholder.com/240?text=4' />
                    <img src='https://via.placeholder.com/250?text=5' />
                    <img src='https://via.placeholder.com/260?text=6' />
                    <img src='https://via.placeholder.com/270?text=7' />
                    <img src='https://via.placeholder.com/280?text=8' />
                    <img src='https://via.placeholder.com/290?text=9' />



                </div>
            </div>

            <div>
                <SliderComponent />
            </div>



        </div>
    )

};

export default HomePage;
