import React, { useState } from "react";
const UserForm = (props) => {
  // User name
  //first name
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 2) {
      setFirstNameError("First Name must be at least 2 characters ");
    } else {
      setFirstNameError("");
    }
  };
  //last name
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 2) {
      setLastNameError("Last Name must be at least 2 characters ");
    } else {
      setLastNameError("");
    }
  };

  // Email
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 5) {
      setEmailError("Email must be at least 5 characters ");
    } else {
      setEmailError("");
    }
  };

  // Password
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters ");
    } else {
      setPasswordError("");
    }
  };

  // Confirm Password
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    if (e.target.value.length < 8) {
      setConfirmPasswordError("First Name must be at least 8 characters ");
    } else {
      setConfirmPasswordError("");
      e.target.value === password
        ? setConfirmPasswordError("")
        : setConfirmPasswordError("Password does not match!");
    }
  };

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);

  // Create User
  const createUser = (e) => {
    e.preventDefault();
    const newUser = { firstName, lastName, email, password, confirmPassword };
    console.log("Welcome", newUser);
    setHasBeenSubmitted(true);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <article>
      <form onSubmit={createUser}>
        {hasBeenSubmitted ? (
          <h3> Thank you for submitting the form!</h3>
        ) : (
          <h3> Welcome, please submit the form!</h3>
        )}

        <div className="form-control">
          <label>First Name: </label>
          <input type="text" onChange={handleFirstName} value={firstName} />
          {firstNameError ? (
            <p style={{ color: "red" }}>{firstNameError}</p>
          ) : (
            ""
          )}
        </div>

        <div className="form-control">
          <label>Last Name: </label>
          <input type="text" onChange={handleLastName} value={lastName} />
          {lastNameError ? <p style={{ color: "red" }}>{lastNameError}</p> : ""}
        </div>

        <div className="form-control">
          <label>Email: </label>
          <input type="text" onChange={handleEmail} value={email} />
          {emailError ? <p style={{ color: "red" }}>{emailError}</p> : ""}
        </div>
        <div className="form-control">
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={handlePassword}
            value={password}
          />
          {passwordError ? <p style={{ color: "red" }}>{passwordError}</p> : ""}
        </div>
        <div className="form-control">
          <label>Confirm Password: </label>
          <input
            type="password"
            name="password"
            onChange={handleConfirmPassword}
            value={confirmPassword}
          />
          {confirmPasswordError ? (
            <p style={{ color: "red" }}>{confirmPasswordError}</p>
          ) : (
            ""
          )}
        </div>
        <input className="form-control" type="submit" value="Create User" />
      </form>

      <div>
        <h3>Your Form Data</h3>
        <h4>First Name: {firstName}</h4>
        <h4>Last Name: {lastName}</h4>
        <h4>Email Name: {email}</h4>
        <h4>Password: password</h4>
        <h4>Confirm Password: password</h4>
        <p>
          I also check confirm password if it matches the password. Feel free to
          check it!
        </p>
      </div>
    </article>
  );
};
export default UserForm;
