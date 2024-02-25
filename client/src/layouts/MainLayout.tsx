import React, { useState } from "react"
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  ProfileOutlined,
  BookOutlined
} from "@ant-design/icons"
import { Button, Layout, Menu, MenuProps, theme } from "antd"
import { Outlet, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

const { Header, Content, Footer, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    children,
    icon,
    key,
    label,
  } as MenuItem
}

const items = [
  getItem('Todos', '/', <BookOutlined/>),
  getItem('Profile', '/profile', <ProfileOutlined/>),
]

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  
  const {currentUser} = useSelector((state: unknown) => state.user)
  console.log(currentUser)

  const navigate = useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken()
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        breakpoint="lg"
        trigger={null}
      >
        <div className="demo-logo-vertical text-lg text-white p-3 text-center">MERN TODOS APP</div>
        <Menu
          theme="dark"
          mode="inline"
          items={items}
          onClick={({ keyPath }) => navigate(`${keyPath}`)}
          defaultSelectedKeys={[window.location.pathname]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
         <div className="flex flex-row items-center">
         <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
          <h1 className="text-lg font-semibold">Hello, {currentUser?.username}</h1>
         </div>
        </Header>
        <Content style={{ margin: "12px 12px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Mern-Todos-App {new Date().getFullYear()} Created by @pr4th4meshh
        </Footer>
      </Layout>
    </Layout>
  )
}

export default MainLayout
