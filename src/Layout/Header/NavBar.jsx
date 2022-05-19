import React from "react";

import HeaderLogo from "./components/HeaderLogo";
import SearchBar from "./components/SearchBar";

const NavBar = () => {
  return (
    <div class='bg-teal-700'>
      <div class='px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
        <div class='relative flex items-center justify-between'>
          <HeaderLogo />
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
