import { Component } from "react";
import Attributes from "../attributes/Attributes";
import './ProductDetails.css'
import Price from '../price/Price';
import Button from './../button/Button';
import { connect } from "react-redux";
import { addToCart } from "../../store/Actions/actions";

class ProductDetails extends Component {
  render() {
    const { product, addToCart } = this.props

    return (
      <div className="details" >
        <h1 className="name">{product.name}</h1>
        <span className="brand">{product.brand}</span>
        <Attributes attributes={product.attributes} productName={product.id}/>
        <div className="price-name">Price</div>
        <Price />
        <Button text="Add to cart" btnFunction={addToCart} product={product}/>
        <div className="description" dangerouslySetInnerHTML={{__html: product.description}}>
        </div>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  addToCart: (product) => dispatch(addToCart(product)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
