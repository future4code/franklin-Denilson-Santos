import React from "react"
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { RecipeListContainer, AddRecipeButton } from './styled'
import { useRequestData } from '../../hooks/useRequestData'
import { BASE_URL } from '../../constants/urls'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
import { goToAddRecipes, goToRecipeDetail } from '../../routes/coordinator'
import { CartaoDeReceitas } from "../../components/CartãoDeReceitas/CartaoDeReceitas"
import { Carregando } from "../../components/Carregando/Carregando"

const RecipesListPage = () => {
  useProtectedPage()
  const navigate = useNavigate()
  const recipes = useRequestData([], `${BASE_URL}/recipe/feed`)

  const onClickCard = (id) => {
    goToRecipeDetail(navigate, id)
  }

  const recipeCards = recipes.map((recipe) => {
    return (
      <CartaoDeReceitas
        key={recipe.recipe_id}
        title={recipe.title}
        image={recipe.image}
        onClick={() => onClickCard(recipe.recipe_id)}
      />
    )
  })

  return (
    <RecipeListContainer>
      {recipeCards.length > 0 ? recipeCards : <Carregando />}
      <AddRecipeButton
        color={"primary"}
        onClick={() => goToAddRecipes(navigate)}
      >
        <AddIcon />
      </AddRecipeButton>
    </RecipeListContainer>
  )
}

export {RecipesListPage}