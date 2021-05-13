import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import React, { useContext } from "react";
import GlobalContext from "GlobalContext";

const Navbar = () => {
  const { theme, setTheme } = useContext(GlobalContext);

  const handleThemeToggle = (e) => {
    e.preventDefault();
    setTheme(theme === "light" ? "dark" : "light");
    localStorage.setItem("client", theme);
  };

  return (
    <ul className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">L'agence</Link>
      </li>
      <li>
        <Link to="/work">Projets</Link>
      </li>

      <li>
        <div>
          <button
            className="themetoggler btn btn-primary m-2"
            onClick={handleThemeToggle}
          >
            <span role="img" aria-label="switch theme">
              {theme === "light" ? "Day" : "Night"}
            </span>
          </button>
        </div>
      </li>
    </ul>
  );
};

export default Navbar;
