import { IState, TAction } from './interfaces';

export const initialAppState: IState = {
  error: '',
  filter: {
    page: 1,
    genre: '',
  },
  genres: [],
  isFetching: false,
  isLoadingMore: false,
  movieFavorites: [],
  movies: [],
};

export const appReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case 'UPDATE_APP_STATE': {
      return {
        ...state,
        ...action.payload,
      };
    }
    default:
      return state;
  }
};
