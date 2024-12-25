import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { sortingReducer } from './reducers/sortingReducer';
import { filterReducer } from './reducers/filterReducer';
import { ticketsReducer } from './reducers/ticketsReducer';

const mainReducer = combineReducers({
  sorting: sortingReducer,
  filter: filterReducer,
  tickets: ticketsReducer,
});

export const store = configureStore({
  reducer: mainReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false, // Отключить ImmutableStateInvariantMiddleware
      serializableCheck: false, // Отключить SerializableStateInvariantMiddleware
    }),
});
