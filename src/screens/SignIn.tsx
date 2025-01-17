import { Control, Controller, FieldErrors } from "react-hook-form"
import { Button, Text, TextInput, TextInputProps } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { PageProps } from "../routes/MainRoute"
import { useSignIn } from "../hooks/useSignIn"

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
  rules: {}
}

const ErrorText = ({ message }: { message: string }) => {
  return <Text className="decoration-red-50">{message}</Text>
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
      {errors[name] && <ErrorText message={errors[name]?.message || 'This item is required'} />}
    </>
  )
}

const SignIn = ({ navigation }: PageProps<'SignIn'>) => {
  const { control, errors, isSubmitting, handleSubmit, handleLogin } = useSignIn(navigation)
  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <FormTextInput
        rules={{
          required: 'This item is required'
        }}
        name="user"
        placeholder="user"
        {...{ control, errors }}
      />
      <FormTextInput
        rules={{ required: 'This item is required' }}
        name="password"
        placeholder="password"
        {...{ control, errors }}
        inputProps={{ secureTextEntry: true }}
      />
      {errors?.root?.serverError.type === "400" && <ErrorText message={errors?.root?.serverError.message || ''} />}
      <Button title="Submit" disabled={isSubmitting} onPress={handleSubmit(handleLogin)} />
    </SafeAreaView>
  )
}

export default SignIn
