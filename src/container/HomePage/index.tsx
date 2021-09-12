import React, { useEffect } from 'react';

import { useAppContext } from '../../context';
import MovieList from '../../components/MovieList';
import MovieFilter from '../../components/MovieFilter';

import { HomePageWrapper } from './style';
import { discoverMovies, filterMovies } from './action';
import { IAppContext } from '../../context/interfaces';

const HomePage = () => {
  const appContext = useAppContext();
  const { movies, isFetching, genres, filter } = appContext.state;

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

  return (
    <HomePageWrapper>
      <div className="content">
        <MovieFilter
          genres={genres}
          updateFilter={(state: Partial<IAppContext['state']['filter']>) => {
            updateAppState({ filter: { ...filter, ...state } });
          }}
        />
        <MovieList movies={movies} isFetching={isFetching} />
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
