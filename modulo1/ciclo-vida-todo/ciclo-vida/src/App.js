import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './App.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

function App() {
  const [inputValue, setInputValue] = useState("");
  const [filtro, setFiltro] = useState("")
  const [tarefas, setTarefa] = useState([
    {
    id: Date.now(), 
    texto: 'Criando primeira tarefa',
    completa: false 
    },
    {
      id: Date.now(), 
      texto: 'Criando segunda tarefa',
      completa: true 
    }
  ]);

  const saveTarefa = (event) => {
    if(event) {
      event.PreventDefault();
    }
    if(tarefas.texto) {
      localStorage.setItem("tarefa", tarefas)
    }
  }
    
  useEffect(() => {
    console.log(tarefas)
    saveTarefa()
  }, [tarefas]);

  useEffect(() => {
    console.log(filtro)
    
  }, [filtro]);

  const onChangeInput = (event) => {
    setInputValue(event.target.value)
  }

  const criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(), 
      texto: inputValue,
      completa: false 
    }
    
    const novaListaTarefas = [...tarefas, novaTarefa]

    setTarefa(novaListaTarefas)
    
  }

 
  const selectTarefa = (Id) => {
    
  }

  const onChangeFilter = (event) => {
    setFiltro(event.target.value)
  }

 
  const listaFiltrada = tarefas.filter(tarefa => {
    switch (filtro) {
      case 'pendentes':
        return !tarefa.completa
      case 'completas':
        return tarefa.completa
      default:
        return false
    }
  });
    

  return (
    <div className="App">
      <h1>Lista de tarefas</h1>
      <InputsContainer>
        <input value={inputValue} onChange={onChangeInput}/>
        <button onClick={criaTarefa}>Adicionar</button>
      </InputsContainer>
      <br/>

      <InputsContainer>
        <label>Filtro</label>
        <select value={filtro} onChange={onChangeFilter}>
          <option value="">Nenhum</option>
          <option value="pendentes">Pendentes</option>
          <option value="completas">Completas</option>
        </select>
      </InputsContainer>
      <TarefaList>
        {listaFiltrada.map(tarefa => {
          return (
            <Tarefa
              completa={tarefa.completa}
              onClick={() => selectTarefa(tarefa.id)}
            >
              {tarefa.texto}
            </Tarefa>
          )
        })}
      </TarefaList>
    </div>
  )
}


export default App
