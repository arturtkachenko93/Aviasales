import React from 'react';
import { useDispatch } from 'react-redux';
import { getAllFilter } from '../../store/filterReducer';
import classes from './Form.module.scss';

const Form = () => {
  const dispatch = useDispatch();
  return (
    <form className={classes.form}>
      <fieldset className={classes.wrapper}>
        <legend className={classes.title}>Количество пересадок</legend>
        <ul className={classes['form-list']}>
          <li>
            <label className={classes.label}>
              <input onChange={() => dispatch(getAllFilter())} className="visually-hidden" type="checkbox" />
              <span className={classes.checkbox} />
              Все
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input cl className="visually-hidden" type="checkbox" />
              <span className={classes.checkbox} />
              Без пересадок
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input className="visually-hidden" type="checkbox" />
              <span className={classes.checkbox} />1 пересадка
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input className="visually-hidden" type="checkbox" />
              <span className={classes.checkbox} />2 пересадки
            </label>
          </li>
          <li>
            <label className={classes.label}>
              <input className="visually-hidden" type="checkbox" />
              <span className={classes.checkbox} />3 пересадки
            </label>
          </li>
        </ul>
      </fieldset>
    </form>
  );
};

export default Form;
