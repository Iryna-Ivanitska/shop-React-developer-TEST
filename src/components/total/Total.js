import { Component } from 'react';
import { connect } from 'react-redux';
import { setTotalCount, setTotalSum } from '../../store/Actions/actions';
import Button from '../button/Button';
import './Total.css'

class Total extends Component {
  render() {
    const { totalQuantity, totalSum  } = this.props
    // const quantity = productsInCart.reduce( (acc, el) => acc += el.counter, 0)
    // setTotalCount(quantity)
    // let totalPrice = productsInCart.reduce( (acc, el) => {
    //   let price = el.prices.filter( item => item.currency.label === selectedCurrency)[0].amount
    //   return acc += price * el.counter
    // }, 0);
    // setTotalSum(totalPrice)
    const tax = totalSum * 0.21
    return (
      <>
      <table>
        <tr>
          <td>Tax 21%:</td>
          <td className='values'>{tax.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Quantity:</td>
          <td className='values'>{totalQuantity}</td>
        </tr>
        <tr>
          <td>Total:</td>
          <td className='values'>{totalSum.toFixed(2)}</td>
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
