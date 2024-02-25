import { Form, Image, Input } from "antd"
import { useSelector } from "react-redux"
import ButtonComponent from "../components/ButtonComponent"

interface User {
  _id: string
  username: string
  email: string
  avatar: string
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

const Profile = () => {
  const { currentUser } = useSelector((state: RootState) => state.user)
  return (
    <div className="p-3 flex max-w-lg mx-auto">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-semibold text-center my-3">Profile</h1>
        <Form
          layout="vertical"
          name="basic"
          className="sm:w-[300px] md:w-[500px] border border-gray-300 p-10 rounded-lg"
          labelCol={{ span: 12 }}
          initialValues={{ remember: true }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
        >
          <Form.Item name="avatar">
            <div className="flex items-center justify-center">
              <Image
                src={currentUser?.avatar}
                width={100}
                height={100}
                className="rounded-full"
              />
            </div>
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ message: "Please input your username!", required: true }]}
          >
            <Input
              placeholder="Enter Username"
              size="large"
              className="w-full rounded-sm !focus:bg-white"
              defaultValue={currentUser?.username}
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ message: "Please input your email!", required: true }]}
          >
            <Input
              placeholder="Enter Email"
              size="large"
              className="w-full rounded-sm !focus:bg-white"
              defaultValue={currentUser?.email}
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
              name="Update"
            />
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Profile
