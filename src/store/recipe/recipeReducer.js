import * as recipeActionType from './recipeActionType'

const initialRecipeState = {
  recipeList: []
}

const recipeReducer = (state = initialRecipeState, { type, payload }) => {
  switch (type) {
    case recipeActionType.GET_RECIPE:
      return {
        ...state,
        recipeList: payload
      }
    default:
      return state
  }
}

export default recipeReducer