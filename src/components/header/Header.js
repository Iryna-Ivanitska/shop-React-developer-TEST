import React from "react";
import Nav from "./nav/Nav";
import './Header.css'
import logo from './../../assets/svg/a-logo.svg'

class Header extends React.PureComponent {
  render() {
    const {categories} = this.props;
    const categoryList = categories.map( el => {
      return <div key={el.name}>{el.name}</div>
    })
    return (
      <header className="header">
        <Nav categoryList={categoryList}/>
        <div><img src={logo} alt="logo"/></div>
        <div>Cart</div>
      </header>
    );
  }
}

export default Header;