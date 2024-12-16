export const reducer = (state = 0, action) => {
  switch (action.type) {
    case 'ACT':
      return state + 1;

    default:
      return state;
  }
};
