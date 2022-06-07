import styled from "styled-components";

const BalaoDeMensagem = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 50vw;
    min-width: 8vw;
    margin-bottom: 1em;
    word-wrap: break-word;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    flex-wrap: nowrap;
    
    background-color: #DDF7C8;
    align-self: flex-end;
    margin-right: 1.5em;
    margin-left: 1.5em;
    margin-bottom: 30px;
`
const BalaoDeMensagem2 = styled.div`
   display: flex;
    flex-direction: column;
    max-width: 50vw;
    min-width: 8vw;
    margin-bottom: 1em;
    word-wrap: break-word;
    padding: 0.9em 0.8em;
    border-radius: 0.5em;
    
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    flex-direction: column;
    flex-wrap: nowrap;
    
    background-color: #ffffff;
    align-self: flex-start;
    margin-right: 1.5em;
    margin-left: 1.5em;
    margin-bottom: 30px;  
`
const Usuario = styled.small`
    color: #9AAC8C;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.2em;
`
const Conteudo = styled.p`
    font-weight: 450;
    line-height: 1.3;
    font-size: 18px;
    
`

export function Card(props) {

    if(props.usuario === 'Denilson') {
        return(
            <BalaoDeMensagem className='card'>
                <Conteudo>{props.conteudo}</Conteudo>
            </BalaoDeMensagem>
        )
    }else {
        return(
            <BalaoDeMensagem2 className='card'>
                <Conteudo>{props.conteudo}</Conteudo>
                <Usuario>{props.usuario}</Usuario>
            </BalaoDeMensagem2>
        )
    }


    
}