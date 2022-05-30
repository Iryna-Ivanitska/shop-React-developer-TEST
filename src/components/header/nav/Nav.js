import { Component } from "react";
import './nav.css'

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
      {this.props.categoryList}
      </nav>
    );
  }
}

export default Nav;