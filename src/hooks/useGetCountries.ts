import { useState } from "react";
import { searchCountryApi } from "../utils/utils";
import { Country } from "../models/country";

export const useGetCountries = (
  //This is parameter to use limit the returned items from country list
  first: number
) => {
  const [loading, setLoading] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [countriesData, setCountriesData] = useState<Country[]>([]);

  const getCountriesByName = async (name: string) => {
    setLoading(true);
    setFetchError(false);

    try {
      const response = await fetch(`${searchCountryApi}/name/${name}`);

      if (response.status === 200) {
        const data = await response.json();

        setCountriesData(data as Country[]);
      } else {
        setCountriesData([]);
      }
    } catch (error) {
      setFetchError(true);
      setCountriesData([]);
    }

    setLoading(false);
  };

  const slicedCountries = countriesData.slice(0, first);

  return {
    countries: slicedCountries,
    getCountriesByName,
    loading,
    error: fetchError,
  };
};
