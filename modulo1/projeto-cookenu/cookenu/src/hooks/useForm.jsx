import { useState } from 'react'

const useForm = (estadoInicial) => {
  const [form, setForm] = useState(estadoInicial)

  const onChangeInput = (event) => {
    const {value, name} = event.target
    setForm({...form, [name]: value})
  }

  const clear = () => {
    setForm(estadoInicial)
  }

  return [form, onChangeInput, clear]
}

export  {useForm}