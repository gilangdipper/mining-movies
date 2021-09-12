import { IGenre, IMovie } from '../interfaces';
export interface IState {
  error: string;
  filter: {
    page: number;
    genre: string;
  };
  genres: IGenre[];
  isFetching: boolean;
  isLoadingMore: boolean;
  movieFavorites: IMovie[];
  movies: IMovie[];
}

type ActionGeneratorType<TName extends string, TPayload> = {
  type: TName;
  payload: TPayload;
};

type TUpdateState = ActionGeneratorType<'UPDATE_APP_STATE', Partial<IState>>;

export type TAction = TUpdateState;
