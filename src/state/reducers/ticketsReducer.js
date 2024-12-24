import { v4 as uuidv4 } from 'uuid';

const initialState = {
  tickets: {
    ticketPack: [],
    loading: false,
    error: null,
  },
};

export const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return { ...state, tickets: { ...state.tickets, loading: true, error: null } };

    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        tickets: {
          ...state.tickets,
          ticketPack: action.payload.map((ticket) => ({ ...ticket, id: uuidv4() })),
          loading: false,
          error: null,
        },
      };

    case 'FETCH_TICKETS_FAILURE':
      return { ...state, tickets: { ...state.tickets, loading: false, error: action.payload } };
    default:
      return state;
  }
};
