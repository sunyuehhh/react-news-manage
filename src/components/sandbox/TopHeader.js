import React from 'react';
import {
  DownOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Layout, Button, theme, Dropdown } from 'antd';
const { Header } = Layout;

const items = [
  {
    key: '1',
    label: '超级管理员',
  },
  {
    key: '2',
    label: '退出',
  }
];

export default function TopHeader(props) {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Header
      style={{
        padding: '0 20px 0 0',
        background: colorBgContainer,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}
    >
      <Button
        type="text"
        icon={props.collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => props.setCollapsed()}
        style={{
          fontSize: '16px',
          width: 64,
          height: 64,
        }}
      />
      <div>
        <span>欢迎admin回来</span>
        <Dropdown
          menu={{
            items,
          }}
        >
          <span>
            Hover me
            <DownOutlined />
          </span>
        </Dropdown>
      </div>
    </Header>
  )
}
