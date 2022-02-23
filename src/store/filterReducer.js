/* eslint-disable default-param-last */

const defaultState = {
  filter: [
    {
      all: false,
      withoutTransfers: false,
      oneTransfer: false,
      twoTransfers: false,
      threeTransfers: false,
    },
  ],
};

const ALL_FILTER = 'ALL_FILTER';

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_FILTER:
      return {
        ...state,
        filter: [...state.filter.map((el) => console.log(!el))],
      };
    default:
      return state;
  }
};

export const getAllFilter = () => ({ type: ALL_FILTER });
