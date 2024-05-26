import React, { useState, useEffect } from 'react';
import './Carousel.scss';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../store/autxContext/authContext';
import { ImagesComponent } from '../Images/Images';
import { Menu } from '../Menu/Menu';

const Carousel = () => {
    const { userId } = useParams<{ userId: string}>();


    const slides = [
        {
            image: '/images/general/homePageBanner.png',
            title: 'BALKANKAN',
            description: 'A Macedonian military deserter and his Italian blood-brother are searching for a dead grandmother wrapped up in a stolen carpet, all over the Balkans criminal underworld.',
            text: 'Lorem ipsum dolor sine amet, lorem ipsum dolor sine amet.'
        },
        {
            image: '/images/general/peakyBlinders.png',
            title: 'PEAKY BLINDERS',
            description: 'Experience the thrilling world of Peaky Blinders.Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to the criminal activities.',
            text: 'Lorem ipsum dolor sine amet, lorem ipsum dolor sine amet.'
        },
        {
            image: '/images/general/vtorBannerHomePage.png',
            title: 'JUZNI VETAR',
            description: 'A young member of an underground gang in Belgrade puts himself and his family in danger when he crosses a mafia leader who works for the chief of police.',
            text: 'Lorem ipsum dolor sine amet, lorem ipsum dolor sine amet.'
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [slides.length]);


    return (
        <div className="carousel">
            <Menu/>
            <div className="carousel-slide">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`carousel-content ${index === currentSlide ? 'active' : ''}`}
                        style={{ display: index === currentSlide ? 'block' : 'none' }}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="carousel-image"
                        />
                        <div className="carousel-overlay">
                            <p className='carousel-para'>{slide.text}</p>
                            <h2 className="carousel-title">{slide.title}</h2>
                            <p className="carousel-description">{slide.description}</p>  
                            <div className="options">
                            <Link to={`/watch/${userId}`} className='btn btn-green btn-watch'> <i className="fa fa-play play" aria-hidden="true"></i>  Гледај</Link>
                                <div className="options-movies">
                                <i className="fa-regular fa-heart ft-icon"></i>
                                <i className="fa-solid fa-plus ft-icon"></i>
                                <i className="fa-regular fa-share-from-square ft-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;



