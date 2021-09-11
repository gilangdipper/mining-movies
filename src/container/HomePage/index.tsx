import React, { useEffect } from 'react';

import { useAppContext } from '../../context';
import MovieList from '../../components/MovieList';

import { HomePageWrapper } from './style';
import { discoverMovies } from './action';

const HomePage = () => {
  const appContext = useAppContext();

  useEffect(() => {
    discoverMovies(appContext);
  }, []);

  return (
    <HomePageWrapper>
      <div className="content">
        <MovieList />
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
