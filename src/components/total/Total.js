import { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../button/Button';
import './Total.css'

class Total extends Component {
  render() {
    const { productsInCart, selectedCurrency } = this.props
    const quantity = productsInCart.reduce( (acc, el) => acc += el.counter, 0)
    let totalPrice = productsInCart.reduce( (acc, el) => {
      let price = el.prices.filter( item => item.currency.label === selectedCurrency)[0].amount
      return acc += price * el.counter
    }, 0);
    const tax = totalPrice * 0.21
    return (
      <>
      <table>
        <tr>
          <td>Tax 21%:</td>
          <td className='values'>{tax.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Quantity:</td>
          <td className='values'>{quantity}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td className='values'>{totalPrice.toFixed(2)}</td>
        </tr>
      </table>
      <Button text="Order"/>
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Total);
