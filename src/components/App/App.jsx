import React from 'react';
import { Form } from '../Form';
import { Sort } from '../Sort';
import { TicketList } from '../TicketList';

import classes from './App.module.scss';
import Logo from './Logo.svg';

const App = () => {
  return (
    <>
      <header className={classes.header}>
        <img src={Logo} alt="logo" />
      </header>
      <main className={classes.main}>
        <Form />
        <div className={classes.wrapper}>
          <Sort />
          <TicketList />
          <button className={classes['btn-more']} type="button">
            Показать ещё 5 билетов!
          </button>
        </div>
      </main>
    </>
  );
};

export default App;
