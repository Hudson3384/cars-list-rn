import { ReactNode } from "react"
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native"

const buttonStyle = "w-full bg-blue-400 p-4 rounded-md"
const contentButtonStyle = "text-center text-white font-semibold"

interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
}

const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <TouchableOpacity
      className={buttonStyle}
      {...props} >
      <Text className={contentButtonStyle}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button
