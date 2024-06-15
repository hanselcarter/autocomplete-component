import { ChangeEvent } from "react";
import "./Autocomplete.css";

export interface AutocompleteItem {
  id: string;
  label: string;
}

interface AutocompleteProps {
  readonly placeHolder: string;
  readonly defaultValue?: string;
  readonly error?: boolean;
  readonly loading?: boolean;
  readonly items: AutocompleteItem[];
  readonly handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  //If present this prop is because search wont be allowed, added this logic due to api restriction also for optimzation purposes
  readonly startSearchAtMessageError?: string;
}

function Autocomplete({
  placeHolder,
  defaultValue,
  error,
  loading,
  handleChange,
  startSearchAtMessageError,
}: AutocompleteProps) {
  return (
    <div className="autocomplete-search-box ">
      <input
        defaultValue={defaultValue}
        id="input-Autocomplete"
        type="search"
        placeholder={placeHolder}
        className="search-box"
        onChange={handleChange}
      />
      <ul className="search-result">
        {startSearchAtMessageError ? (
          <li>{startSearchAtMessageError}</li>
        ) : (
          <>
            <li>test</li>
            <li>test</li>
            <li>test</li>
          </>
        )}
      </ul>
    </div>
  );
}

export default Autocomplete;
