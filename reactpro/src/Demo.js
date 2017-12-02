import React,{Component} from 'react';
import { Link } from 'react-router/lib';

import { Layout, Menu, Icon,Breadcrumb  } from 'antd';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;
class Demo extends Component{
    state = {
        collapsed: false,
    };
    toggle = () => {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
    render(){
        return (
            <div>
             <Layout>
             <Sider
               trigger={null}
               collapsible
               collapsed={this.state.collapsed}
             >
               <div className="logo"></div>
               <Menu theme="dark" mode="inline">
                 <SubMenu
                  key="sub1"
                  title={<span><Icon type="shop" /><span>商户管理</span></span>}
                >
                  <Menu.Item key="1"><Link to="/merchantManage/directMerchantList">直销商户列表</Link></Menu.Item>
                  <Menu.Item key="2"><Link to="/merchantManage/distributionMerchantList">分销商户列表</Link></Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub2"
                  title={<span><Icon type="team" /><span>代理商</span></span>}
                >
                  <Menu.Item key="3">代理商列表</Menu.Item>
                  <Menu.Item key="4">代理商结算</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub3"
                  title={<span><Icon type="file-text" /><span>订单管理</span></span>}
                >
                  <Menu.Item key="5">支付订单管理</Menu.Item>
                  <Menu.Item key="6">代付订单列表</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub4"
                  title={<span><Icon type="line-chart" /><span>统计</span></span>}
                >
                  <Menu.Item key="7">汇总统计</Menu.Item>
                  <Menu.Item key="8">商户支付统计</Menu.Item>
                  <Menu.Item key="9">代理支付统计</Menu.Item>
                  <Menu.Item key="10">商户代付统计</Menu.Item>
                  <Menu.Item key="11">代理代付统计</Menu.Item>
                </SubMenu>
                <SubMenu
                  key="sub5"
                  title={<span><Icon type="setting" /><span>设置</span></span>}
                >
                  <Menu.Item key="12">系统工具</Menu.Item>
                </SubMenu>
               </Menu>
             </Sider>
             <Layout>
               <Header style={{ background: '#fff', padding: 0 }}>
                 <Icon
                   className="trigger"
                   type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                   onClick={this.toggle}
                 />
                 <h3 style={{textAlign:"center",float:"right",width:"95%",fontWeight:"600"}}>模拟后台管理系统页面</h3>
                
               </Header>
               <Content style={{ margin: '0px 16px', padding: 24, minHeight: 280 }}>
                <Breadcrumb style={{ margin: '10px 0' }}>
                  <Breadcrumb.Item>Home</Breadcrumb.Item>
                  <Breadcrumb.Item>List</Breadcrumb.Item>
                  <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
                    {this.props.children}
                </div>
               </Content>
             </Layout>
           </Layout>
      </div>
        );
    }
}


export default Demo