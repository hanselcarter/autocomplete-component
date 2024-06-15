import { ChangeEvent } from "react";
import "./Autocomplete.css";

export interface AutocompleteItem {
  readonly id: string;
  readonly label: string;
  readonly flag?: string;
}

interface AutocompleteProps {
  readonly placeHolder: string;
  readonly defaultValue?: string;
  readonly loading?: boolean;
  readonly items: AutocompleteItem[];
  readonly handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  //If present this prop, search wont be allowed, added this logic due to api restriction also for optimzation purposes
  readonly startSearchAtMessageError?: string;
}

function Autocomplete({
  placeHolder,
  defaultValue,
  loading,
  handleChange,
  startSearchAtMessageError,
  items,
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
        ) : items.length > 0 ? (
          <>
            {items.map((item) => (
              <li key={item.id}>{item.label}</li>
            ))}
          </>
        ) : (
          <li>No countries found.</li>
        )}
      </ul>
    </div>
  );
}

export default Autocomplete;
