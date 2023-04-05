import React from "react";

function EdgeInput(props) {
  return (
    <div>
      <label htmlFor="edgeInput">Enter edges:</label>
      <input
        type="text"
        id="edgeInput"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default EdgeInput;
