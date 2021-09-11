export interface IState {
  app: {
    isLoading: false;
  };
  movies: object[];
  movieFavorites: object[];
}

type ActionGeneratorType<TName extends string, TPayload> = {
  type: TName;
  payload: TPayload;
};

type TFetchProductSucces = ActionGeneratorType<'FETCH_PRODUCTS_SUCCESS', { movies: object[] }>;

type TFetchProductError = ActionGeneratorType<'FETCH_PRODUCTS_ERROR', { error: string }>;

export type TAction = TFetchProductError | TFetchProductSucces;
