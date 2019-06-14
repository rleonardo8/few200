export const featureName = 'books';
import * as fromList from './list.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../models';

export interface State {
  list: fromList.ListState;
}

export const reducers = {
  list: fromList.reducer
};


// 1. Create a Feature Selector

export const selectFeature = createFeatureSelector<State>(featureName);

// 2. Create a selector per branch
const selectListBranch = createSelector(selectFeature, f => f.list);

// 3. Helpers?

const { selectAll: selectAllBookEntities } = fromList.adapter.getSelectors(selectListBranch);
// Object Destructing.


// 4. What does the component need?

// ListComponent needs Book[]
export const selectBooks = createSelector(selectAllBookEntities, s => s as Book[]);
