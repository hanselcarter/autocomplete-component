// import React from 'react';
import Autocomplete, { AutocompleteItem } from "./components/ui/Autocomplete";

import "./App.css";
import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { useDebounce } from "./hooks/useDebounce";
import { useGetCountries } from "./hooks/useGetCountries";
import { generateId } from "./utils/utils";

const searchRestrictionLenght = 1;

function App() {
  const [searchValue, setValueSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce<string>(searchValue);

  const { getCountriesByName, countries, loading } = useGetCountries(30);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValueSearchValue(event.target.value.trim());
  };

  useEffect(() => {
    if (debouncedSearchValue.length >= searchRestrictionLenght) {
      getCountriesByName(debouncedSearchValue.toLocaleLowerCase());
    }
  }, [debouncedSearchValue]);

  const formattedCountries = useMemo((): AutocompleteItem[] => {
    //First we transform countries to comply into autocomplete item
    const transformedCountries = countries.map((country) => ({
      id: generateId("id"),
      label: country.name.common,
      description: country.flag,
    }));

    //Then, when I tested countries api sometimes it does not match the whole list by search keyword, this is an extra layer
    //to make sure it contain search keyword
    return transformedCountries.filter((country) =>
      country.label
        .toLocaleLowerCase()
        .includes(debouncedSearchValue.toLocaleLowerCase())
    );
  }, [countries]);

  const allowSearch = debouncedSearchValue.length >= searchRestrictionLenght;
  //Added this condtion due to api restriction
  const startSearchAtMessageError = `Type at least ${searchRestrictionLenght} characters to start your country search.`;

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
        items={formattedCountries}
        handleChange={handleChange}
        startSearchAtMessageError={
          allowSearch ? undefined : startSearchAtMessageError
        }
        loading={loading}
        highlight={debouncedSearchValue}
      />
    </div>
  );
}

export default App;
