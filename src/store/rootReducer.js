import recipeReducer from './recipe/recipeReducer'
import { combineReducers } from 'redux'

const reducer = combineReducers({
  recipe: recipeReducer
})

export default reducer