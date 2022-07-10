import React from "react";

import "./App.css";
import LaunchDetailsWrapper from "./components/LaunchDetails";
import LaunchList from "./components/LaunchList";

function App() {
  const [id, setId] = React.useState(42);
  const handleIdChange = React.useCallback((newId: number) => {
    setId(newId);
  }, []);

  return (
    <div className="App">
      <LaunchList handleIdChange={handleIdChange} />
      <LaunchDetailsWrapper id={id} />
    </div>
  );
}

export default App;
