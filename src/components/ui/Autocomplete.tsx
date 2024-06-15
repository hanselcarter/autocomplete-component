import { ChangeEvent } from "react";
import "./ui.css";
import HighLighter from "./HighLighter";

export interface AutocompleteItem {
  readonly id: string;
  readonly label: string;
  readonly description?: string;
}

interface AutocompleteProps {
  readonly placeHolder: string;
  readonly defaultValue?: string;
  readonly loading?: boolean;
  readonly items: AutocompleteItem[];
  readonly handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
  //If present this prop, search wont be allowed, added this logic due to api restriction also for optimzation purposes
  readonly startSearchAtMessageError?: string;
  readonly highlight: string;
}

function Autocomplete({
  placeHolder,
  defaultValue,
  loading,
  handleChange,
  startSearchAtMessageError,
  items,
  highlight,
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
        autoComplete="off"
      />
      <ul className="search-result">
        {startSearchAtMessageError ? (
          <li>{startSearchAtMessageError}</li>
        ) : loading ? (
          <li>
            <div className="loader"></div>
          </li>
        ) : items.length > 0 ? (
          <>
            {items.map((item) => (
              <li key={item.id}>
                <HighLighter
                  text={item.label}
                  highlight={highlight}
                  className="highlight"
                />
                <span className="description">{item.description}</span>
              </li>
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
