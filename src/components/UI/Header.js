import React from "react";
import classes from "./Header.module.css";
import logo from "../../images/logo.png";
import { Link} from "react-router-dom";
/**
 * Presentational component that will be reused and unified when the header is needed.
 * @returns {JSX.Element} in charge of rendering a presentational Header component.
 */
const Header = () => {

  return (
    <header className={classes.header}>
      <div className={classes.headerFixed}>
      <Link to="/characters?page=1" onClick={() => {window.location.href="/characters?page=1"}}><img src={logo} alt="logo" height="60px" /></Link>
      </div>
    </header>
  );
};

export default Header;
