import React, { useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './Slider.scss';
import { MovieInt, PodcastInt } from '../../store/context/contextInterfaces'; // Assuming ContentInt is the interface for content items

interface SliderProps {
    content: (MovieInt | PodcastInt)[];
}


const Slider: React.FC<SliderProps> = ({ content }: SliderProps) => {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const { userId, movieId } = useParams<{ userId: string; movieId: string }>();

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        setIsDragging(true);
        setStartX(event.pageX - sliderRef.current!.offsetLeft);
        setScrollLeft(sliderRef.current!.scrollLeft);
    };

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        event.preventDefault();
        const x = event.pageX - sliderRef.current!.offsetLeft;
        const walk = x - startX;
        sliderRef.current!.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
        setIsDragging(true);
    };

    return (
        <div className="slider-container">
            <div className="slider-track" ref={sliderRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}>
                {content.map((item) => (
                    <div className="slider-item" key={item.id}>
                        {item.category === 'podcasts' ? (
                        <Link to={`/podcastsOverview/${item.id}`} className="slider-link">
                         <img src={item.image} alt={item.title} className="slider-image" />
                        </Link>
                     ) : (
                         <Link to={`/movieOverview/${item.id}`} className="slider-link">
                         <img src={item.image} alt={item.title} className="slider-image" />
                          </Link>
                         )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Slider;




