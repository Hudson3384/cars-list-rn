import { createStaticNavigation, NavigationContainer, NavigationContext } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import Model from "../screens/Model"
import SignIn from "../screens/SignIn"

type RootStackParamList = {
  Home: undefined
  Model: {
    params: string
  },
  SignIn: undefined
}

const Stack = createNativeStackNavigator()

export interface PageProps<T extends keyof RootStackParamList> {
  navigation: NativeStackNavigationProp<RootStackParamList, T>
}

const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Model" component={Model} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainRoutes
