import { Component } from "react";
import { connect } from "react-redux";
import { decrement, deleteFromCart, increment, setTotalCount, setTotalSum } from "../../store/Actions/actions";
import './Counter.css'

class Counter extends Component {

  render() {
    const {product, productsInCart, increment, decrement, deleteFromCart, selectedCurrency, setTotalSum, setTotalCount, overlay} = this.props
    const quantity = productsInCart.reduce( (acc, el) => acc += el.counter, 0)
    setTotalCount(quantity)
    let totalPrice = productsInCart.reduce( (acc, el) => {
      let price = el.prices.filter( item => item.currency.label === selectedCurrency)[0].amount
      return acc += price * el.counter
    }, 0);
    setTotalSum(totalPrice)

    function handleDecrement() {
      if (product.counter === 1) {
        let result = window.confirm('Delete product from the cart?');
        if (result) deleteFromCart(product);
        setTotalCount(quantity - 1)
    } else {
      decrement(product)
    }
    }


    return (
      <div className="btn-block">
        <div className={overlay ? "counter-s" : "counter-btn"} onClick={() => increment(product)}>+</div>
        <div>{product.counter}</div>
        <div className={overlay ? "counter-s" : "counter-btn"} onClick={() => handleDecrement()}>-</div>
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
  setTotalSum: (sum) => dispatch(setTotalSum(sum)),
  setTotalCount: (sum) => dispatch(setTotalCount(sum))
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
