import React from "react";

function Form({
  firstName,
  lastName,
  number,
  handleFirstNameChange,
  handleLastNameChange,
  handleNumberChange,
}) {
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <input type="number" onChange={handleNumberChange} value={number} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
