const initialState = {
  sorted: 'the cheapest',
};

export const sortingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SORT_OPTION':
      return { ...state, sorted: action.payload };

    default:
      return state;
  }
};
