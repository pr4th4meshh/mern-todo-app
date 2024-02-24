import { useSelector } from "react-redux"
import { Link, Navigate } from "react-router-dom"

const Home = () => {
  const { currentUser } = useSelector((state: unknown) => state.user)
  console.log(currentUser)
  return (
    <div>
      Home
      <h1>{currentUser?.username}</h1>
      <Link to="/signin">
        {currentUser ? (
          <img
            src={currentUser.avatar}
            className="h-7 w-7 object-cover rounded-full"
            alt="profile"
          />
        ) : (
          <li className="hidden sm:inline text-slate-700 hover:underline">
            Signin
          </li>
        )}
      </Link>
    </div>
  )
}

export default Home
