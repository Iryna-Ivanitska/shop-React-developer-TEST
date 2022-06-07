import { Component } from "react";
import AttributesItem from "./attributesItem/AttributesItem";

class Attributes extends Component {

  render() {
    const {attributes, productName} = this.props
    const items = attributes.map( el => {
      return <AttributesItem attribute={el} key={el.id} productName={productName}/>
    })

    return (
      <div>{items}</div>
    );
  }
}

export default Attributes;