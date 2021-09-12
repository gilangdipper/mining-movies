import { IAppContext } from '../../context/interfaces';
import { IMovie } from '../../interfaces';

export interface IMovieList {
  addToFavorites: (movie: IMovie) => void;
  isFetching: boolean;
  isLoadingMore: boolean;
  loadMoreAction: () => void;
  movies: IAppContext['state']['movies'];
  movieFavorites: IAppContext['state']['movieFavorites'];
}
