import React, { useEffect } from 'react';

import { useAppContext } from '../../context';
import MovieList from '../../components/MovieList';
import MovieFilter from '../../components/MovieFilter';

import { HomePageWrapper } from './style';
import { discoverMovies } from './action';

const HomePage = () => {
  const appContext = useAppContext();
  const { movies, isLoading, genres } = appContext.state;

  useEffect(() => {
    discoverMovies(appContext);
  }, []);

  return (
    <HomePageWrapper>
      <div className="content">
        <MovieFilter genres={genres} />
        <MovieList movies={movies} isLoading={isLoading} />
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
