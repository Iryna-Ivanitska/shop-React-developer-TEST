import { ADD_TO_CART, FETCH_DATA, SELECT_ATTRIBUTE, SELECT_CATEGORY, SELECT_CURRENCY, SELECT_IMG } from "../Actions/actions"

const initialState = {
  categories: null,
  selectedCategory: {},
  currencies: [],
  selectedCurrency: 'USD',
  selectedImgUrl: '',
  selectedAttributes: [],
  productsInCart: []
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
    case SELECT_ATTRIBUTE: {
      return {
        ...state,
        selectedAttributes: action.payload
      }
    }
    case ADD_TO_CART: {
      // const products = state.productsInCart.map( el => {
      //   if (el.name === action.payload.name) el.count++
      //   return el
      // } )
      return {
        ...state,
        productsInCart: [...state.productsInCart, action.payload]
      }
    }
    default:
      return state
  }
}