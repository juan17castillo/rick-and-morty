import React from "react";
import classes from "./Header.module.css";
import logo from "../../images/logo.png";
/**
 * Presentational component that will be reused and unified when the header is needed.
 * @returns {JSX.Element} in charge of rendering a presentational Header component.
 */
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.headerFixed}>
        <img src={logo} alt="logo" height="60px" />
      </div>
    </header>
  );
};

export default Header;
