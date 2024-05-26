import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useGlobalState } from '../../store/context/globalContext';
import './MovieOverview.scss'

export const MovieOverview = () => {
  const { movies, podcasts, kids, series } = useGlobalState();
  const { userId, movieId } = useParams<{ movieId: string;  userId: string}>();

  // Find the media by ID in all categories
  const movie = movies.find((movie) => movie.id === movieId);
  const podcast = podcasts.find((podcast) => podcast.id === movieId);
  const kid = kids.find((kid) => kid.id === movieId);
  const serie = series.find((serie) => serie.id === movieId);

  // Determine which media type was found
  const media = movie || kid || serie;

  if (!media) {
    return <div>Media not found</div>;
  }
  return (
    <div className="bannerImg">
          <div className="item-overview-container">
            <div className="item-overview-content">
                  <div className="overview-wrap">
                   <div className="overview-details">
                          <h1>{media.title}</h1>
                          <p className='media-para'>{media.description}</p>
                          <span className='media-span'>See more</span>
                        <div className="overview-options">
                          <Link to={`/watch/${userId}`} className='btn btn-green btn-watch'> <i className="fa fa-play play" aria-hidden="true"></i>  Гледај</Link>
                                <i className="fa-regular fa-heart ft-icon"></i>
                                <i className="fa-solid fa-plus ft-icon"></i>
                              <i className="fa-regular fa-share-from-square ft-icon"></i>
                              <i className="fa-solid fa-volume-high volume"></i>
                          </div>
                    </div>      
                  <div className="overview-image">
                    <img src={media.image} alt={media.title} />
                  </div>
                   
                  </div>  
                  <div className="media-details">
                      <div className="media-details-content">
                          <div className="media-details-wrap">
                              {media.genres && <p>Genres: {media.genres.join(', ')}</p>}
                              {media.cast && <Link to={'/artist'} className='cast'>Cast: {media.cast.join(', ')}</Link>}
                              {media.director && <p>Director: {media.director}</p>}              
                            </div>
                      </div>
                      <div className="media-details-content">
                         <div className="media-details-wrap">
                              {media.writers && <p>Writers: {media.writers.join(', ')}</p>}
                              {media.producers && <p>Producers: {media.producers.join(', ')}</p>}
                              {media.cinematography && <p>Cinematography: {media.cinematography}</p>}
                            </div>
                      </div>
                      <div className="media-details-content">
                          <div className="media-details-wrap">
                              {media.editing && <p>Director: {media.editing.join(', ')}</p>}
                              {media.costume_design && <p>Cast: {media.costume_design.join(', ')}</p>}
                              {media.release_date && <p>Release Date: {media.release_date}</p>}
                            </div>
                      </div>
                  </div> 
                  
              </div>
      </div>
    </div>
  );
};
