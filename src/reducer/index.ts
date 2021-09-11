import { IState, TAction } from './interfaces';

export const initialAppState: IState = {
  error: '',
  isLoading: false,
  movieFavorites: [],
  movies: [],
  search: {
    page: 1,
  },
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
