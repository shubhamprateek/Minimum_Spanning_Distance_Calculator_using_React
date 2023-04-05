import React, { useState } from "react";
import EdgeInput from "./components/EdgeInput";
import VertexInput from "./components/VertexInput";
import Result from "./components/Result";
import "./css/styles.css";

function App() {
  const [edges, setEdges] = useState("");
  const [vertices, setVertices] = useState("");
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [distance, setDistance] = useState("");

  function handleEdgesChange(event) {
    setEdges(event.target.value);
  }

  function handleVerticesChange(event) {
    setVertices(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    // calculate minimum spanning distance between source and destination based on edges and vertices input
    // set the result to the state variable 'distance'
  }

  return (
    <div className="app">
      <h1>Minimum Spanning Distance Calculator</h1>
      <form onSubmit={handleSubmit}>
        <VertexInput onChange={handleVerticesChange} value={vertices} />
        <EdgeInput onChange={handleEdgesChange} value={edges} />
        <div>
          <label htmlFor="sourceInput">Enter source:</label>
          <input
            type="text"
            id="sourceInput"
            onChange={(event) => setSource(event.target.value)}
            value={source}
          />
        </div>
        <div>
          <label htmlFor="destinationInput">Enter destination:</label>
          <input
            type="text"
            id="destinationInput"
            onChange={(event) => setDestination(event.target.value)}
            value={destination}
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {distance && (
        <Result source={source} destination={destination} distance={distance} />
      )}
    </div>
  );
}

export default App;
