import React, { Component } from 'react'
import { connect } from 'react-redux';
import { selectCurrency } from '../../../store/Actions/actions';

class CurrencySwitcher extends Component {
  render() {
    console.log(this.props)
    let {currencies} = this.props; 
    
    const selectCurrency = (cur) => {
      this.props.selectCurrency(cur)
      console.log(this.props)
    }
    
    return (
      <select name="currencySwitcher" onChange={e => selectCurrency(e.target.value)}>
        {currencies.map( cur => {
          return <option key={cur.label} value={cur.label}>{cur.symbol} {cur.label}</option>
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
