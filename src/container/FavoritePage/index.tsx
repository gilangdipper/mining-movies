import React, { useMemo } from 'react';

import { useAppContext } from '../../context';

import MovieList from '../../components/MovieList';

import { FavoritePageWrapper } from './style';

const FavoritePage = () => {
  const appContext = useAppContext();
  const { isFetching, isLoadingMore, movieFavorites } = appContext.state;
  const movieFavoritesFormatted = useMemo(
    () => Object.keys(movieFavorites).map((key) => movieFavorites[key]),
    [movieFavorites],
  );

  return (
    <FavoritePageWrapper>
      <div className="content">
        <MovieList
          addToFavorites={() => {}}
          isFetching={isFetching}
          isLoadingMore={isLoadingMore}
          loadMoreAction={() => {}}
          movieFavorites={movieFavorites}
          movies={movieFavoritesFormatted}
        />
      </div>
    </FavoritePageWrapper>
  );
};

export default FavoritePage;
