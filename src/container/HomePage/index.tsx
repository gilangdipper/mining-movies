import React, { useEffect } from 'react';

import { useAppContext } from '../../context';
import MovieList from '../../components/MovieList';

import { HomePageWrapper } from './style';
import { discoverMovies } from './action';

const HomePage = () => {
  const appContext = useAppContext();
  const { movies } = appContext.state;

  useEffect(() => {
    discoverMovies(appContext);
  }, []);

  return (
    <HomePageWrapper>
      <div className="content">
        <MovieList movies={movies} />
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
