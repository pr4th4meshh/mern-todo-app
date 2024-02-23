import { Button, Form, Input, Image } from "antd"
import ButtonComponent from "../components/ButtonComponent"
import viteSvg from '../../public/vite.svg'

const onFinish = (values: unknown) => {
  console.log("Success:", values)
}

// const onFinishFailed = (errorInfo: unknown) => {
//   console.log("Failed:", errorInfo)
// }

// type FieldType = {
//   username?: string
//   password?: string
//   remember?: string
// }

const SignUp = () => {
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
          {/* {errMsg && (
            <Form.Item>
              <Tag
                className="flex h-10 w-full items-center justify-center"
                color="red"
              >
                <span>{errMsg}</span>
              </Tag>
            </Form.Item>
          )} */}

          <Form.Item>
            <ButtonComponent
            //   loading={isLoading}
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
