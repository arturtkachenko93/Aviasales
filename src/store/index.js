import { createStore, combineReducers } from "redux";
import { filterReducer } from "./filterReducer";
import { sortReducer } from "./sortReducer";

const rootReducers = combineReducers({
  filters: filterReducer,
  sort: sortReducer,
});

export const store = createStore(rootReducers);
