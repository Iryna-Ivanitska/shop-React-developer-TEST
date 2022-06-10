import { Component } from "react";
import { connect } from "react-redux";
import Attributes from "../attributes/Attributes";
import Counter from "../Counter/Counter";
import './SmallCartItem.css'

class CartItem extends Component {

  render() {
    const {product, selectedCurrency, overlay} = this.props
    const price = product && product.prices.filter( price => price.currency.label === selectedCurrency)


    return (
      <div className="cart-item">
      <div className="details" >
        <h4 className="s-name">{product.name}</h4>
        <span className="s-name">{product.brand}</span>
        <div className='s-price'>{price ? price[0].currency.symbol + price[0].amount : null}</div>
        <Attributes attributes={product.attributes} productName={product.id}/>
      </div>
      <Counter product={product}/>
      <div>
      <img src={product.gallery[0]} alt={product.name} className='cart-thumbnail'/>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(CartItem);
