import axios from 'axios'
import apiConfig from '../../config/api'
import * as recipeActionType from './recipeActionType'

export const getRecipes = () => async (dispatch) => {
  try {
    const result = await axios.get(`${apiConfig.API_BASE_URL}/recipes`)
    dispatch({
      type: recipeActionType.GET_RECIPES,
      payload: result.data,
    })
  } catch (error) {
    console.log(error)
  }
}
