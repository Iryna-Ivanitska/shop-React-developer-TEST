import { Component } from "react";
import { connect } from "react-redux";
import { selectImg } from "../../store/Actions/actions";
import './productGallery.css'

class ProductGallery extends Component {
  render() {
    const imgs = this.props.pictures.map( (pic, index) => {
      return <img src={pic} alt='' key={index} onClick={() => this.props.selectImg(pic)} className='thumbnail-img'/>
    }) 
    return (
      <div className="thumbnails">
        {imgs}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    ...state
})

const mapDispatchToProps = (dispatch) => ({
    selectImg: (img) => dispatch(selectImg(img))
})

export default connect(mapStateToProps, mapDispatchToProps)(ProductGallery);