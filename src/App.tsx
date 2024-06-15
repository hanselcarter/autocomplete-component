// import React from 'react';
import Autocomplete from "./components/ui/Autocomplete";

import "./App.css";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";

function App() {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce<string>(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log(debouncedValue, "debouncedValue");
  }, [debouncedValue]);

  return (
    <div className="App">
      <div>
        <p className="header">
          Welcome this awesome country autocomplete, start by typing a country
          name.
        </p>
      </div>
      <Autocomplete
        placeHolder="Find a country ..."
        items={[]}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
