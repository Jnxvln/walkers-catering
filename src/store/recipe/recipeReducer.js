import * as recipeActionType from './recipeActionType'

const initialRecipeState = {
  recipeList: []
}

const recipeReducer = (state = initialRecipeState, { type, payload }) => {
  switch (type) {
    case recipeActionType.GET_RECIPES:
      return {
        ...state,
        recipeList: payload
      }
    default:
      return state
  }
}

export default recipeReducer