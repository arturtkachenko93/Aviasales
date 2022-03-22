import { getAddSearchId, getAddTickets } from "../store/ticketsReducer";

export const getSearchId = () => async (dispatch) => {
  try {
    const resolve = await fetch(`https://aviasales-test-api.kata.academy/search`);
    const json = await resolve.json();
    dispatch(getAddSearchId(json));
  } catch (err) {
    throw new Error(`Ошибка получения id ${err}`)
  }
};

export const getTickets = (id) => async (dispatch) => {
  try {
    const resolve = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    if (!resolve.ok) {
      throw new Error(`Ошибка, код ${resolve.status}`);
    }
    const json = await resolve.json();
    dispatch(getAddTickets(json));

    if (!json.stop) {
      dispatch(getTickets(id));
    }
  } catch {
    dispatch(getTickets(id));
  }
};
