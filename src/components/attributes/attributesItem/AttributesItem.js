import { Component } from "react";
import { connect } from "react-redux";
import { selectAttribute } from "../../../store/Actions/actions";
import './AttributesItem.css'

class AttributesItem extends Component {
  render() {
    const {attribute, productName, selectedAttributes, select} = this.props;
    const values = attribute.type === 'text' ? attribute.items.map( item => {
      const isChecked = selectedAttributes.some( el => el.value === item.displayValue
                                                && el.productName === productName && el.name === attribute.name )
      return <div className="attributes-item" key={item.id} 
      style={ isChecked ? {'backgroundColor': 'black', 'color': 'white'} : null}
      onClick={ () => selectAttribute(productName, attribute.id, item.id)}
      >{item.value}</div>
    })
    : attribute.items.map( item => {
      const isChecked = selectedAttributes.some( el => el.value === item.displayValue 
                                                && el.productName === productName && el.name === attribute.name)
      return !isChecked ? <div className="attributes-item" key={item.id} 
      style={{'backgroundColor': item.value}} 
      onClick={ () => selectAttribute(productName, attribute.id, item.id)}></div>
      : <div className="attribute-active" key={item.id}>
        <div className="attributes-item"  
      style={{'backgroundColor': item.value}} 
      onClick={ () => selectAttribute(productName, attribute.id, item.id)}></div>
      </div>
    })

    function selectAttribute(productName, name, value) {
      let attributes = [...selectedAttributes];
      let obj = {
        productName: productName,
        name: name,
        value: value
      }
      
      if (!attributes.some(el => el.productName === productName && el.name === name)) {
        attributes.push(obj)
      } else {
        attributes = attributes.map( el => el.productName === productName && el.name === name ? obj: el);
      }
      
      select(attributes)

    }

    return (
      <div className="attributes-block">
        <h3 className="attribute-name">{attribute.name}</h3>  
        <div className="attributes">{values}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
  selectedAttributes: state.selectedAttributes
});

const mapDispatchToProps = dispatch => ({
  select: (attributes) => dispatch(selectAttribute(attributes))
});

export default connect(mapStateToProps, mapDispatchToProps)(AttributesItem);