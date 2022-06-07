import styled from "styled-components";
import React, {useEffect, useState} from "react";

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 30px;
    margin-left: 10px;
    border: 3px white solid;
`
const CabecarioContainer = styled.div`
    background-color: #023059;
    display: flex;
    align-items: center;

    height: 8vh;
    width: 800px;
`
const Nome = styled.strong`
    margin-left: 10px;
    color: #ffff;
`

export function Cabecario () {
    const [user, setUser] = useState({name: '', avatar: '' })


    useEffect(() => {
        fetch('https://api.github.com/users/DenilsonNovais')
        .then(response => response.json())
        .then(data => {
            setUser({
            name: data.name,
            avatar: data.avatar_url,
            })
        })
    }, []);


    return (
        <header>
            <CabecarioContainer>
                <Avatar src={user.avatar} alt='Foto de Perfil' />
                <Nome>{user.name}</Nome>
            </CabecarioContainer>
        </header>
    )
}
    