import React from "react";
import Nav from "./nav/Nav";
import './Header.css'
import logo from './../../assets/svg/a-logo.svg'

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Nav />
        <div><img src={logo} alt="logo"/></div>
        <div>Cart</div>
      </header>
    );
  }
}

export default Header;