import { Component } from "react";
import { connect } from "react-redux";
import ProductDetails from "../../components/product-details/ProductDetails";
import ProductGallery from "../../components/product-gallery/ProductGallery";
import { selectImg } from "../../store/Actions/actions";
import './ProductPage.css';

class ProductPage extends Component {
 
  render() {
    const { product } = this.props

    return ( <>
      <div className="gallery">
        {product && <>
          <ProductGallery pictures={product.gallery} />
          <img src={this.props.selectedImgUrl || product.gallery[0]} alt={product.name} className="main-img"/>
          <ProductDetails product={product}/>
        </>}
      </div>
    </>
    );
  }

  componentWillUnmount() {
    this.props.selectImg('')
  }
}


const mapStateToProps = (state) => ({
  ...state,
  product: state.categories ? state.categories[0].products.filter(el => el.id === window.location.pathname.slice(1) )[0] : null,
  selectedImgUrl: state.selectedImgUrl
});

const mapDispatchToProps = dispatch => ({
  selectImg: (img) => dispatch(selectImg(img))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);
