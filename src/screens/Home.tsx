import { FlatList, Text, TouchableOpacity, View } from "react-native"
import useFetch from '../hooks/useFetch'
import Model from "./Model"
import { useState } from "react"
import { api } from "../helpers/api"
import Modal from "../components/Modal"

type CarBrands = {
  codigo: string
  nome: string
}

interface BrandCardProps {
  brand: CarBrands,
}

const viewStyle = "flex-row text-center justify-between p-4 border-b border-gray-300"
const detailsButtonStyle = "bg-blue-400 p-2 rounded-md"
const detailsButtonTextStyle = "text-white text-center"


const BrandCard = ({ brand }: BrandCardProps) => {
  const [visible, setVisible] = useState(false)
  const onPress = () => {
    setVisible(true)
  }

  const onClose = () => setVisible(false)

  return (
    <View className={viewStyle}>
      <Text>{brand.nome}</Text>
      <TouchableOpacity className={detailsButtonStyle} onPress={onPress} >
        <Text className={detailsButtonTextStyle}>See models</Text>
      </TouchableOpacity>
      <Modal visible={visible} brandName={brand.nome} onClose={onClose}>
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
