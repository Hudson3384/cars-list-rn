import { Control, Controller, FieldErrors } from "react-hook-form"
import { Text, Image, TextInput, TextInputProps, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { PageProps } from "../routes/MainRoute"
import { useSignIn } from "../hooks/useSignIn"
import Button from "../components/Button"

type FormProps = {
  user: string
  password: string
}

interface FormTextInputProps {
  control: Control<FormProps>
  name: 'user' | 'password'
  errors: Partial<FieldErrors<FormProps>>
  placeholder: string
  inputProps?: TextInputProps
}

const viewStyle = "flex-1 bg-white justify-center items-center px-6"
const titleStyle = "w-full font-black text-blue-900 text-2xl text-center p-4"
const inputStyle = "w-full bg-blue-100 text-black rounded-md mb-4 px-4"

const ErrorText = ({ message }: { message: string }) => {
  return <Text className="text-red-500">{message}</Text>
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
            className={inputStyle}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            {...inputProps}
          />
        )}
        rules={{ required: 'This item is required' }}
        {...{ name, control, ...props }}
      />
      {errors[name] && <ErrorText message={errors[name]?.message || 'This item is required'} />}
    </>
  )
}

const SignIn = ({ navigation }: PageProps<'SignIn'>) => {
  const { control, errors, isSubmitting, handleSubmit, handleLogin } = useSignIn(navigation)
  return (
    <SafeAreaView className={viewStyle}>
      <Text className={titleStyle}>Car's List App</Text>
      <Image source={require('../../assets/car.png')} style={{ width: 192, height: 108 }} />
      <FormTextInput
        name="user"
        placeholder="Insert your username"
        {...{ control, errors }}
      />
      <FormTextInput
        name="password"
        placeholder="Insert the password"
        {...{ control, errors }}
        inputProps={{ secureTextEntry: true }}
      />
      {errors?.root?.serverError.type === "400" &&
        <ErrorText message={errors?.root?.serverError.message || ''} />}
      <Button
        disabled={isSubmitting}
        onPress={handleSubmit(handleLogin)}
      >
        Sign In
      </Button>
    </SafeAreaView>
  )
}

export default SignIn
