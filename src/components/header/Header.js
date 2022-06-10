import React from "react";
import Nav from "./nav/Nav";
import './Header.css'
import logo from './../../assets/svg/a-logo.svg'
import CurrencySwitcher from "./currencySwitcher/CurrencySwitcher";
import { Link } from "react-router-dom";
import MiniCart from "./miniCart/MiniCart";
import OverlayCart from "../overlayCart/OverlayCart";
import { connect } from "react-redux";

class Header extends React.Component {
  render() {
    const {overlay} = this.props;
    return (
      <div className="content">
        <header className="header">
          <Nav />
          <Link to={'/'}><img src={logo} alt="logo"/></Link>
          <div className="nav-section">
            <div><CurrencySwitcher /></div>
            <MiniCart />
          </div>
        </header>
        {overlay && <OverlayCart /> }
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state
});

export default connect(mapStateToProps)(Header);
