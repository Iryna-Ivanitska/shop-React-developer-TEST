import React from 'react';
import './App.css';
import Header from './components/header/Header';

const DATA_QUERY = `
{
  categories {
  name
  products {
    id
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
  }
}
}
`

class App extends React.PureComponent {
  
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      selectedCategory: ''
    }
  }

  render() {
    const {categories} = this.state;
    return (
    <div className="container">
      <Header 
        categories={categories}
        selectCategory = {this.selectCategory}
       />
    </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify( { query: DATA_QUERY } )
    }).then( response => response.json())
    .then( data => this.setState( {...this.state, categories: data.data.categories} ))
  }

  selectCategory(name) {
    console.log(name)
  }
}

export default App;
