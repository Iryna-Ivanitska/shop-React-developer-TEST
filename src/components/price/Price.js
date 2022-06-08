import { Component } from "react";
import { connect } from "react-redux";
import './Price.css'

class Price extends Component {

  render() {
    const {product, selectedCurrency} = this.props;
    const price = product ? product.prices.filter( price => price.currency.label === selectedCurrency) : null
    return (
      <div className='product-price'>{price ? price[0].currency.symbol + price[0].amount : null}</div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state,
  product: state.categories ? state.categories[0].products.filter(el => el.id === window.location.pathname.slice(1) )[0] : null,
  selectedImgUrl: state.selectedImgUrl
});

export default connect(mapStateToProps)(Price);