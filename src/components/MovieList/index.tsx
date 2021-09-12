import React, { FC } from 'react';

import MovieCard from '../MovieCard';

import { IMovieList } from './interfaces';
import { LoadMoreButton, MovieListWrapper } from './style';

import MovieLoading from './MovieLoading';

const MovieList: FC<IMovieList> = ({
  addToFavorites,
  isFetching,
  isLoadingMore,
  loadMoreAction,
  movieFavorites,
  movies,
}) => {
  return (
    <MovieListWrapper>
      {!isFetching &&
        movies.map((movie) => (
          <div className="movie-box" key={movie.title}>
            <MovieCard
              onClickFavorite={() => {
                addToFavorites(movie);
              }}
              posterPath={movie.poster_path}
              title={movie.title}
              voteAverage={movie.vote_average}
              isFavorited={!!movieFavorites[movie.id]}
            />
          </div>
        ))}
      {(isFetching || isLoadingMore) && (
        <div className="movie-loading">
          <MovieLoading />
        </div>
      )}
      {!isFetching && !isLoadingMore && (
        <div className="movie-load-more">
          <LoadMoreButton onClick={loadMoreAction}>Load More</LoadMoreButton>
        </div>
      )}
    </MovieListWrapper>
  );
};

export default MovieList;
