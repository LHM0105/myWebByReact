import React,{Component} from 'react';
import { Link } from 'react-router/lib';


import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Main extends Component{
    render(){
        return (
            <div>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                    >
                        <Menu.Item key="1"><Link to="/aboutMe">aboutMe </Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/demo">demo </Link></Menu.Item>
                        <Menu.Item key="3"><Link to="/blog">blog </Link></Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                        {this.props.children}
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
            </Layout>
          </div>
            // <div>
            //     <h3>Main</h3>
            //     <Link to="/aboutMe">aboutMe </Link>
            //     <Link to="/demo">demo </Link>
            //     <Link to="/blog">blog </Link>
            //     {this.props.children}
            // </div>
        );
    }
}


export default Main