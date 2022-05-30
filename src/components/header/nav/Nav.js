import { Component } from "react";
import { connect } from "react-redux";
import { selectCategory } from "../../../store/Actions/actions";
import './nav.css'

class Nav extends Component {
  render() {
    console.log(this.props)
    const {categories} = this.props;
    const categoryList = categories.map( el => {
      return <div key={el.name} 
        onClick={() => this.props.selectCategory(el.name)}
        className={ this.props.selectedCategory === el.name ? 'nav-item active-nav' : 'nav-item'}
        >{el.name}</div>
    })
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