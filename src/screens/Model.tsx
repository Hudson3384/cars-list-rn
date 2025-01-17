import { FlatList, Text } from "react-native"
import useFetch from "../hooks/useFetch"
import { api } from "../helpers/api"

type Model = {
  codigo: string
  nome: string
}
const ModelCard = ({ brand }: { brand: any }) => {
  return (
    <Text>{brand.nome}</Text>
  )
}

const Model = ({ code }: { code: string }) => {
  const { data } = useFetch(() => api.get(`carros/marcas/${code}/modelos`)
    .then(e => e.data.modelos)
  )
  console.log('model', data, code)

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <ModelCard brand={item} />}
    />
  )
}

export default Model
