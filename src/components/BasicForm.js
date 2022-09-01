import useInput from "../Hooks/use-Input";

const BasicForm = (props) => {
  const {
    value: enteredName,
    hasError: nameError,
    isValid: nameIsValid,
    valueChangeHandler: nameChangeHandler,
    blurValueChangeHandler: blurNameChangeHandler,
    reset: nameReseter,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    hasError: lastNameError,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    blurValueChangeHandler: blurLastNameChangeHandler,
    reset: lastNameReseter,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailError,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    blurValueChangeHandler: bluremailChangeHandler,
    reset: emailReseter,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;
  if (nameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid) {
      return;
    }
    if (!lastNameIsValid) {
      return;
    }
    if (!emailIsValid) {
      return;
    }

    nameReseter();

    emailReseter();
    lastNameReseter();
  };

  const emailInputClassName = emailError
    ? "form-control invalid"
    : "form-control";

  const nameInputClassName = nameError
    ? "form-control invalid"
    : "form-control";
  const lastNameInputClassName = lastNameError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={nameInputClassName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameChangeHandler}
            onBlur={blurNameChangeHandler}
          />
          {nameError && <p>Enter a valid first name!</p>}
        </div>
        <div className={lastNameInputClassName}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameChangeHandler}
            onBlur={blurLastNameChangeHandler}
          />
          {lastNameError && <p>Enter a valid last name!</p>}
        </div>
      </div>
      <div className={emailInputClassName}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailChangeHandler}
          onBlur={bluremailChangeHandler}
        />
        {emailError && <p>Enter a E-mail!</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
