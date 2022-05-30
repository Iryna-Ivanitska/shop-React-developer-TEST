import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductItem from '../../components/productItem/ProductItem';
import './categoryPage.css';

class CategoryPage extends Component {
  render() {
    const { categoryName, products } = this.props;
    const productList =  products ? products.map( product => {
      return <ProductItem key={product.id} product={product}/>
    }) : null
    return (
      <>
        <h1 className='page-title'>{categoryName}</h1>
        {productList}
      </>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  categoryName: state.selectedCategory.name,
  products: state.selectedCategory.products
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
