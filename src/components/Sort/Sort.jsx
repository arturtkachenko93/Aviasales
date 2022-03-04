import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSort } from "../../store/sortReducer";

import classes from "./Sort.module.scss";

const Sort = () => {
  const dispatch = useDispatch();
  const { sortButtons, activeFilter } = useSelector((state) => state.sort);

  const buttons = sortButtons.map(({ name, label }) => {
    const isActiveClass = activeFilter === name ? classes.active : classes.button;

    return (
      <li key={`li${name}`}>
        <button type="button" className={isActiveClass} key={name} onClick={() => dispatch(changeSort(name))}>
          {label}
        </button>
      </li>
    );
  });

  return <ul className={classes["list-btn"]}>{buttons}</ul>;
};

export default Sort;
