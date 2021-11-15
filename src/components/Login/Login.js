import React, { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState(''); // поле ввода емейл
  const [emailIsValid, setEmailIsValid] = useState(); // проверка поля true/false емейл
  const [enteredPassword, setEnteredPassword] = useState(''); // поле ввода пароль
  const [passwordIsValid, setPasswordIsValid] = useState(); // проверка поля true/false пароль
  const [formIsValid, setFormIsValid] = useState(false); // проверка полей true/false емейл & пароль

  const emailChangeHandler = (event) => {
    // инпутка жазылаган value алат email
    setEnteredEmail(event.target.value);

    setFormIsValid(
      // проверка валидацию email и password
      event.target.value.includes('@') && enteredPassword.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // инпутка жазылаган value алат password
    setEnteredPassword(event.target.value);

    setFormIsValid(
      // проверка валидацию password и email
      event.target.value.trim().length > 6 && enteredEmail.includes('@')
    );
  };

  const validateEmailHandler = () => {
    // @ болуш керек экенин билдирет
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    // password 6дан чон болуш кк
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    // buttton басканда функция иштейт
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword); // lifting-up
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
