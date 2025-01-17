import { useEffect, useState } from "react"

const useFetch = <T,>(func: () => Promise<T[]>) => {
  const [data, setData] = useState<T[] | undefined>(undefined)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | undefined>(undefined)

  useEffect(() => {
    func()
      .then(e => { console.log('fetch', e); setData(e) })
      .catch(e => setError(e.response.data.message))
      .finally(() => setLoading(false))
  }, [])

  return { loading, data, error }
}

export default useFetch
