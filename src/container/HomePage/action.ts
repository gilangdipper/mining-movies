import axios, { AxiosResponse } from 'axios';

import { API_KEY, BASE_URL, DISCOVER_PATH, MOVIE_GENRE_PATH } from '../../constants';
import { IAppContext } from '../../context/interfaces';
import { IGenreResponses, IMovieResponses } from '../../interfaces/responses';

const defaultDataParams = {
  api_key: API_KEY,
};

export const discoverMovies = ({ state: { filter }, dispatch }: IAppContext) => {
  const urlMoviesParams = new URLSearchParams({ ...defaultDataParams, page: `${filter.page}` });
  const urlMovies = `${BASE_URL}${DISCOVER_PATH}?${urlMoviesParams.toString()}`;
  const urlGenreParams = new URLSearchParams(defaultDataParams);
  const urlGenres = `${BASE_URL}${MOVIE_GENRE_PATH}?${urlGenreParams.toString()}`;

  dispatch({ type: 'UPDATE_APP_STATE', payload: { isFetching: true } });

  const getMovies = () => axios.get(urlMovies);
  const getGenres = () => axios.get(urlGenres);

  Promise.all([getMovies(), getGenres()])
    .then(
      ([moviesRes, genreRes]: [AxiosResponse<IMovieResponses>, AxiosResponse<IGenreResponses>]) => {
        dispatch({
          type: 'UPDATE_APP_STATE',
          payload: {
            movies: moviesRes.data.results,
            isFetching: false,
            genres: genreRes.data.genres,
          },
        });
      },
    )
    .catch((error) => {
      dispatch({
        type: 'UPDATE_APP_STATE',
        payload: {
          error,
          isFetching: false,
        },
      });
    });
};

export const filterMovies = ({ state: { filter }, dispatch }: IAppContext) => {
  let params: Partial<Record<'api_key' | 'page' | 'with_genres' | 'year', string>> = {
    ...defaultDataParams,
    page: '1',
  };

  if (filter.genre === 'latest') {
    params['year'] = new Date().getFullYear().toString();
  } else {
    params['with_genres'] = `${filter.genre}`;
  }

  const urlMoviesParams = new URLSearchParams(params);
  const urlMovies = `${BASE_URL}${DISCOVER_PATH}?${urlMoviesParams.toString()}`;

  dispatch({ type: 'UPDATE_APP_STATE', payload: { isFetching: true } });

  axios
    .get(urlMovies)
    .then((res: AxiosResponse<IMovieResponses>) => {
      dispatch({
        type: 'UPDATE_APP_STATE',
        payload: {
          movies: res.data.results,
          isFetching: false,
        },
      });
    })
    .catch((error) => {
      dispatch({
        type: 'UPDATE_APP_STATE',
        payload: {
          error,
          isFetching: false,
        },
      });
    });
};
