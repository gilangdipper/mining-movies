import React, { useEffect } from 'react';

import { useAppContext } from '../../context';
import { IAppContext } from '../../context/interfaces';
import { IMovie } from '../../interfaces';

import MovieList from '../../components/MovieList';
import MovieFilter from '../../components/MovieFilter';
import Navigator from '../../components/Navigator';

import { HomePageWrapper } from './style';
import { discoverMovies, filterMovies, loadMoreMovies } from './action';

const HomePage = () => {
  const appContext = useAppContext();
  const { filter, genres, isFetching, isLoadingMore, movies, movieFavorites } =
    appContext.state;

  useEffect(() => {
    discoverMovies(appContext);
  }, []);

  useEffect(() => {
    if (filter.genre) {
      filterMovies(appContext);
    }
  }, [filter.genre]);

  const updateAppState = (payload: Partial<IAppContext['state']>) => {
    appContext.dispatch({ type: 'UPDATE_APP_STATE', payload });
  };

  const addToFavorites = (movie: IMovie) => {
    const movieFavoritesUpdated = { ...movieFavorites };
    if (movieFavorites[movie.id]) {
      delete movieFavoritesUpdated[movie.id];
    } else {
      movieFavoritesUpdated[movie.id] = movie;
    }
    updateAppState({ movieFavorites: movieFavoritesUpdated });
  };

  const updateFilters = (state: Partial<IAppContext['state']['filter']>) => {
    updateAppState({ filter: { ...filter, ...state } });
  };

  return (
    <HomePageWrapper>
      <div className="content">
        <Navigator favoriteNumber={Object.keys(movieFavorites).length} />
        <MovieFilter genres={genres} updateFilter={updateFilters} />
        <MovieList
          addToFavorites={addToFavorites}
          isFetching={isFetching}
          isLoadingMore={isLoadingMore}
          loadMoreAction={() => loadMoreMovies(appContext)}
          movieFavorites={movieFavorites}
          movies={movies}
        />
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
