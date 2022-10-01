import { useEffect } from 'react'
import { useState } from 'react'
import axios from "axios"

export const useRequestData = (url) => {
    const [data, setData] = useState(undefined)
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [page, setPage] = useState(undefined)

    const getData = () => {
        setIsLoading(true)
        axios.get(url)
            .then((response) => {
                setIsLoading(false)
                setData(response.data.results)
                setPage(response.data.page)
            })
            .catch((error) => {
                setIsLoading(false)
                setError(error);
            })
    }

    useEffect(getData, [url])
    return ([data, error, isLoading, page])
}