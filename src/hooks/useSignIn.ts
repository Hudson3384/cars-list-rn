import { useForm } from "react-hook-form"
import { useUser } from "../contexts/UserContext"
import { PageProps } from "../routes/MainRoute"
import { User } from "../types/User"
import axios from "axios"
import AsyncStorage from "@react-native-async-storage/async-storage"

const LOGIN_URL = process.env.EXPO_PUBLIC_LOGIN_URL

type RequestSuccess = {
  error: boolean
  user: User
}

type FormProps = {
  user: string
  password: string
}

export const useSignIn = (navigation: PageProps<'SignIn'>['navigation']) => {
  const { setData } = useUser()
  const { control, setError, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormProps>({
    defaultValues: {
      user: "",
      password: ""
    }
  })

  const handleLogin = async (data: FormProps) => {
    await axios.post<RequestSuccess>(LOGIN_URL, data)
      .then(e => {
        setData(e.data.user)
        AsyncStorage.setItem('user', JSON.stringify(e.data.user))
        navigation.replace('Home')
      })
      .catch(e => {
        setError('root.serverError', { type: "400", message: e.response.data.message })
      })
  }
  return { control, errors, handleSubmit, handleLogin, isSubmitting }
}
