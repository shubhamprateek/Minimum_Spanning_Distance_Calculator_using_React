import React from "react";

function Result(props) {
  return (
    <div>
      <p>
        The minimum spanning distance between {props.source} and{" "}
        {props.destination} is {props.distance}.
      </p>
    </div>
  );
}

export default Result;
