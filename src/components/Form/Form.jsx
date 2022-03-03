import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "antd";
import { getChecked } from "../../store/filterReducer";
import classes from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const checkboxesData = useSelector((state) => state.filters.filters);

  const checkboxes = checkboxesData.map((checkbox) => (
    <li className={classes["checkbox-item"]} key={checkbox.name}>
      <Checkbox
        className={classes.checkbox}
        key={checkbox.label}
        checked={checkbox.checked}
        onChange={() => dispatch(getChecked(checkbox.name))}
      >
        {checkbox.label}
      </Checkbox>
    </li>
  ));

  return (
    <section className={classes.wrapper}>
      <div>
        <div className={classes.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</div>
      </div>
      <ul className={classes["checkbox-list"]}>{checkboxes}</ul>
    </section>
  );
};

export default Form;
