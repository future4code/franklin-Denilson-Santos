import styled from 'styled-components'

const FlexContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  ${(props) => {
     if(props.lado === 'direita') {
        return 'justify-content: flex-end;'
     } else if(props.lado === 'esquerda') {
        return 'justify-content: flex-start;'
     } else {
        return 'justify-content: center;'
     }
  }} 
`

const ComponenteUsuario = () => {
  return <FlexContainer lado="esquerda">
    <input placeholder='Usuário' />
  </FlexContainer>
} 

export default ComponenteUsuario