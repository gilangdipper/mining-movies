import React, { FC } from 'react';

import MovieCard from '../MovieCard';

import { IMovieList } from './interfaces';
import { MovieListWrapper } from './style';

import MovieLoading from './MovieLoading';

const MovieList: FC<IMovieList> = ({ movies, isLoading }) => {
  return (
    <MovieListWrapper>
      {movies.map(({ title, backdrop_path, vote_average }) => (
        <div className="movie-box" key={title}>
          <MovieCard backdropPath={backdrop_path} title={title} voteAverage={vote_average} />
        </div>
      ))}
      {isLoading && (
        <div className="movie-loading">
          <MovieLoading />
        </div>
      )}
    </MovieListWrapper>
  );
};

export default MovieList;
