import "./styles/global.css"
import { UserProvider } from "./src/contexts/UserContext"
import MainRoutes from "./src/routes/MainRoute"

export default function App() {
  return (
    <UserProvider>
      <MainRoutes />
    </UserProvider>
  )
}

