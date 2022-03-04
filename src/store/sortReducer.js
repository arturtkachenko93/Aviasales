/* eslint-disable default-param-last */

const defaultState = {
  sortButtons: [
    { name: "cheap", label: "САМЫЙ ДЕШЕВЫЙ" },
    { name: "fast", label: "САМЫЙ БЫСТРЫЙ" },
    { name: "optimal", label: "ОПТИМАЛЬНЫЙ" },
  ],
  activeFilter: "cheap",
};

const CHANGE_SORT = "CHANGE_SORT";

export const sortReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      return {
        ...state,
        activeFilter: action.payload,
      };
    default:
      return state;
  }
};

export const changeSort = (value) => ({
  type: CHANGE_SORT,
  payload: value,
});
