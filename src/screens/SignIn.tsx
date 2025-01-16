import { Control, Controller, ControllerProps, FieldErrors, InputValidationRules, useForm } from "react-hook-form"
import { Button, Text, TextInput, TextInputProps, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

type FormProps = {
  email: string
  password: string
}

interface FormTextInputProps {
  control: Control<FormProps>
  name: 'email' | 'password'
  errors: Partial<FieldErrors<FormProps>>
  placeholder: string
  inputProps?: TextInputProps
}


const useSignIn = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormProps>({
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const handleLogin = (data: any) => {
    console.log('login', data)
  }


  return { control, errors, handleSubmit, handleLogin }
}

const FormTextInput = ({
  control,
  name,
  errors,
  placeholder,
  inputProps,
  ...props
}: FormTextInputProps) => {
  return (
    <>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            className="p-10"
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...inputProps}
          />
        )}
        {...{ name, control, ...props }}
      />
      {errors[name] && <Text>{errors[name]?.message || 'This item is required'}</Text>}
    </>
  )
}

const SignIn = () => {
  const { control, errors, handleSubmit, handleLogin } = useSignIn()
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <FormTextInput
        name="email"
        placeholder="email"
        {...{ control, errors }}
      />
      <FormTextInput
        rules={{ required: 'This item is required' }}
        name="password"
        placeholder="password"
        {...{ control, errors }}
        inputProps={{ secureTextEntry: true }}
      />
      <Button title="Submit" onPress={handleSubmit(handleLogin)} />
    </SafeAreaView>
  )
}

export default SignIn
