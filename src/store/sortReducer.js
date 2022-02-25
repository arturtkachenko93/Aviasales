/* eslint-disable default-param-last */

const defaultState = {
  sort: [{ low: false, optimal: false, fast: false }],
};

const ADD_LOW = "ADD_LOW";
const ADD_OPTIMAL = "ADD_OPTIMAL";
const ADD_FAST = "ADD_FAST";

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_LOW:
      return {
        sort: [
          ...state.sort.map((el) => {
            el.low = true;
            el.fast = false;
            el.optimal = false;
            return el;
          }),
        ],
      };
    case ADD_OPTIMAL:
      return {
        sort: [
          ...state.sort.map((el) => {
            el.low = false;
            el.fast = false;
            el.optimal = true;
            return el;
          }),
        ],
      };
    case ADD_FAST:
      return {
        sort: [
          ...state.sort.map((el) => {
            el.low = false;
            el.fast = true;
            el.optimal = false;
            return el;
          }),
        ],
      };
    default:
      return state;
  }
};

export const getAddLow = () => ({ type: ADD_LOW });
export const getAddOptimal = () => ({ type: ADD_OPTIMAL });
export const getAddFast = () => ({ type: ADD_FAST });
