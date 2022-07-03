import * as React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { LoadingContainer } from './style'

const Carregando = () => {
  return (
    <LoadingContainer>
      <CircularProgress/>
    </LoadingContainer>
  )
}

export {Carregando}