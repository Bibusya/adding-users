import React from "react";
import Card from "./UI/Card";
import Button from "./UI/Button";
import "./ErrorModal.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className="backdrop" onClick={props.closeError} />
      <Card className="modal">
        <header className="header">
          <h2>{props.title}</h2>
        </header>
        <div className="content">
          <p>{props.message} </p>
        </div>
        <footer className="actions">
          <Button onClick={props.closeError}>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
