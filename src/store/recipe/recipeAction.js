import axios from 'axios'
import apiConfig from '../../config/api'
import * as recipeActionType from './recipeActionType'

export const getRecipe = () => async (dispatch) => {
  try {
    const result = await axios.get(`${apiConfig.API_BASE_URL}/posts`)
    dispatch({
      type: recipeActionType.GET_RECIPE,
      payload: result.data
    })
  } catch (error) {
    console.log(error)
  }
}