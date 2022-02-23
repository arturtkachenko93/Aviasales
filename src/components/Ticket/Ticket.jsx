import React from 'react';

import classes from './Ticket.module.scss';
import CompanyLogo from './CompanyLogo.png';

const Ticket = () => {
  return (
    <li className={classes.item}>
      <header className={classes.header}>
        <span className={classes.price}>13 400</span>
        <img className={classes.logo} src={CompanyLogo} alt="Company Logo" />
      </header>
      <div className={classes.body}>
        <div className={classes.row}>
          <span className={classes.title}>mow - hkt</span>
          <span className={classes.subtitle}>10:45 - 08:00</span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>В пути</span>
          <span className={classes.subtitle}>21ч 15м</span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>2 пересадки</span>
          <span className={classes.subtitle}>hkg,jnb</span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>mow - hkt</span>
          <span className={classes.subtitle}>11:20 - 00:50</span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>В пути</span>
          <span className={classes.subtitle}>13ч 30м</span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>1 пересадка</span>
          <span className={classes.subtitle}>hkg</span>
        </div>
      </div>
    </li>
  );
};

export default Ticket;
