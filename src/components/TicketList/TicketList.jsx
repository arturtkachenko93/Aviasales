import React from 'react';
import { Ticket } from '../Ticket';

import classes from './TicketList.module.scss';

const TicketList = () => {
  return (
    <ul className={classes['ticket-list']}>
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
      <Ticket />
    </ul>
  );
};

export default TicketList;
