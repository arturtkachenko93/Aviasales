import { React } from "react";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { getSlice } from "../../utils/ticketsSlice";
import { sortTickets } from "../../utils/sortTickets";
import { filterTickets } from "../../utils/filterTickets";
import { Ticket } from "../Ticket";
import classes from "./TicketList.module.scss";

const TicketList = () => {
  const tickets = useSelector((state) => state.tickets);
  const sort = useSelector((state) => state.sort);
  const filters = useSelector((state) => state.filters);

  getSlice(tickets.tickets.data, tickets.page);
  const ticketItems = sortTickets(
    filterTickets(getSlice(tickets.tickets.data, tickets.page), filters.filters),
    sort.activeFilter
  ).map((item) => {
    return (
      <Ticket
        key={uuid()}
        price={item.price}
        carrier={item.carrier}
        thereOrigin={item.segments[0].origin}
        thereDestination={item.segments[0].destination}
        thereData={item.segments[0].date}
        thereStops={item.segments[0].stops}
        thereDuration={item.segments[0].duration}
        backOrigin={item.segments[1].origin}
        backDestination={item.segments[1].destination}
        backData={item.segments[1].date}
        backStops={item.segments[1].stops}
        backDuration={item.segments[1].duration}
      />
    );
  });


  return <ul className={classes["ticket-list"]}>
    {ticketItems.length ? ticketItems : 'Рейсов, подходящих под заданные фильтры, не найдено'}
  </ul>;
};

export default TicketList;
