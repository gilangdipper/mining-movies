import { IState, TAction } from './interfaces';

export const initialAppState: IState = {
  app: {
    isLoading: false,
  },
  movies: [],
  movieFavorites: [],
};

export const appReducer = (state: IState, action: TAction) => {
  switch (action.type) {
    case 'FETCH_PRODUCTS_SUCCESS': {
      return {
        ...state,
        isLoading: false,
        products: action.payload.movies,
      };
    }
    case 'FETCH_PRODUCTS_ERROR': {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    default:
      return state;
  }
};
