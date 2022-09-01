import React from "react";

import useInput from "../Hooks/use-Input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    hasError: nameError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    blurValueChangeHandler: blurNameChangeHandler,
    reset: nameReseter,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    blurValueChangeHandler: blurEmailChangeHandler,
    reset: emailReseter,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid) {
      return;
    }
    if (!emailIsValid) {
      return;
    }

    nameReseter();

    emailReseter();
  };

  const emailInputClassName = emailError
    ? "form-control invalid"
    : "form-control";

  const nameInputClassName = nameError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={nameInputClassName}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangeHandler}
          onBlur={blurNameChangeHandler}
          value={enteredName}
        />
        {nameError && <p className="error-text">Name cannot be empty</p>}
      </div>
      <div className={emailInputClassName}>
        <label htmlFor="email">Your Email</label>
        <input
          type="E-mail"
          id="email"
          onChange={emailChangeHandler}
          onBlur={blurEmailChangeHandler}
          value={enteredEmail}
        />
        {emailError && <p className="error-text">Enter Valid Email</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
