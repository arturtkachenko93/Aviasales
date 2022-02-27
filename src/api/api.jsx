import { getAddSearchId, getAddTickets } from "../store/ticketsReducer";

export const baseUrl = "https://front-test.beta.aviasales.ru";

export const getSearchId = () => async (dispatch) => {
  const resolve = await fetch("https://front-test.beta.aviasales.ru/search");
  const json = await resolve.json();
  dispatch(getAddSearchId(json));
};

export const getTickets = (id) => async (dispatch) => {
  const resolve = await fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${id}`);
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
