import { getAddSearchId, getAddTickets } from "../store/ticketsReducer";

export const baseUrl = "https://aviasales-test-api.java-mentor.com";

export const getSearchId = () => async (dispatch) => {
  const resolve = await fetch(`https://aviasales-test-api.java-mentor.com/search`);
  const json = await resolve.json();
  dispatch(getAddSearchId(json));

};

export const getTickets = (id) => async (dispatch) => {
  const resolve = await fetch(`https://aviasales-test-api.java-mentor.com/tickets?searchId=${id}`);
  if (!resolve.ok) {
    dispatch(getTickets(id));
    throw new Error(`Ошибка, код ${resolve.status}`);
  }

  const json = await resolve.json();
  dispatch(getAddTickets(json));
  if (!json.stop) {
    dispatch(getTickets(id));
  }
};
