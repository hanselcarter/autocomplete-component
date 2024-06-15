// import React from 'react';
import Autocomplete from "./components/ui/Autocomplete";

import "./App.css";
import { ChangeEvent, useEffect, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useGetCountries } from "./hooks/useGetCountries";

function App() {
  const [searchValue, setValueSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce<string>(searchValue);

  const { getCountriesByName, loading, error } = useGetCountries();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueSearchValue(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchValue.length >= 2) {
      getCountriesByName(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  const allowSearch = debouncedSearchValue.length >= 2;
  //Added this condtion due to api restriction
  const startSearchAtMessageError =
    "Type at least 2 characters to start your country search.";

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
        startSearchAtMessageError={
          allowSearch ? undefined : startSearchAtMessageError
        }
      />
    </div>
  );
}

export default App;
