import "./styles/global.css"
import { createStaticNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "./src/screens/Home"
import Model from "./src/screens/Model"
import SignIn from "./src/screens/SignIn"

const RootStack = createNativeStackNavigator({
  initialRouteName: "SignIn",
  screens: {
    Home: Home,
    Model: Model,
    SignIn: SignIn
  }
})

export default function App() {
  const Routes = createStaticNavigation(RootStack)
  return (
    <Routes />
  )
}

