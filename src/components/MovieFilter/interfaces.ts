import { IAppContext } from '../../context/interfaces';
import { IGenre } from '../../interfaces';

export interface IMovieFilter {
  genres: IGenre[];
  updateFilter: (payload: Partial<IAppContext['state']['filter']>) => void;
}
