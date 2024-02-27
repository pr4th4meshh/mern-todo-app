import { Button } from "antd"
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signInSuccess } from "../redux/slices/userSlice"

const OAuth = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleGoogleClick = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)

            const result  = await signInWithPopup(auth, provider)

            const res = await fetch('/api/auth/google', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({name: result.user.displayName, email: result.user.email, photo: result.user.photoURL})
            })
            const data = await res.json()
            console.log(data)
            dispatch(signInSuccess(data))
            navigate("/")
        } catch (error) {
            console.log('Could not signin with google', error)
        }
    }
  return (
    <Button size="large" onClick={handleGoogleClick} className="bg-red-500 text-white rounded-lg uppercase hover:opacity-95 w-full">
      Continue with Google
    </Button>
  )
}

export default OAuth
