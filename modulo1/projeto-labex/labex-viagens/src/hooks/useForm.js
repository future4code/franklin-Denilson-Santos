import { useState } from "react";


 export const useForm = (estadoInicial) => {
    const [ form, setForm] = useState(estadoInicial);

    const onChange = (event) => {
        const { name, value } = event.target
        setForm({...form, [name] : value})
    }

    return { form, onChange}
}