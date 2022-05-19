import React from "react";

import classes from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div class={classes.search_box}>
      <button className={classes.btn_search}>
        {/* <i class='fas fa-search'></i> */}
        🔍
      </button>
      <input
        className={classes.input_search}
        placeholder='Search any place..'
      />
    </div>
  );
};

export default SearchBar;
