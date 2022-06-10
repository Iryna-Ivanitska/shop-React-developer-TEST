import { Component } from 'react';
import { connect } from 'react-redux';
import { openOverlayCart, setTotalCount } from '../../store/Actions/actions';
import Button from '../button/Button';
import SmallCartItem from '../smallCartItem/SmallCartItem';
import './OverlayCart.css'
import { Link } from 'react-router-dom';

class OverlayCart extends Component {
  render() {
    const { products, overlay, totalQuantity, totalSum, openOverlayCart} = this.props;
    const quantity = products.reduce( (acc, el) => acc += el.counter, 0)
    setTotalCount(quantity)
    const productList =  products ? products.map( product => {
      return <SmallCartItem key={product.id} product={product} />
    }) : null

    function handleOverlayClick(e) {
      if (e.target.className === 'overlay') openOverlayCart();
    }
     return ( <>
      <div className='overlay' onClick={(e) => handleOverlayClick(e)}>
        <div className='small-cart'>
       {totalQuantity !== 0 ? <div >My beg, {totalQuantity} items </div> : null}
        {products.length ? <section className='cart-list'>
          {productList}
        <div className='s-total'>Total: <div>{totalSum.toFixed(2)}</div></div>
        <div className='btn-group'>
          <Link to="cart" onClick={() => openOverlayCart()}><Button text="View bag"/></Link>
          <Button text="Check out"/>

        </div>
        </section>
        : <div className="empty-cart">Your cart is empty</div>}
        </div>
      </div>
    </>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  products: state.productsInCart
});

const mapDispatchToProps = dispatch => ({
  openOverlayCart: () => dispatch(openOverlayCart()),
  setTotalCount: (sum) => dispatch(setTotalCount(sum))
});

export default connect(mapStateToProps, mapDispatchToProps)(OverlayCart);