import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectCurrency } from '../../../store/Actions/actions';
import './currencySwitcher.css'

class CurrencySwitcher extends Component {
  render() {
    let {currencies} = this.props; 
    
    const selectCurrency = (cur) => {
      this.props.selectCurrency(cur)
    }
    
    return (
      <select name="currencySwitcher" onChange={e => selectCurrency(e.target.value)} className="select">
        {currencies.map( cur => {
          return <option key={cur.label} value={cur.label} className="option">{cur.symbol} {cur.label}</option>
        })}
      </select>
    );
  }
}

const mapStateToProps = state => ({
  ...state,
});

const mapDispatchToProps = dispatch => ({
  selectCurrency: (currency) => dispatch(selectCurrency(currency))
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySwitcher);
