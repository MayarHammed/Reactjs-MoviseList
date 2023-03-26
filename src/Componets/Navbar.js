import React from "react";
const NavBar = ({ search }) => {

  const onSearch = (word) => {
    search(word)
  }
  return (
    <div className="nav">
    <input className="nav-input" onChange={(e) => onSearch(e.target.value)} type="text"  placeholder="Search" />   
    </div>
  );
};

export default NavBar;


