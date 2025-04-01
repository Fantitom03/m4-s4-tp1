import { useState, useEffect } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'

export const useFetchCharacters = (searchTerm) => {
  
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      if (!searchTerm) {
        setData([])
        setHasMore(true)
        setPage(1)
        return
      }
      
      setLoading(true)
      setError(null)

      try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${searchTerm}&page=${page}`)
        
        if (response.data.results.length === 0) {
          throw new Error('No characters found')
        }

        setData(prev => page === 1 ? response.data.results : [...prev, ...response.data.results])
        setHasMore(!!response.data.info.next)
        toast.success(`Se encontraron ${response.data.results.length} entidades nuevas!`)

      } catch (err) {

        if (err.response?.status === 404 || err.message === 'No characters found') {
          setError(new Error('No characters found'))
          setData([])
          
          if (page === 1) toast.error('No se encontraron entidades en esta dimensión')

        } else {
          setError(err)
          toast.error('La conexión multiversal falló')
        }

      } finally {
        setLoading(false)
      }
    }

    const debounce = setTimeout(fetchData, 500)
    return () => clearTimeout(debounce)
  }, [searchTerm, page])

  const loadMore = () => {
    if (hasMore) {
      setPage(prev => prev + 1)
    }
  }

  return { data, loading, error, hasMore, loadMore }
}
