import { Component } from "react";
import Attributes from "../attributes/Attributes";
import './ProductDetails.css'

class ProductDetails extends Component {
  render() {
    const { product } = this.props
    return (
      <div className="details" >
        <h1 className="name">{product.name}</h1>
        <span className="brand">{product.brand}</span>
        <Attributes attributes={product.attributes} productName={product.id}/>
      </div>
    );
  }
}

export default ProductDetails;