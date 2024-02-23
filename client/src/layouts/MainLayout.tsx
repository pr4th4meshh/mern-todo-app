import { Layout } from "antd"
import { Content } from "antd/es/layout/layout"
import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
        <Content>
            <div>
                <Outlet />
            </div>
        </Content>
    </Layout>
  )
}

export default MainLayout