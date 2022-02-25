/* eslint-disable default-param-last */

const defaultState = {
  filters: [
    {
      all: false,
      withoutTransfers: false,
      oneTransfer: false,
      twoTransfers: false,
      threeTransfers: false,
    },
  ],
};

const ALL_FILTER = "ALL_FILTER";
const OTHER_FILTERS = "OTHER_FILTERS";

export const filterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ALL_FILTER:
      return {
        ...state,
        filters: [
          ...state.filters.map((el) => {
            for (const i in el) {
              if (el.hasOwnProperty(i)) {
                el[i] = !el[i];
                el[i] = el.all;
              }
            }
            return el;
          }),
        ],
      };
    case OTHER_FILTERS:
      return {
        ...state,
        filters: [
          ...state.filters.map((el) => {
            for (const i in el) {
              if (el.hasOwnProperty(i)) {
                switch (action.payload) {
                  case "withoutTransfers":
                    el.withoutTransfers = !el.withoutTransfers;
                    el.all = false;
                    break;
                  case "oneTransfer":
                    el.oneTransfer = !el.oneTransfer;
                    el.all = false;
                    break;
                  case "twoTransfers":
                    el.twoTransfers = !el.twoTransfers;
                    el.all = false;
                    break;
                  case "threeTransfers":
                    el.threeTransfers = !el.threeTransfers;
                    el.all = false;
                    break;
                  default:
                    return el;
                }
                if (el.withoutTransfers && el.oneTransfer && el.twoTransfers && el.threeTransfers) {
                  el.all = true;
                }
              }
            }

            return el;
          }),
        ],
      };
    default:
      return state;
  }
};

export const getAllFilter = () => ({ type: ALL_FILTER });
export const getOtherFilters = (payload) => ({ type: OTHER_FILTERS, payload });
