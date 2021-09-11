import React, { useEffect } from 'react';

import MovieList from '../../components/MovieList';

import { HomePageWrapper } from './style';

const HomePage = () => {
  useEffect(() => {
    console.log('test');
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
