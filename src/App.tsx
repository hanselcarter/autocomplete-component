// import React from 'react';
import Autocomplete from "./components/ui/Autocomplete";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Autocomplete placeHolder="Find a country ..." items={[]} />
    </div>
  );
}

export default App;
