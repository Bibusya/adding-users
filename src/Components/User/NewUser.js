import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import "./NewUser.css";
import ErrorModal from "../ErrorModal";

const NewUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const usernameChangeHandler = (event) => {
    setUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age",
      });
      return;
    }

    props.onSubmit(username, age);
    setAge("");
    setUsername("");
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          closeError={errorHandler}
        />
      )}
      <Card className="form">
        <form onSubmit={submitHandler}>
          <div className="form-actions">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={username}
              onChange={usernameChangeHandler}
              type="text"
            />
            <label htmlFor="age">Age</label>
            <input
              id="age"
              value={age}
              onChange={ageChangeHandler}
              type="number"
              min="1"
              max="100"
              step="1"
            />
          </div>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default NewUser;
