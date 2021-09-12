import axios, { AxiosResponse } from 'axios';

import { API_KEY, BASE_URL, DISCOVER_PATH, MOVIE_GENRE_PATH } from '../../constants';
import { IAppContext } from '../../context/interfaces';
import { IGenreResponses, IMovieResponses } from '../../interfaces/responses';

export const discoverMovies = ({ state, dispatch }: IAppContext) => {
  const { search } = state;
  const dataParams = {
    api_key: API_KEY,
  };

  const urlMoviesParams = new URLSearchParams({ ...dataParams, page: `${search.page}` });
  const urlMovies = `${BASE_URL}${DISCOVER_PATH}?${urlMoviesParams.toString()}`;
  const urlGenreParams = new URLSearchParams({ ...dataParams, page: `${search.page}` });
  const urlGenres = `${BASE_URL}${MOVIE_GENRE_PATH}?${urlGenreParams.toString()}`;

  dispatch({ type: 'UPDATE_APP_STATE', payload: { isLoading: true } });

  const getMovies = () => axios.get(urlMovies);
  const getGenres = () => axios.get(urlGenres);

  Promise.all([getMovies(), getGenres()])
    .then(
      ([moviesRes, genreRes]: [AxiosResponse<IMovieResponses>, AxiosResponse<IGenreResponses>]) => {
        dispatch({
          type: 'UPDATE_APP_STATE',
          payload: {
            movies: moviesRes.data.results,
            isLoading: false,
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
          isLoading: false,
        },
      });
    });
};
