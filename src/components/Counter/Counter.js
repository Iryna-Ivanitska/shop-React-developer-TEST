import { Component } from "react";
import { connect } from "react-redux";
import { decrement, deleteFromCart, increment } from "../../store/Actions/actions";
import './Counter.css'

class Counter extends Component {

  render() {
    const {product, increment, decrement, deleteFromCart} = this.props

    function handleDecrement() {
      if (product.counter === 1) {
        let result = window.confirm('Delete product from the cart?');
        if (!result) {
          increment(product)
      } else deleteFromCart(product);
    } else {
      decrement(product)
    }
    }


    return (
      <div className="btn-block">
        <div className="counter-btn" onClick={() => increment(product)}>+</div>
        <div>{product.counter}</div>
        <div className="counter-btn" onClick={() => handleDecrement()}>-</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  increment: (product) => dispatch(increment(product)),
  decrement: (product) => dispatch(decrement(product)),
  deleteFromCart: (product) => dispatch(deleteFromCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
