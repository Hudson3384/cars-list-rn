import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack"
import Home from "../screens/Home"
import SignIn from "../screens/SignIn"
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

type RootStackParamList = {
  Home: undefined
  SignIn: undefined
}

export interface PageProps<T extends keyof RootStackParamList> {
  navigation: NativeStackNavigationProp<RootStackParamList, T>
}

const Stack = createNativeStackNavigator()

const logoutButtonStyle = "bg-blue-400 p-4 rounded-md"
const logoutTextStyle = "font-semibold text-white"

const LogoutButton = (props: TouchableOpacityProps) => {
  return (
    <TouchableOpacity className={logoutButtonStyle} {...props}>
      <Text className={logoutTextStyle}>Logout</Text>
    </TouchableOpacity>
  )
}
const MainRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignIn"  >
        <Stack.Screen name="Home" component={Home}
          options={({ navigation }) => ({
            headerBackVisible: false,
            goBack: null,
            headerLeft: null,
            title: "Car Brands",
            headerRight: () => (
              <LogoutButton
                onPress={() => {
                  navigation.navigate('SignIn')
                  AsyncStorage.clear()
                }}
              />
            ),
          })}
        />
        <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}

export default MainRoutes
