import { Component } from "react";
import Attributes from "../attributes/Attributes";
import './ProductDetails.css'
import Price from '../price/Price';
import Button from './../button/Button';

class ProductDetails extends Component {
  render() {
    const { product } = this.props
    return (
      <div className="details" >
        <h1 className="name">{product.name}</h1>
        <span className="brand">{product.brand}</span>
        <Attributes attributes={product.attributes} productName={product.id}/>
        <div className="price-name">Price</div>
        <Price />
        <Button text="Add to cart"/>
      </div>
    );
  }
}

export default ProductDetails;