import { useState, useEffect } from "react";
import axios from 'axios';


export const UseRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const getData = () => {
        setIsLoading(true)
        axios.get(url)
            .then((response) => {
                setIsLoading(false)
                setData(response.data.trips)
            })
            .catch((err) => {
                setIsLoading(false)
                setError(err.data)
            })
    }


    useEffect(getData, [url])
    return([ data, error, isLoading])
}