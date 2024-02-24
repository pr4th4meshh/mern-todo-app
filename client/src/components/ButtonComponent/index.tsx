import { Button } from "antd"

const ButtonComponent = ({ onClick, className, icon, name, htmlType }: any) => {
  return (
    <Button onClick={onClick} htmlType={htmlType} className={className} type="primary" size="large">
      {name}
    </Button>
  )
}

export default ButtonComponent
