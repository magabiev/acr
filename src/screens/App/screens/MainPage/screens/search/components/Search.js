import React, { useState } from "react";
import { SearchBlock, SearchForm } from "./styled";
import { useDispatch, useSelector } from "react-redux";
import {
  searchRequest,
  valueSelector,
} from "../../../../../../../redux/ducks/search";

function Search() {
  const dispatch = useDispatch();
  const [focus, setFocus] = useState(false);
  const value = useSelector(valueSelector);
  const handleChange = (e) => {
    dispatch(searchRequest(e.target.value));
  };
  const clear = () => {
    dispatch(searchRequest(""));
  };

  return (
    <SearchBlock
      focusBorder={focus || value.length !== 0}
      showClear={value.length !== 0}
    >
      <SearchForm
        value={value}
        placeholder="Поиск по имени"
        onChange={handleChange}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
      <i className="material-icons" onClick={clear}>
        clear
      </i>
    </SearchBlock>
  );
}

export default Search;
