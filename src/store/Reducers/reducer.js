import { FETCH_DATA, SELECT_CATEGORY, SELECT_CURRENCY, SELECT_IMG } from "../Actions/actions"

const initialState = {
  categories: null,
  selectedCategory: {},
  currencies: [],
  selectedCurrency: 'USD',
  selectedImgUrl: ''
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      const currencies = action.payload[0].products[0].prices.map( el => el.currency);
      return {
        ...state,
        categories: action.payload,
        selectedCategory: action.payload[0],
        currencies: currencies
      }
    }
    case SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategory: state.categories.filter( cat => cat.name === action.payload)[0]
      }
    }
    case SELECT_CURRENCY: {
      return {
        ...state,
        selectedCurrency: action.payload
      }
    }
    case SELECT_IMG: {
      return {
        ...state,
        selectedImgUrl: action.payload
      }
    }
    default:
      return state
  }
}