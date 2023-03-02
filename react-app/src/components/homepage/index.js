import React from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css'
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

function HomePage() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <div className="slider-container">
            <h2 className="homepage-title"> Here is a Collection of my Mini projects</h2>
            <Slider {...settings}>
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
                {/* </div> */}
            </Slider>
        </div>
    );

};

export default HomePage;
