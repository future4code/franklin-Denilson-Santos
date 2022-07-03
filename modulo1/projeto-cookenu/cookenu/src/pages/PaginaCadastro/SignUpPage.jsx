import React from 'react'
import logo from '../../assets/logo.png'
import { ScreenContainer, LogoImage } from './styled'
import {SignUpForm} from './SignUpForm'
import {useUnprotectedPage} from '../../hooks/useUnprotectedPage'

const SignUpPage = ({setBotaoDireito}) => {

  useUnprotectedPage();

  return (
    <ScreenContainer>
      <LogoImage src={logo}/>
      <SignUpForm setBotaoDireito={setBotaoDireito}/>
    </ScreenContainer>
  )
  
}

export {SignUpPage}
