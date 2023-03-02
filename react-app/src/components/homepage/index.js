import React from 'react';
import { NavLink } from 'react-router-dom';
import './homepage.css'
import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from './arrowFunctions';
import "./slick.css";
import "./slick-theme.css";
import weatherImg from '../images/weather.jpeg'
import underConstruction from '../images/uc.jpeg'

function HomePage() {

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "325px",
        slidesToShow: 1,
        // centerPadding: "60px",
        // slidesToShow: 3,
        speed: 500,
        dots: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    }

    return (
        <div className="slider-container">
            <h2 className="homepage-title"> Here is a Collection of my Mini projects</h2>
            <h2> APIS: </h2>
            <Slider {...settings}>
                <div className='project-container'>
                    <NavLink to={'/weather'} style={{ textDecoration: 'none' }} >
                        <img className='sliderImage' src={weatherImg} />
                        <div className='sliderText'> Weather App</div>
                    </NavLink>
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
            </Slider >
            <h2> Mini-Games: </h2>
            <Slider {...settings}>
                <div className='project-container'>
                    <NavLink to={'/tictactoe'}>
                        <div> TicTacToe Game</div>
                    </NavLink>
                </div>
                <div className='project-container'>
                    <NavLink to={'/connectFour'}>
                        <div> Connect Four Game</div>
                    </NavLink>
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
            </Slider>

            <h2> Tools: </h2>
            <Slider {...settings}>
                <div className='project-container'>
                    <NavLink to={'/calc'}>
                        <div>
                            Simple Calculator
                        </div>
                    </NavLink>
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
                <div className='project-container'>
                    <img className='sliderImage' src={underConstruction} />
                </div>
            </Slider>
        </div >
    );

};

export default HomePage;
