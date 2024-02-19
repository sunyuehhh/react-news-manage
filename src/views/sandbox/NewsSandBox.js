import React,{useState} from 'react'
import SideMenu from '../../components/sandbox/SideMenu'
import TopHeader from '../../components/sandbox/TopHeader'
import { Redirect, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './home/Home'
import UserList from './user-manage/UserList'
import RoleList from './right-manage/RoleList'
import RightList from './right-manage/RightList'
import Nopermission from './nopermission/Nopermission'
import { Layout, theme } from 'antd';
const { Content } = Layout;

export default function NewsSandBox() {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout style={{height:'100%',width:'100%'}}>
      <SideMenu collapsed={collapsed}></SideMenu>
      <Layout>
      <TopHeader collapsed={collapsed} setCollapsed={()=>{setCollapsed(!collapsed)}}></TopHeader>
      <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
         <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/user-manage/list" component={UserList}></Route>
        <Route path="/right-manage/role/list" component={RoleList}></Route>
        <Route path="/right-manage/right/list" component={RightList}></Route>

        <Redirect from="/" to="/home" exact></Redirect>
        <Route path="*" component={Nopermission}></Route>
      </Switch>
        </Content>
      
      </Layout>
    </Layout>
  )
}
