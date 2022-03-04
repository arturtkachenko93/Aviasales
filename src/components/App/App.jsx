import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";
import { getSearchId, getTickets } from "../../api/api";
import { getNextTickets } from "../../store/ticketsReducer";
import { Form } from "../Form";
import { Sort } from "../Sort";
import { TicketList } from "../TicketList";

import classes from "./App.module.scss";
import Logo from "./Logo.svg";

const App = () => {
  const dispatch = useDispatch();
  const searchId = useSelector((state) => state.tickets.id);
  const status = useSelector((state) => state.tickets.tickets);




  useEffect(() => {
    dispatch(getSearchId());
  }, []);

  useEffect(() => {
    if (searchId.searchId) {
      dispatch(getTickets(searchId.searchId));
    }
  }, [dispatch, searchId]);

  const override = css`
    position: relative;
    bottom: 20px;
    display: block;
  `;

  return (
    <>
      <header className={classes.header}>
        <img src={Logo} alt="logo" />
      </header>
      <main className={classes.main}>
        <Form />
        <div className={classes.wrapper}>
          <Sort />
          <PacmanLoader color="turquoise" css={override} size={16} loading={!status.stop} />
          <TicketList />
          <button className={classes["btn-more"]} type="button" onClick={() => dispatch(getNextTickets())}>
            Показать ещё 5 билетов!
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
