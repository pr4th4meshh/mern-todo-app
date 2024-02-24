import { Form, Input, Image } from "antd"
import ButtonComponent from "../components/ButtonComponent"
import viteSvg from '../../public/vite.svg'
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {
  signInStart,
  signInFailure,
  signInSuccess,
} from "../redux/slices/userSlice"
import { ChangeEvent } from "react"

interface User {
  _id: string
  username: string
  email: string
  // other user properties
}

interface UserState {
  currentUser: User
  loading: boolean
  error: string
  // other user-related state properties
}

interface RootState {
  user: UserState
}

const SignIn = () => {
  // const [formData, setFormData] = useState({})
// const { loading, error } = useSelector((state: RootState) => state.user)
const navigate = useNavigate()
const dispatch = useDispatch()

const onFinish = async (values: { email: string; password: string }) => {
  // e.preventDefault()
  try {
    dispatch(signInStart())
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
    console.log(values)
    const data = await res.json()
    console.log(data)
    if (data.success === false) {
      dispatch(signInFailure(data.message))
      return
    }
    dispatch(signInSuccess(data))
    navigate("/")
  } catch (error) {
    let errorMessage = "Failed to do something exceptional";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    console.log(errorMessage);
    dispatch(signInFailure(errorMessage))
  }
}
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-white">
      <div className="flex flex-col items-center justify-center ">
        <Image
          className="mb-5"
          style={{ height: 100 }}
          preview={false}
          src={viteSvg}
          alt="Logo"
        />

        <Form
          layout="vertical"
          name="basic"
          className="sm:w-[300px] md:w-[400px] border border-gray-300 p-10 rounded-lg "
          labelCol={{ span: 12 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="on"
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ message: "Please input your email!", required: true }]}
          >
            <Input
              placeholder="Enter Email"
              size="large"
              className="w-full rounded-sm !focus:bg-white"
            />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ message: "Please input your password!", required: true }]}
          >
            <Input.Password
              placeholder="Enter Password"
              size="large"
              className="password w-full rounded-sm !focus:bg-white"
            />
          </Form.Item>

          <Form.Item>
            <ButtonComponent
              htmlType="submit"
              className="rounded-sm bg-slate-800 w-full uppercase"
              name="Sign Up"
            />
          </Form.Item>
          <div>
          <h1 className="text-lg">Don't have an account? <Link className="text-blue-500" to="/signup">Sign In</Link></h1>
        </div>
        </Form>
      </div>
    </div>
  )
}

export default SignIn