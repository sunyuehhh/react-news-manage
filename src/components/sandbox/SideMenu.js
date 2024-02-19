import React, { useEffect, useState } from 'react';
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom'
import axios from 'axios';
import './index.scss'
const { Sider, } = Layout;
function SideMenu(props) {
  const [menu, setMenu] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3000/rights?_embed=children").then((res) => {
      let data = res.data
      const loop = (tree) => {
        for (let i = 0; i < tree.length; i++) {
          let item = tree[i]
          if (item?.children?.length === 0) {
            delete item.children
          }
          if (item?.pagepermisson !== 1) {
            tree.splice(i, 1)
            i--
          }

        }

      }

      loop(data)
      setMenu(res.data)
    })
  }, [])

  const selectKeys=[props.location.pathname]
  const openKeys=["/"+props.location.pathname.split("/")[1]]
  return (
    <Sider trigger={null} collapsible collapsed={props.collapsed} className="sider-left">
      <div className="demo-logo-vertical">全球新闻发布系统</div>
      <div className="sider-menu-content">
      <Menu
        selectedKeys={selectKeys}
        defaultOpenKeys={openKeys}
        mode="inline"
        theme="dark"
        items={menu}
        onClick={(item) => {
          props.history.push(item.key)
        }}
      />
      </div>
    </Sider>
  )
}


export default withRouter(SideMenu)