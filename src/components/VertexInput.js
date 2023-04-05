import React from "react";

function VertexInput(props) {
  return (
    <div>
      <label htmlFor="vertexInput">Enter vertices:</label>
      <input
        type="text"
        id="vertexInput"
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default VertexInput;
