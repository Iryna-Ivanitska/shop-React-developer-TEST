import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import './MiniCart.css';

class MiniCart extends Component {

  render() {
    const { productsInCart } = this.props
    return (
      <Link to={'cart'}>
        <div className="cart">
          {productsInCart.length !== 0 &&
          <div className="quantity" >{productsInCart.length }</div> }
        </div>
      </Link>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  productsInCart: state.productsInCart
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
