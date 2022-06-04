import React from "react";
import Nav from "./nav/Nav";
import './Header.css'
import logo from './../../assets/svg/a-logo.svg'
import CurrencySwitcher from "./currencySwitcher/CurrencySwitcher";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <Link to={'/'}><img src={logo} alt="logo"/></Link>
        <div className="nav-section">
          <div><CurrencySwitcher /></div>
          <div>Cart</div>
        </div>
      </header>
    );
  }
}

export default Header;