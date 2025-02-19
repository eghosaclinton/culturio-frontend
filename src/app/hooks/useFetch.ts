import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import { Content, Data } from '../utils/types'

export function useFetch() {
    const [content, setContent] = useState<Content[]>([])
    const { isLoading, data, error } = useQuery({
        queryKey: ['content'],
        queryFn: fetchContent,
    })

    async function fetchContent() {
        const res = await fetch('http://localhost:3001/api/exhibit')
        const data: Data = await res.json()
        setContent(data.data)

        return data
    }

    return {
        content,
        isLoading,
        data,
        error,
    }
}
