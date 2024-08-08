import React from "react";

function DisplayData({ firstName, lastName, number }) {
  return (
    <div>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{number}</h1>
    </div>
  );
}
export default DisplayData;
