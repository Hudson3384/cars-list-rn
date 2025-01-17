import { FlatList, Text, View } from "react-native"
import useFetch from "../hooks/useFetch"
import { api } from "../helpers/api"

type Model = {
  codigo: string
  nome: string
}

const cardStyle = "text-black w-full justify-between p-4 border-b border-gray-300 flex-row"

const ModelCard = ({ brand }: { brand: any }) => {
  return (
    <View className={cardStyle}>
      <Text>{brand.nome}</Text>
      <Text>#{brand.codigo}</Text>
    </View>
  )
}

const Model = ({ code }: { code: string }) => {
  const { data } = useFetch(() => api.get(`carros/marcas/${code}/modelos`)
    .then(e => e.data.modelos)
  )

  return (
    <FlatList
      className="w-full"
      data={data}
      renderItem={({ item }) => <ModelCard brand={item} />}
    />
  )
}

export default Model
