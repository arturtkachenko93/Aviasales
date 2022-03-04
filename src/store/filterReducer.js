/* eslint-disable default-param-last */

const defaultState = {
  filters: [
    { label: "Все", name: "all", checked: true },
    { label: "Без пересадок", name: "no", checked: true, value: 0 },
    { label: "1 пересадка", name: "one", checked: true, value: 1 },
    { label: "2 пересадки", name: "two", checked: true, value: 2 },
    { label: "3 пересадки", name: "three", checked: true, value: 3 },
  ],
};

const CHECKED = "CHECKED";

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case CHECKED: {
      if (action.payload === "all") {
        return {
          ...state,
          filters: state.filters.map((element) => ({ ...element, checked: !state.filters[0].checked })),
        };
      }
      const newState = {
        ...state,
        filters: state.filters.map((element) =>
          action.payload === element.name ? { ...element, checked: !element.checked } : element
        ),
      };
      newState.filters[0].checked = newState.filters.slice(1).every((element) => element.checked);
      return newState;
    }
    default:
      return state;
  }
};

export const getChecked = (payload) => ({ type: CHECKED, payload });
