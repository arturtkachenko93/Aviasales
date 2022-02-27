import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { ticketsReducer } from "./ticketsReducer";
import { filterReducer } from "./filterReducer";
import { sortReducer } from "./sortReducer";

const rootReducers = combineReducers({
  tickets: ticketsReducer,
  filters: filterReducer,
  sort: sortReducer,
});

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));
