import React, { FC } from 'react';

import MovieCard from '../MovieCard';

import { IMovieList } from './interfaces';
import { LoadMoreButton, MovieListWrapper } from './style';

import MovieLoading from './MovieLoading';

const MovieList: FC<IMovieList> = ({
  addToFavorites,
  isFavoritePage = false,
  isFetching,
  isLoadingMore,
  loadMoreAction,
  movieFavorites,
  movies,
}) => {
  const renderMovieCard = () => {
    if (isFetching) {
      return null;
    }
    return movies.map((movie) => (
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
    ));
  };

  const renderMovieLoading = () => {
    if (isFetching || isLoadingMore) {
      return (
        <div className="movie-loading">
          <MovieLoading />
        </div>
      );
    }
    return null;
  };

  const renderLoadingButton = () => {
    if (isFetching || isLoadingMore || isFavoritePage) {
      return null;
    }
    return (
      <div className="movie-load-more">
        <LoadMoreButton
          onClick={() => {
            loadMoreAction?.();
          }}
        >
          Load More
        </LoadMoreButton>
      </div>
    );
  };

  const renderNoMovie = () => {
    if (movies.length <= 0 && !isFetching && !isLoadingMore) {
      return <div className="no-movie">No Movie...</div>;
    }
    return null;
  };

  return (
    <MovieListWrapper>
      {renderNoMovie()}
      {renderMovieCard()}
      {renderMovieLoading()}
      {renderLoadingButton()}
    </MovieListWrapper>
  );
};

export default MovieList;
