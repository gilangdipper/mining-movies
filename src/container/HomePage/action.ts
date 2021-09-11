import axios from 'axios';
import { API_KEY, BASE_URL, DISCOVER_PATH } from '../../constant';
import { IAppContext } from '../../context/interfaces';

export const discoverMovies = ({ state, dispatch }: IAppContext) => {
  const { search } = state;
  const dataParams = {
    api_key: API_KEY,
    page: `${search.page}`,
  };

  const urlParams = new URLSearchParams(dataParams);
  const url = `${BASE_URL}${DISCOVER_PATH}?${urlParams.toString()}`;

  dispatch({ type: 'UPDATE_APP_STATE', payload: { isLoading: true } });

  axios
    .get(url)
    .then((response) => {
      dispatch({
        type: 'UPDATE_APP_STATE',
        payload: { movies: response.data, isLoading: false },
      });
    })
    .catch((error) => {
      dispatch({
        type: 'UPDATE_APP_STATE',
        payload: { error },
      });
    });
};
