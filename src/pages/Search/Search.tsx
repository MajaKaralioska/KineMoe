import { Link, useParams } from 'react-router-dom';
import { ImagesComponent } from '../../components/Images/Images';
import { KidsInt, MovieInt, PodcastInt, SeriesInt } from '../../store/context/contextInterfaces';
import { useGlobalState } from '../../store/context/globalContext';
import './Search.scss';

import React, { useState } from 'react';
import Slider from '../../components/Slider/Slider';
import { Menu } from '../../components/Menu/Menu';


export const Search = () => {
    const searchIcon = <i className="fa fa-search search-icon-input" aria-hidden="true"></i>;
    const [inputValue, setInputValue] = useState('');
    const { movies, podcasts, kids, series } = useGlobalState();
    const { userId, movieId } = useParams<{ userId: string; movieId: string }>();

      // Function to filter movies based on the input value
      const filterMovies = (movies: MovieInt[]): MovieInt[] => {
        return movies.filter(movie =>
            movie.title.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    // Function to filter podcasts based on the input value
    const filterPodcasts = (podcasts: PodcastInt[]): PodcastInt[] => {
        return podcasts.filter(podcast =>
            podcast.title.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    // Function to filter kids based on the input value
    const filterKids = (kids: KidsInt[]): KidsInt[] => {
        return kids.filter(kid =>
            kid.title.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    // Function to filter series based on the input value
    const filterSeries = (series: SeriesInt[]): SeriesInt[] => {
        return series.filter(serie =>
            serie.title.toLowerCase().includes(inputValue.toLowerCase())
        );
    };
    const filteredMovies = filterMovies(movies);
    const filteredPodcasts = filterPodcasts(podcasts);
    const filteredKids = filterKids(kids);
    const filteredSeries = filterSeries(series);

    const getRandomMovies = (movies: MovieInt[], count: number) => {
        let shuffled = [...movies].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
      };
      const similarMovies = getRandomMovies(filteredMovies, 5);
    return (
        <div className='search-wrapper'>
            <Menu/>
        <div className="search-container">
            <form action="" className="search-form">
            <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                {searchIcon} 
            </form>
        </div>
        <div className="search-results">   
           <div className='search-h4'><h4>Search Results</h4></div> 
  <div className="result-items">
    {filteredMovies.map((movie, index) => (
      <Link to={`/movieOverview/${movie.id}`} className='search-item' key={index}>
            <img src={movie.image} alt={movie.title} />
            <span>{ movie.title}</span>
      </Link>
    ))}
  </div>
  <div className="result-items">
    {filteredPodcasts.map((podcast, index) => (
      <Link to={`/podcastsOverview/${podcast.id}`} className='search-item' key={index}>
            <img src={podcast.image} alt={podcast.title} />
            <span>{ podcast.title}</span>
      </Link>
    ))}
  </div>
  <div className="result-items">
    {filteredKids.map((kid, index) => (
      <Link to={`/movieOverview/${kid.id}`} className='search-item' key={index}>
            <img src={kid.image} alt={kid.title} />
            <span>{kid.title}</span>
      </Link>
    ))}
  </div>
  <div className="result-items">
    {filteredSeries.map((serie, index) => (
      <Link to={`/movieOverview/${serie.id}`} className='search-item' key={index}>
            <img src={serie.image} alt={serie.title} />
            <span>{serie.title}</span>
      </Link>
    ))}
  </div>
</div>
        <div className="similar-results">
            <div className="similar-header">
                <h4>Similar Results</h4>
            </div>
            <div className="result-items">
              {similarMovies.map((movie, index) => (
               <Link to={`/movieOverview/${movie.id}`} className='search-item' key={index}>
               <img src={movie.image} alt={movie.title} />
              </Link>
             ))}
    </div>
    </div>
    </div>
    );
};

