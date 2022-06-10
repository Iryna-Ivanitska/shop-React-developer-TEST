import { Component } from "react";
import { connect } from "react-redux";
import Total from "../../components/total/Total";
import CartItem from './../../components/cartItem/CartItem';
import './CartPage.css'

class CartPage extends Component {
  render() {
    const { products } = this.props;
    const productList =  products ? products.map( product => {
      return <CartItem key={product.id} product={product} />
    }) : null
    return (
      <>
        <h1 className='page-title'>Cart</h1>
        {products.length ? <section className='cart-list'>
          {productList}
          <Total />
        </section>
        : <div className="empty-cart">Your cart is empty</div>}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  products: state.productsInCart
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);