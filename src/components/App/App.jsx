import React from 'react';
import { Form } from '../Form';
import classes from './App.module.scss';
import Logo from './Logo.svg';

const App = () => {
  return (
    <>
      <header className={classes.header}>
        <img src={Logo} alt="logo" />
      </header>
      <div className={classes.wrap}>
        <Form />
        <div>dsd</div>
      </div>
    </>
  );
};

export default App;
