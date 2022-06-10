import { Component } from "react";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes";
import Counter from "../Counter/Counter";
import './CartItem.css'

class CartItem extends Component {

  render() {
    const {product, selectedCurrency} = this.props
    const price = product && product.prices.filter( price => price.currency.label === selectedCurrency)
    return (
      <div className="cart-item">
      <div className="details" >
        <h1 className="name">{product.name}</h1>
        <span className="brand">{product.brand}</span>
        <div className='product-price'>{price ? price[0].currency.symbol + price[0].amount : null}</div>
        <Attributes attributes={product.attributes} productName={product.id}/>
      </div>
      <Counter product={product}/>
      <div>
      <img src={product.gallery[0]} alt={product.name} className="cart-thumbnail"/>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(CartItem);
