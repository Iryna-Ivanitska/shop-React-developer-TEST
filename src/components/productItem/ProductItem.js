import React, { Component } from 'react';
import { connect } from 'react-redux';
import './productItem.css'

class ProductItem extends Component {

  render() {
    const {product, selectedCurrency} = this.props;
    const price = product.prices.filter( price => price.currency.label === selectedCurrency)
    console.log(price)
    return (
      <article className='product-item'>
        <img src={product.gallery[0]} alt={product.name} className="thumbnail"/>
        <h2 className='product-title'>{product.name}</h2>
        <div className='product-price'>{price ? price[0].currency.symbol + price[0].amount : null}</div>
        </article>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  selectedCurrency: state.selectedCurrency

});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);