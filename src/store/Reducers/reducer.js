import { FETCH_DATA, SELECT_CATEGORY } from "../Actions/actions"

const initialState = {
  categories: [],
  selectedCategory: 'all'
}

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        categories: action.payload
      }
    }
    case SELECT_CATEGORY: {
      console.log(action.payload)
      return {
        ...state,
        selectedCategory: action.payload
      }
    }
    default:
      return state
  }
}