import React,{Component} from 'react';
import { Link } from 'react-router/lib';


import { Menu, Dropdown, Button, Icon, message,Input,Select,Table } from 'antd';
const Option = Select.Option;

// function handleChange(value) {
//     console.log(`selected ${value}`);
// }
// function search(){
//     console.log("搜索")
// }

class DirectMerchantList extends Component{
    state = {
        // value: undefined,
        shopName:"shopname",
        status:"wsh",
        // 填入表格的数据
        columns : [{
            title: '商户ID',
            dataIndex: 'name',
            key: 'name',
            render: text => <a href="#">{text}</a>,
          }, {
            title: '商户名称',
            dataIndex: 'age',
            key: 'age',
          }, {
            title: '注册账号',
            dataIndex: 'address',
            key: 'address',
          },{
            title: '状态',
            dataIndex: 'status',
            key: 'status',
          }, {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Button type="primary">详情{record.name}</Button>
            ),
          }],
        //   填入表格的数据，从后台获取
          data : [{
            key: '1',
            name: '24387474',
            age: "在辉科技有限公司",
            address: 'dereekyang@163.com',
            status:"已审核"
          }, {
            key: '2',
            name: '24387474',
            age: "五二型",
            address: 'dereekyang@163.com',
            status:"审核中"
          }, {
            key: '3',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }, {
            key: '4',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }, {
            key: '5',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }, {
            key: '6',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }, {
            key: '7',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }, {
            key: '8',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }, {
            key: '9',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }, {
            key: '10',
            name: '24387474',
            age: "百度合计",
            address: 'dereekyang@163.com',
            status:"未审核"
          }]

    }
    shopNameChange = (value)=>{
        console.log(`selected ${value}`);
        this.setState({
            shopName:value
        })
    }
    statusChange =(value)=>{
        console.log(value)
        
        this.setState({
            status:value
        })
    }
    search = () =>{
        console.log("搜索")
        console.log(this.state.shopName,this.state.status)
        // 向后台请求数据

    }
    render(){
        return (
            <div>
                <div className="selectBox">
                <Select defaultValue="商户名称" size="large" style={{ width: 120 }} onChange={this.shopNameChange}>
                    <Option value="shopname">商户名称</Option>
                    <Option value="registId">注册账号</Option>
                    <Option value="shopId">商户ID</Option>
                </Select>
                <Input placeholder="请输入内容" size="large" style={{width:200,marginLeft:"15px",marginRight:"15px"}}/>
                <Select defaultValue="全部" size="large" style={{ width: 120 ,marginRight:"15px"}} onChange={this.statusChange}>
                    <Option value="wsh">未提审</Option>
                    <Option value="dsh">待审核</Option>
                    <Option value="shbtg">审核不通过</Option>
                    <Option value="shtg">审核通过</Option>
                </Select>
                <Button type="primary" size="large" onClick={this.search}>搜索</Button>
                </div>
                <Table style={{textAlign:"center",marginTop:"20px"}} bordered columns={this.state.columns} dataSource={this.state.data} pagination={{defaultPageSize:4}} />
          </div>
        );
    }
}


export default DirectMerchantList