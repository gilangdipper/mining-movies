import React, { useMemo } from 'react';

import { useAppContext } from '../../context';
import { IMovie } from '../../interfaces';

import MovieList from '../../components/MovieList';
import Navigator from '../../components/Navigator';

import { FavoritePageWrapper } from './style';

const FavoritePage = () => {
  const appContext = useAppContext();
  const { isFetching, isLoadingMore, movieFavorites } = appContext.state;
  const movieFavoritesFormatted = useMemo(
    () => Object.keys(movieFavorites).map((key) => movieFavorites[key]),
    [movieFavorites],
  );

  const addToFavorites = (movie: IMovie) => {
    const movieFavoritesUpdated = { ...movieFavorites };
    if (movieFavorites[movie.id]) {
      delete movieFavoritesUpdated[movie.id];
    } else {
      movieFavoritesUpdated[movie.id] = movie;
    }
    appContext.dispatch({
      type: 'UPDATE_APP_STATE',
      payload: { movieFavorites: movieFavoritesUpdated },
    });
  };

  return (
    <FavoritePageWrapper>
      <div className="content">
        <Navigator favoriteNumber={Object.keys(movieFavorites).length} />
        <h3>Favorites</h3>
        <MovieList
          addToFavorites={addToFavorites}
          isFavoritePage
          isFetching={isFetching}
          isLoadingMore={isLoadingMore}
          movieFavorites={movieFavorites}
          movies={movieFavoritesFormatted}
        />
      </div>
    </FavoritePageWrapper>
  );
};

export default FavoritePage;
