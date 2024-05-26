import React, { createContext, useContext, useEffect, useState } from 'react';
import { Artist, CategoriesInt, ChildrenProps, Comment, GlobalState, KidsInt, MovieInt, PodcastInt, SeriesInt, UserInt } from './contextInterfaces';

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = () => {
 const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export const GlobalStateProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [movies, setMovies] = useState<MovieInt[]>([]);
  const [kids, setKids] = useState<KidsInt[]>([]);
  const [series, setSeries] = useState<SeriesInt[]>([]);
  const [podcasts, setPodcasts] = useState<PodcastInt[]>([]);
  const [categories, setCategories] = useState<CategoriesInt[]>([]);
  const [users, setUsers] = useState<UserInt[]>([]);
  const [artists, setArtists] = useState<Artist[]>([])
  const [comments, setComments] = useState<Comment[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const moviesResponse = await fetch('http://localhost:5001/movies');
        const moviesData = await moviesResponse.json();
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }

      try {
        const kidsResponse = await fetch('http://localhost:5001/kids');
        const kidsData = await kidsResponse.json();
        setKids(kidsData);
      } catch (error) {
        console.error('Error fetching kids:', error);
      }

      try {
        const seriesResponse = await fetch('http://localhost:5001/series');
        const seriesData = await seriesResponse.json();
        setSeries(seriesData);
      } catch (error) {
        console.error('Error fetching series:', error);
      }

      try {
        const podcastsResponse = await fetch('http://localhost:5001/podcasts');
        const podcastsData = await podcastsResponse.json();
        setPodcasts(podcastsData);
      } catch (error) {
        console.error('Error fetching podcasts:', error);
      }

      try {
        const categoriesResponse = await fetch('http://localhost:5001/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }

      try {
        const usersResponse = await fetch('http://localhost:5001/users');
        const usersData = await usersResponse.json();
        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }

      try {
        const artistResponse = await fetch('http://localhost:5001/artists');
        const artistData = await artistResponse.json();
        setArtists(artistData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }

      try {
        const commentsResponse = await fetch('http://localhost:5001/comments');
        const commentsData = await commentsResponse.json();
        setComments(commentsData);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchData();
  }, []);

  // Ensure that the context value includes all fetched data
  const contextValue: GlobalState = {
    movies,
    kids,
    series,
    podcasts,
    categories,
    users,
    artists,
    comments,
    setComments
  };

  return (
    <GlobalStateContext.Provider value={contextValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};


