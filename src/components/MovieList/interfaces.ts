import { IMovie } from '../../interfaces';

export interface IMovieList {
  isFetching: boolean;
  isLoadingMore: boolean;
  loadMoreAction: () => void;
  movies: IMovie[];
}
