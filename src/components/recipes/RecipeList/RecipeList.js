import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRecipes } from '../../../store/recipe/recipeAction'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './RecipeList.scss'

export default function RecipeList() {
  const dispatch = useDispatch()

  const recipeSelector = useSelector((state) => state.recipe.recipeList)

  useEffect(() => {
    getRecipeList()
  }, [])

  const getRecipeList = () => {
    dispatch(getRecipes())
  }

  return (
    <Row>
      {recipeSelector.map((recipe, index) => (
        <Col key={index}>
          <Card className="recipeCard">
            <Card.Img
              variant="top"
              src={require(`@assets/images/recipes/${recipe.imageSrc}`)}
            />

            <Card.Body>
              <Card.Title>{recipe.title}</Card.Title>
              <Card.Text>{recipe.summary}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  )
}
