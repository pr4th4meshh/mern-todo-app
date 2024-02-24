import { Button, Form, Input, Image } from "antd"
import ButtonComponent from "../components/ButtonComponent"
import viteSvg from "/vite.svg"
import { useNavigate } from "react-router-dom"
import { useState } from "react"

const SignUp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | boolean | null>(false)
  const navigate = useNavigate()

  console.log(error)
  console.log(loading)
  const onFinish = async (values: { username: string; email: string; password: string }) => {
    try {
      setLoading(true)
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      })
      const data = await res.json()
      console.log(data)
      if (data.success === false) {
        setLoading(false)
        setError(data.message)
        return
      }
      setLoading(false)
      setError(null)
      navigate("/signin")
      console.log(values)
    } catch (error) {
      console.log(error)
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
            label="Username"
            name="username"
            rules={[{ message: "Please input your username!", required: true }]}
          >
            <Input
              placeholder="Enter Username"
              size="large"
              className="w-full rounded-sm !focus:bg-white"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ message: "Please input your username!", required: true }]}
          >
            <Input
              placeholder="Enter Username"
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
        </Form>
      </div>
    </div>
  )
}

export default SignUp
