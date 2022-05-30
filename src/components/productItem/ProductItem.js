import React, { Component } from 'react'

class ProductItem extends Component {

  render() {
    const {product} = this.props;
    return (
      <article>
        <h2>{product.name}</h2>
        </article>
    );
  }
}

export default ProductItem;