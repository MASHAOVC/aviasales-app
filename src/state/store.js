import { configureStore } from '@reduxjs/toolkit';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;

    default:
      return state;
  }
};

const store = configureStore({ reducer });
