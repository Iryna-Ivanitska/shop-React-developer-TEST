import { Component } from "react";
import './Button.css';

class Button extends Component {
  render() {
    const {text, product, btnFunction} = this.props
    return (
      <button className="btn" onClick={()=>btnFunction(product)}>{text}</button>
    );
  }
}

export default Button;