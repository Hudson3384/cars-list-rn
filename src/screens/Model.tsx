import { useState } from "react"
import { Text } from "react-native"
const useQuery = () => {
  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(undefined)
  return {
  }
}

const Model = () => {
  const { data, error, loading } = useQuery()
  return (
    <Text>model</Text>
  )
}

export default Model
