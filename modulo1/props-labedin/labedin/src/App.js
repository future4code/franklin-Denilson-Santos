import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://ca.slack-edge.com/TLAVDH7C2-U03ECSFB4AH-11efb8cb0550-512" 
          nome="Denilson Santos" 
          descricao="Oi, eu sou o Denilson. sou alguém simples, organizado, dedicado a sua família e também a seus objetivos, focado em conseguir alcansar seus objetivos, independentimente do tempo que leve , mas com a certeza de que vai conseguir."
        />

        <CardPequeno
          imagem="https://th.bing.com/th/id/R.7a864f07681f187fb572468bfc949977?rik=3fUik6Pc6xTrHQ&pid=ImgRaw&r=0"
          GitHub="https://github.com/DenilsonNovais/"
        />

        <CardPequeno
          imagem="https://www.qixiaodong.com/assets/img/icon-linkedin.png"
          linkedIn="https://www.linkedin.com/in/denilson-novais-dos-santos/"
        />
        
        <ImagemButton 
          imagem="https://tse1.mm.bing.net/th/id/OIP.vsjBtL27XGd24c7CBEtb8wHaHa?pid=ImgDet&rs=1" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://th.bing.com/th/id/R.0e8e4de3fd3da6ef91c141f3ab32f912?rik=ZEwJbTPlkYhc5Q&pid=ImgRaw&r=0" 
          nome="Grupo Boticário" 
          descricao="Criar oportunidades para a beleza transformar a vida de cada um e assim transformar o mundo ao nosso redor.!" 
        />
        
        <CardGrande 
          imagem="https://tse3.mm.bing.net/th/id/OIP.fUb1dtHBgj_DA7S9Cgbn8QHaHa?pid=ImgDet&rs=1" 
          nome="Labenu" 
          descricao="Estudando programação FullStack na prática, com projetos e exercícios incriveis!" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
