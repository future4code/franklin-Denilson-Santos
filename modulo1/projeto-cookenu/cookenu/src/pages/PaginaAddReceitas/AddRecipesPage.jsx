import React from 'react'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { RecipeContainer, ScreenContainer } from './styled'
import { AddRecipeForm } from './AddRecipesForm'
import Typography from '@mui/material/Typography';

const AddRecipePage = () => {

  useProtectedPage()

  return (
    <ScreenContainer>

      <RecipeContainer>

        <Typography 
          gutterBottom 
          variant={'h4'} 
          align={'center'} 
          color={'textPrimary'}>
          Adicionar Nova Receita
        </Typography>
        <AddRecipeForm />

      </RecipeContainer>

    </ScreenContainer>
  )

}

export {AddRecipePage}