import { configureStore, bindActionCreators } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import * as actions from './actions';

const store = configureStore({ reducer });
const { dispatch } = store;

const { act } = bindActionCreators(actions, dispatch);

const update = () => {};

store.subscribe(update);
