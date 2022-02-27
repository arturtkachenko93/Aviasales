import React from "react";
import { departureFormat, arrivalFormat, getTimeFromMins } from "../../utils/formatDate";
import { priceFormat } from "../../utils/priceFormat";
import classes from "./Ticket.module.scss";

const Ticket = ({
  price,
  carrier,
  thereOrigin,
  thereDestination,
  thereData,
  thereStops,
  thereDuration,
  backOrigin,
  backDestination,
  backData,
  backDuration,
}) => {
  return (
    <li className={classes.item}>
      <header className={classes.header}>
        <span className={classes.price}>{priceFormat(price)}</span>
        <img className={classes.logo} src={`//pics.avs.io/99/36/${carrier}.png`} alt="Company Logo" />
      </header>
      <div className={classes.body}>
        <div className={classes.row}>
          <span className={classes.title}>{`${thereOrigin} - ${thereDestination}`}</span>
          <span className={classes.subtitle}>
            {departureFormat(thereData)} – {arrivalFormat(thereData, thereDuration)}
          </span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>В пути</span>
          <span className={classes.subtitle}>{getTimeFromMins(thereDuration)}</span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>2 пересадки</span>
          <span className={classes.subtitle}>{thereStops.join(", ")}</span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>{`${backOrigin} - ${backDestination}`}</span>
          <span className={classes.subtitle}>
            {departureFormat(backData)} – {arrivalFormat(backData, backDuration)}
          </span>
        </div>
        <div className={classes.row}>
          <span className={classes.title}>В пути</span>
          <span className={classes.subtitle}>{getTimeFromMins(backDuration)}</span>
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
