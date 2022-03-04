/* eslint-disable default-param-last */

const defaultState = {
  id: "",
  tickets: {
    data: [],
  },
  page: 5,
};

const ADD_TICKETS = "ADD_TICKETS";
const SEARCH_ID = "SEARCH_ID";
const NEXT_TICKETS = "NEXT_TICKETS";

export const ticketsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TICKETS:
      return {
        ...state,
        tickets: {
          stop: action.payload.stop,
          data: [...state.tickets.data, ...action.payload.tickets],
        },
      };
    case SEARCH_ID:
      return { ...state, id: action.payload };
    case NEXT_TICKETS:
      return { ...state, page: state.page + 5 };
    default:
      return state;
  }
};

export const getAddTickets = (payload) => ({ type: ADD_TICKETS, payload });
export const getAddSearchId = (payload) => ({ type: SEARCH_ID, payload });
export const getNextTickets = () => ({ type: NEXT_TICKETS });
