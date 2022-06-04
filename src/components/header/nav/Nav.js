import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { selectCategory } from "../../../store/Actions/actions";
import './nav.css'

class Nav extends Component {
  render() {
    const {categories} = this.props;
    const categoryList = categories ? categories.map( el => {
      return <Link to="/" key={el.name} 
        onClick={() => this.props.selectCategory(el.name)}
        className={ this.props.selectedCategory.name === el.name ? 'nav-item active-nav' : 'nav-item'}
        >{el.name}</Link>
    }) : null
      return (
        <nav className="nav">
        {categoryList}
        </nav>
      );
  }
}



const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  selectCategory: (name) => dispatch(selectCategory(name))
});

export default connect(mapStateToProps, mapDispatchToProps)(Nav);