import { View, ModalProps, Modal as RNModal, Text, TouchableOpacity, SafeAreaView } from 'react-native'

interface CustomModalProps extends ModalProps {
  onClose: () => void,
  brandName: string
}
const Modal = ({ children, onClose, brandName, ...props }: CustomModalProps) => {
  return <RNModal
    animationType="slide"
    {...props}
  >
    <SafeAreaView className="flex-1 items-center justify-center bg-white flex-col">
      <View className="h-18 w-full p-5 flex-row justify-between border-b-2 border-gray-200">
        <Text className="text-lg font-semibold mt-2">Car Models - {brandName}</Text>
        <TouchableOpacity
          className="px-4 py-2 bg-red-500 rounded-lg text-center items-center"
          onPress={onClose}
        >
          <Text className="text-white text-lg text-center">Go Back</Text>
        </TouchableOpacity>
      </View>
      {children}
    </SafeAreaView>
  </RNModal>
}

export default Modal
