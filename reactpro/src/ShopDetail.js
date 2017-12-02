import React,{Component} from 'react';
import { Link } from 'react-router/lib';
import axios from "axios"

import { Layout, Menu, Breadcrumb,Tabs } from 'antd';
const { Header, Content, Footer } = Layout;
// 使用标签页
const TabPane = Tabs.TabPane;


class ShopDetail extends Component{
    state ={
        shopId:null
    }
    componentDidMount(){
        console.log(this.props.params.shopId)
        this.setState({
            shopId:this.props.params.shopId
        })

        // 通过商户id向后台请求商户相关信息(此处模拟)
        axios({
            url:" http://datainfo.duapp.com/shopdata/getGoods.php?callback=",
            method:"get",
            params:{
                classID:1
            }
        }).then(function(data){
            console.log(eval(data.data))
        })
    }
    
    goback=()=>{
        // this.props.history.goBack()
        // 怎么返回上一页？
        console.log("返回上一页")
    }
    callback=(key)=> {
      console.log(key);
    }
    render(){
        return (
            <div>
                <a onClick={this.goback} style={{color:"blue"}}>返回</a>
                商户id：{this.state.shopId}
                <Tabs onChange={this.callback} type="card">
                    <TabPane tab="审核信息" key="1">
                        审核信息，内容较多，应该添加子组件
                    </TabPane>
                    <TabPane tab="公司信息" key="2">公司信息</TabPane>
                    <TabPane tab="联系人信息" key="3">联系人信息</TabPane>
                    <TabPane tab="法人信息" key="4">法人信息</TabPane>
                    <TabPane tab="结算信息" key="5">结算信息</TabPane>
                    <TabPane tab="电子档资料" key="6">电子档案</TabPane>
                </Tabs>
            </div>
        );
    }
}


export default ShopDetail