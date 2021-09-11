import React from 'react';

import MovieBox from '../MovieBox';

import { MovieListWrapper } from './style';

const MovieList = () => {
  const movieList = [{ title: 'film1' }, { title: 'film2' }];

  return (
    <MovieListWrapper>
      {movieList.map(({ title }) => (
        <div className="movie-box" key={title}>
          <MovieBox title={title} />
        </div>
      ))}
    </MovieListWrapper>
  );
};

export default MovieList;
