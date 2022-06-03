import React, {useState} from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  background-image: url(https://th.bing.com/th/id/R.1d94363ae891964881f6e75a3d478ef1?rik=uv1pjGfatWS7TA&pid=ImgRaw&r=0);
  display: flex;
  flex-direction: column;
  align-items: center;
`
const NovoPostDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 380px;
  height: 230px;
  display: flex;
  margin: 10px;
  padding: 10px;
  font-weight: bold;
  background: lightblue;
`
const NovoPostBotao = styled.button`
  width: 50%;
  padding: 10px;
  font-weight: 700;
  font-size: 16px;

  background: #ea4c89;
  border-radius: 5px;
  margin: 12px 0px 84px;
  border: none;

  cursor: pointer;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }
  
`
const NovoPostInput = styled.input`
  width: 50%;
  margin: 10px;
  padding: 10px;
  background: #e6e6e6;
  border-radius: 5px;
  border: none;
  font-size: 16px;
`
function App() {
  const [inputUser , setInputUser] = useState('')
  const [inputFotoUser, setInputFotoUser] = useState('')
  const [InputPostUser, setInputPostUser] = useState('')

  const [state, setState] = useState( 
    [{
      nomeUsuario: 'Joelita',
      fotoUsuario: 'https://picsum.photos/50/50',
      fotoPost: 'https://picsum.photos/150/100'
    },
    {
      nomeUsuario: 'Heitor',
      fotoUsuario: 'https://picsum.photos/100/150',
      fotoPost: 'https://picsum.photos/200/150'
    },
    {
      nomeUsuario: 'Denilson',
      fotoUsuario: 'https://picsum.photos/150/200',
      fotoPost: 'https://picsum.photos/250/200'
    }]
  );
  const changeInputUser = (event) => {
    setInputUser(event.target.value)
  }

  const changeInputFotoUser = (event) => {
    setInputFotoUser(event.target.value)
  }

  const changeInputPostUser = (event) => {
    setInputPostUser(event.target.value)
  }

  const adicionaNovaPostagem = () => {
    const novoPost = 
    {
      nomeUsuario: inputUser ,
      fotoUsuario: inputFotoUser,  
      fotoPost: InputPostUser
    };
    const novaPostagem = [novoPost,...state]

    setState(novaPostagem);

    setInputFotoUser('');
    setInputPostUser('');
    setInputUser('');
  }

  const listaPosts = state.map((post) =>{
    return(
      <Post
       fotoUsuario={post.fotoUsuario}
       nomeUsuario={post.nomeUsuario}
       fotoPost={post.fotoPost}
      /> 
    );  
  });

return(
  <MainContainer>
    <NovoPostDiv>
      <NovoPostInput 
        value={inputUser } 
        onChange={changeInputUser} 
        placeholder="Usuário">
      </NovoPostInput>
      <NovoPostInput 
        value={inputFotoUser} 
        onChange={changeInputFotoUser}
        placeholder="URL Foto Usuário">
      </NovoPostInput>
      <NovoPostInput 
        value={InputPostUser} 
        onChange={changeInputPostUser} 
        placeholder="URL Foto Postagem">
      </NovoPostInput>

      <NovoPostBotao onClick={adicionaNovaPostagem}>Publicar</NovoPostBotao>

    </NovoPostDiv>

    {listaPosts}

  </MainContainer>
)

}

export default App;
