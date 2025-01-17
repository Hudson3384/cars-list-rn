import { Button, FlatList, Modal, Text, View } from "react-native"
import useFetch from '../hooks/useFetch'
import Model from "./Model"
import { useState } from "react"
import { api } from "../helpers/api"

type CarBrands = {
  codigo: string
  nome: string
}

interface BrandCardProps {
  brand: CarBrands,
}

const BrandCard = ({ brand }: BrandCardProps) => {
  const [visible, setVisible] = useState(false)
  const onPress = () => {
    setVisible(true)
  }
  return (
    <View>
      <Text>{brand.nome}</Text>
      <Button title="See models" onPress={onPress} />
      <Modal visible={visible}>
        <Model code={brand.codigo} />
      </Modal>
    </View>
  )
}
const Home = () => {
  const { data } = useFetch<CarBrands>(() => api.get('carros/marcas')
    .then(e => e.data))
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <BrandCard brand={item} />}
    />
  )
}

export default Home
