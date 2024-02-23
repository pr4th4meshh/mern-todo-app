import { Button } from 'antd'

const ButtonComponent = ({onClick, className, icon, name}: any) => {
  return (
    <Button onClick={onClick} className={className} type='primary' icon={icon}>{name}</Button>
  )
}

export default ButtonComponent