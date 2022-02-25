import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAddLow, getAddOptimal, getAddFast } from "../../store/sortReducer";

import classes from "./Sort.module.scss";

const Sort = () => {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.sort.sort);

  const currentLow = [current[0].low && classes.current];
  const currentOpt = [current[0].optimal && classes.current];
  const currentFast = [current[0].fast && classes.current];

  const getLow = () => {
    dispatch(getAddLow());
  };

  const getOpt = () => {
    dispatch(getAddOptimal());
  };

  const getFast = () => {
    dispatch(getAddFast());
  };

  return (
    <ul className={classes["list-btn"]}>
      <li>
        <button
          className={[classes.button, classes.low, ...currentLow].join(" ")}
          type="button"
          onClick={() => getLow()}
        >
          Самый дешевый
        </button>
      </li>
      <li>
        <button
          className={[classes.button, classes.fast, ...currentFast].join(" ")}
          type="button"
          onClick={() => getFast()}
        >
          Самый быстрый
        </button>
      </li>
      <li>
        <button
          className={[classes.button, classes.opt, ...currentOpt].join(" ")}
          type="button"
          onClick={() => getOpt()}
        >
          Оптимальный
        </button>
      </li>
    </ul>
  );
};

export default Sort;
