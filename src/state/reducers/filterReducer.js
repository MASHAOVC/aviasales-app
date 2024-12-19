const initialState = {
  all: false,
  nonStop: false,
  oneStop: false,
  twoStops: false,
  threeStops: false,
};

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_CHECKBOX':
      if (state.all && action.payload !== 'all') {
        return { ...state, all: false, [action.payload]: !state[action.payload] };
      }

      const updatedState = { ...state, [action.payload]: !state[action.payload] };

      const ifAllCheckboxesChecked = Object.keys(updatedState)
        .filter((key) => key !== 'all')
        .every((key) => updatedState[key] === true);

      if (ifAllCheckboxesChecked) {
        return { ...updatedState, all: true };
      }

      return updatedState;

    case 'TOGGLE_ALL':
      const newState = Object.keys(state).reduce((acc, key) => {
        acc[key] = action.payload;
        return acc;
      }, {});
      return { ...state, ...newState };

    default:
      return state;
  }
};
