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
}

function Autocomplete({
  placeHolder,
  defaultValue,
  error,
  loading,
  handleChange,
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
        <li>test</li>
        <li>test</li>
        <li>test</li>
      </ul>
    </div>
  );
}

export default Autocomplete;
