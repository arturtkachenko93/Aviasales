import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllFilter, getOtherFilters } from "../../store/filterReducer";
import classes from "./Form.module.scss";

const Form = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.filters.filters);

  const { all, withoutTransfers, oneTransfer, twoTransfers, threeTransfers } = filters[0];
  return (
    <form className={classes.form}>
      <fieldset className={classes.wrapper}>
        <legend className={classes.title}>Количество пересадок</legend>
        <ul className={classes["form-list"]}>
          <li>
            <label className={classes.label}>
              <input
                onChange={() => dispatch(getAllFilter())}
                className="visually-hidden"
                type="checkbox"
                checked={all && true}
              />
              <span className={classes.checkbox} />
              Все
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input
                className="visually-hidden withoutTransfers"
                type="checkbox"
                checked={withoutTransfers && true}
                onChange={(event) => dispatch(getOtherFilters(event.target.className.split(" ")[1]))}
              />
              <span className={classes.checkbox} />
              Без пересадок
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input
                className="visually-hidden oneTransfer"
                type="checkbox"
                checked={oneTransfer && true}
                onChange={(event) => dispatch(getOtherFilters(event.target.className.split(" ")[1]))}
              />
              <span className={classes.checkbox} />1 пересадка
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input
                className="visually-hidden twoTransfers"
                type="checkbox"
                checked={twoTransfers && true}
                onChange={(event) => dispatch(getOtherFilters(event.target.className.split(" ")[1]))}
              />
              <span className={classes.checkbox} />2 пересадки
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input
                className="visually-hidden threeTransfers"
                type="checkbox"
                checked={threeTransfers && true}
                onChange={(event) => dispatch(getOtherFilters(event.target.className.split(" ")[1]))}
              />
              <span className={classes.checkbox} />3 пересадки
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default Form;
