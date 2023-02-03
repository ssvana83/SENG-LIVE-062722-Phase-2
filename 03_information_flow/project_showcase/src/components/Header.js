import React, { useState } from "react";

const Header = ({ isDarkMode, onToggleDarkMode }) => {
  // const [isDarkMode, setIsDarkMode] = useState(true);
  //moved this state UP into App comp

  // const toggleDarkMode = (e) => {
  //   setIsDarkMode(isDarkMode => !isDarkMode)
  // }
  //moved this up into App Comp
//now add this so we can still invoke here as well as do something else 
  const handleToggleDarkModeClick = (e) => {
    onToggleDarkMode();
  }

  return (
    <header>
      <h1>
        <span className="logo">{"//"}</span>
        Project Showcase
      </h1>
      <button onClick={handleToggleDarkModeClick}>{isDarkMode ? "Light Mode" : "Dark Mode"}</button>
    </header>
  );
}

export default Header;
