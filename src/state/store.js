import { configureStore, bindActionCreators } from '@reduxjs/toolkit';

import { reducer } from './reducer';
import * as actions from './actions';

export const store = configureStore({ reducer });
