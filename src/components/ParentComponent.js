import React, { useState } from "react";
import Form from "./Form";
import DisplayData from "./DisplayData";

function ParentComponent() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [number, setNumber] = useState(0);

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }

  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  function handleNumberChange(event) {
    const newNumber = parseInt(event.target.value);
    if (newNumber >= 0 && newNumber <= 5) {
      setNumber(newNumber);
    }
  }
  return (
    <>
      <Form
        firstName={firstName}
        lastName={lastName}
        number={number}
        handleFirstNameChange={handleFirstNameChange}
        handleLastNameChange={handleLastNameChange}
        handleNumberChange={handleNumberChange}
      />
      <DisplayData firstName={firstName} lastName={lastName} number={number} />
    </>
  );
}
export default ParentComponent;
