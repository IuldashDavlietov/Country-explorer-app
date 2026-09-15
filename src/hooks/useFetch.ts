import { useEffect, useState } from "react";
import { countriesApi } from "../api/countriesApi";

export const useFetch = <T>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)


    useEffect(() => {
        const fetchData = async () => {
            try {
                setError(null)
                setLoading(true)
                const response = await countriesApi.get<T>(url)
                setData(response.data)
            } catch (error) {
                if (error instanceof Error) {
                    setError(error.message)
                } else { setError('An unexpected error occurred') }
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [url])
    return { data, loading, error }
}