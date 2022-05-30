import { FETCH_DATA, SELECT_CATEGORY } from "../Actions/actions"

const initialState = {
  categories: null,
  selectedCategory: {}
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        categories: action.payload,
        selectedCategory: action.payload[0]
      }
    }
    case SELECT_CATEGORY: {
      return {
        ...state,
        selectedCategory: state.categories.filter( cat => cat.name === action.payload)[0]
      }
    }
    default:
      return state
  }
}