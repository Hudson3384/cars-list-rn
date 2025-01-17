import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react"
import { User } from "../types/User"

type UserContextType = {
  data: User | undefined
  setData: Dispatch<SetStateAction<User | undefined>>
}

type VerifiedUserContextType = {
  data: User
  setData: Dispatch<SetStateAction<User>>
}

export const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: PropsWithChildren) => {
  const [data, setData] = useState<User | undefined>(undefined)
  return (
    <UserContext.Provider value={{ data, setData }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = (): VerifiedUserContextType => {
  const context = useContext(UserContext)
  if (!context) {
    return { data: undefined, setData: undefined }
  }
  return context as VerifiedUserContextType
}
