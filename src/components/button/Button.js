import { Component } from "react";
import { connect } from "react-redux";
import './Button.css';

class Button extends Component {
  render() {
    const {text, product, btnFunction, overlay} = this.props
    return (
      <button className={overlay ? "btn-s": "btn"} onClick={()=>btnFunction(product)}>{text}</button>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Button);