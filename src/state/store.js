import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { sortingReducer } from './reducers/sortingReducer';
import { filterReducer } from './reducers/filterReducer';

const mainReducer = combineReducers({
  sorting: sortingReducer,
  filter: filterReducer,
});

export const store = configureStore({ reducer: mainReducer });
