import React, { useEffect } from 'react';

import { useAppContext } from '../../context';
import MovieList from '../../components/MovieList';
import MovieFilter from '../../components/MovieFilter';

import { HomePageWrapper } from './style';
import { discoverMovies, filterMovies, loadMoreMovies } from './action';
import { IAppContext } from '../../context/interfaces';

const HomePage = () => {
  const appContext = useAppContext();
  const { filter, genres, isFetching, isLoadingMore, movies } =
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

  return (
    <HomePageWrapper>
      <div className="content">
        <MovieFilter
          genres={genres}
          updateFilter={(state: Partial<IAppContext['state']['filter']>) => {
            updateAppState({ filter: { ...filter, ...state } });
          }}
        />
        <MovieList
          isFetching={isFetching}
          isLoadingMore={isLoadingMore}
          loadMoreAction={() => loadMoreMovies(appContext)}
          movies={movies}
        />
      </div>
    </HomePageWrapper>
  );
};

export default HomePage;
