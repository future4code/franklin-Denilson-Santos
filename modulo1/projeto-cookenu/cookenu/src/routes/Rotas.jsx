import * as React from 'react';
import { Routes, Route } from "react-router-dom";
import { RecipesListPage } from "../pages/PaginaListaReceitas/RecipesListPage";
import { LoginPage } from "../pages/PaginaLogin/LoginPage";
import { SignUpPage } from "../pages/PaginaCadastro/SignUpPage";
import { AddRecipePage } from "../pages/PaginaAddReceitas/AddRecipesPage";
import { RecipeDetailPage } from "../pages/PaginaDetalhesReceitas/RecipeDetailPage";
import { ErrorPage } from '../pages/ErrorPage/ErrorPage';

const Rotas = () => {
    
    return (
        
        <Routes>
            <Route path='/' element={<RecipesListPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/cadastro" element={<SignUpPage />} />
            <Route path="/adicionar-receita" element={<AddRecipePage />} />
            <Route path="/detalhe/:id" element={<RecipeDetailPage />} />
            <Route path='/error' element={<ErrorPage/>}/>
        </Routes>
    
    )
}

export {Rotas}