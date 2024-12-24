import getTickets from '../services/aviasales-service';

export const setSortOption = (option) => ({ type: 'SET_SORT_OPTION', payload: option });

export const toggleCheckbox = (name) => ({ type: 'TOGGLE_CHECKBOX', payload: name });
export const toggleAllCheckboxes = (isChecked) => ({ type: 'TOGGLE_ALL', payload: isChecked });

export const fetchTickets = () => {
  return async (dispatch) => {
    dispatch({ type: 'FETCH_TICKETS_REQUEST' });

    getTickets()
      .then((result) => {
        dispatch({ type: 'FETCH_TICKETS_SUCCESS', payload: result.tickets });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: 'FETCH_TICKETS_FAILURE', payload: error.message });
      });
  };
};
