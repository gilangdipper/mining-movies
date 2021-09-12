import React, { FC } from 'react';

import MovieCard from '../MovieCard';

import { IMovieList } from './interfaces';
import { MovieListWrapper } from './style';

import MovieLoading from './MovieLoading';

const MovieList: FC<IMovieList> = ({ movies, isFetching }) => {
  return (
    <MovieListWrapper>
      {!isFetching &&
        movies.map(({ title, poster_path, vote_average }) => (
          <div className="movie-box" key={title}>
            <MovieCard posterPath={poster_path} title={title} voteAverage={vote_average} />
          </div>
        ))}
      {isFetching && (
        <div className="movie-loading">
          <MovieLoading />
        </div>
      )}
    </MovieListWrapper>
  );
};

export default MovieList;
