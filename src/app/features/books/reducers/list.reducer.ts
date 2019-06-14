import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/list.actions';


export interface BooksEntity {
  id: string;
  title: string;
  author: string;
  bookFormat: string;
}

export interface ListState extends EntityState<BooksEntity> {

}

export const initialListState: ListState = {
  ids: ['X001'],
  entities: {
    X001: {
      id: 'X001',
      title: 'War and Peace',
      author: 'Leo Tolstoy',
      bookFormat: 'hardcover'
    }
  }
};

export const adapter = createEntityAdapter<BooksEntity>();

export const reducer = createReducer(
  initialListState,
  on(actions.itemAddedToList, (state, { entity }) => adapter.addOne(entity, state))
);
