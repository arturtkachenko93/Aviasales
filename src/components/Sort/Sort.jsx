import React from 'react';

import classes from './Sort.module.scss';

const Sort = () => {
  return (
    <ul className={classes['list-btn']}>
      <li>
        <button className={[classes.button, classes.low, classes.current].join(' ')} type="button">
          Самый дешевый
        </button>
      </li>
      <li>
        <button className={[classes.button, classes.fast].join(' ')} type="button">
          Самый быстрый
        </button>
      </li>
      <li>
        <button className={[classes.button, classes.opt].join(' ')} type="button">
          Оптимальный
        </button>
      </li>
    </ul>
  );
};

export default Sort;
