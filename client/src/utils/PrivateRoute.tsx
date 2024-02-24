import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

interface User {
  _id: string
  username: string
  email: string
  // other user properties
}

interface UserState {
  currentUser: User
  // other user-related state properties
}

interface RootState {
  user: UserState
}

const PrivateRoute = () => {
  const { currentUser } = useSelector((state: RootState) => state.user)
  return currentUser ? <Outlet /> : <Navigate to="/signin" />
}

export default PrivateRoute
