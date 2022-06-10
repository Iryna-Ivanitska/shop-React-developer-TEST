import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { openOverlayCart } from "../../../store/Actions/actions";
import './MiniCart.css';

class MiniCart extends Component {

  render() {
    const { productsInCart, openOverlayCart } = this.props
    return (
      <Link to={'cart'} onClick={() => openOverlayCart()}>
        <div className="cart" onMouseEnter={() => openOverlayCart()} >
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
  openOverlayCart: () => dispatch(openOverlayCart())
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniCart);
