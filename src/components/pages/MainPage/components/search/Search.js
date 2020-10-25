import React from "react";
import { SearchBlock, SearchForm } from "./styled";

function Search() {
  return (
    <SearchBlock>
      <SearchForm placeholder="Поиск по имени" />
      <i className="material-icons">clear</i>
    </SearchBlock>
  );
}

export default Search;
