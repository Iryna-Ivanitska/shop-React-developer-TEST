import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import Header from './components/header/Header';
import { fetchData } from './store/Actions/actions';

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

  
  render() {
    return (
    <div className="container">
      <Header />
    </div>
    );
  }

  componentDidMount() {
    fetch('http://localhost:4000/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify( { query: DATA_QUERY } )
    }).then( response => response.json())
    .then( data => this.props.fetchData(data.data.categories))
  }

  selectCategory(name) {
    console.log(name)
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchData: (data) => dispatch(fetchData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);