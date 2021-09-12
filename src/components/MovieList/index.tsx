import React, { FC } from 'react';

import MovieCard from '../MovieCard';

import { IMovieList } from './interfaces';
import { MovieListWrapper } from './style';

const MovieList: FC<IMovieList> = ({ movies }) => {
  return (
    <MovieListWrapper>
      {movies.map(({ title, backdrop_path, vote_average }) => (
        <div className="movie-box" key={title}>
          <MovieCard backdropPath={backdrop_path} title={title} voteAverage={vote_average} />
        </div>
      ))}
    </MovieListWrapper>
  );
};

export default MovieList;
