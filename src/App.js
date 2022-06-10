import React from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import CartPage from './pages/cartPage/CartPage';
import CategoryPage from './pages/categoryPage/CategoryPage';
import ProductPage from './pages/productPage/ProductPage';
import { fetchData } from './store/Actions/actions';

class App extends React.PureComponent {

  
  render() {
    return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={ <CategoryPage />} />
        <Route path="/cart" element={ <CartPage />} />
        <Route path="/:productId" element={<ProductPage/>} />
      </Routes>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchData: (data) => dispatch(fetchData(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);