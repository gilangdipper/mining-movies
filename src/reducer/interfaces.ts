export interface IState {
  error: string;
  isLoading: boolean;
  movieFavorites: object[];
  movies: object[];
  search: {
    page: number;
  };
}

type ActionGeneratorType<TName extends string, TPayload> = {
  type: TName;
  payload: TPayload;
};

type TUpdateState = ActionGeneratorType<'UPDATE_APP_STATE', Partial<IState>>;

export type TAction = TUpdateState;
