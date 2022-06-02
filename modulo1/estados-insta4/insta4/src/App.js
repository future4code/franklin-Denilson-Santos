import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  background-image: url(https://th.bing.com/th/id/R.1d94363ae891964881f6e75a3d478ef1?rik=uv1pjGfatWS7TA&pid=ImgRaw&r=0);
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
function App() {
return(
  <MainContainer>
    <Post
    nomeUsuario={'paulinha'}
    fotoUsuario={'https://picsum.photos/50/50'}
    fotoPost={'https://picsum.photos/200/150'}
    />
    <Post
    nomeUsuario={'Denilson'}
    fotoUsuario={'https://picsum.photos/49/49'}
    fotoPost={'https://picsum.photos/149/100'}
    />
    <Post
    nomeUsuario={'Heitor'}
    fotoUsuario={'https://picsum.photos/48/48'}
    fotoPost={'https://picsum.photos/100/50'}
    />
  </MainContainer>
)

}


export default App;
