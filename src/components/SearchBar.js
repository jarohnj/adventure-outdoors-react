import { InputGroup, FormControl } from "react-bootstrap";
import { useState } from "react";

const SearchBar = ({ onChangeHandler, placeholder, className }) => {

  return (
    <div style={{ textAlign: "center" }}>
      <input
      type="search"
        className={className}
        onChange={onChangeHandler}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;
