import React from "react";
import Nav from "./nav/Nav";
import './Header.css'
import logo from './../../assets/svg/a-logo.svg'
import CurrencySwitcher from "./currencySwitcher/CurrencySwitcher";

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <div><img src={logo} alt="logo"/></div>
        <div className="nav-section">
          <div><CurrencySwitcher /></div>
          <div>Cart</div>
        </div>
      </header>
    );
  }
}

export default Header;