import { Router } from './routes/Router'
import styled from 'styled-components';
import GlobalStyle from './globalStyle';

const  StyleGeral = styled.div`
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
`




function App() {
  return (
    <StyleGeral >
      <GlobalStyle/>
      <Router/>
    </StyleGeral>
  )
}

export default App;
