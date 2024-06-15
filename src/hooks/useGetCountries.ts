import { useState } from "react";
import { searchCountryApi } from "../utils/utils";

export const useGetCountries = () => {
  const [loading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(true);

  const getCountriesByName = async (name: string) => {
    setLoading(true);
    setFetchError(false);

    try {
      const response = await fetch(`${searchCountryApi}/name/${name}`);

      const data = await response.json();

      console.log(data, "data");
    } catch (error) {
      console.log(error);

      setFetchError(true);
    }
  };

  return {
    getCountriesByName,
    loading,
    error: fetchError,
  };
};
