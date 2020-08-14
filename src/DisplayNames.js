import React from "react";

const DisplayNames = ({ name, fName }) => {
  console.log("fan", fName);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{fName.current}</h2>
    </div>
  );
};

export default DisplayNames;
