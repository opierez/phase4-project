import React from 'react'
import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
// adding comment as a test 
  useEffect(() => {
    fetch("/hello")
      .then((r) => r.json())
      .then((data) => setCount(data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App;