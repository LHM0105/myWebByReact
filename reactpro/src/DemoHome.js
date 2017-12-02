import React,{Component} from 'react';
import { Link } from 'react-router/lib';

import PineChart from './pineChart'
import PieChart from './pieChart'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class DemoHome extends Component{
    state={
        pieData1:[
            {value:335, name:'直接访问1'},
            {value:310, name:'邮件营销1'},
            {value:234, name:'联盟广告1'},
            {value:135, name:'视频广告1'},
            {value:1548, name:'搜索引擎1'}
        ],
        pieData2:[
            {value:335, name:'直接访问'},
            {value:310, name:'邮件营销'},
            {value:234, name:'联盟广告'},
            {value:135, name:'视频广告'},
            {value:1548, name:'搜索引擎'}
        ]
    }
    // shouldComponentUpdate(){
    //     // this.setState({
    //     //     pieData1:[
    //     //         {value:335, name:'直接访问11111111'},
    //     //         {value:310, name:'邮件营销1'},
    //     //         {value:234, name:'联盟广告1'},
    //     //         {value:135, name:'视频广告1'},
    //     //         {value:1548, name:'搜索引擎1'}
    //     //     ]
    //     // });
    //     // console.log(this.state.pieData1)
    //     // console.log(this.state.pieData2)
    //     return true;
    // }
    // componentDidUpdate(){
    //     this.setState({
    //         pieData1:[
    //             {value:335, name:'直接访问11111111'},
    //             {value:310, name:'邮件营销1'},
    //             {value:234, name:'联盟广告1'},
    //             {value:135, name:'视频广告1'},
    //             {value:1548, name:'搜索引擎1'}
    //         ]
    //     });
    //     console.log(this.state.pieData1)
    //     console.log(this.state.pieData2)
    // }

    render(){
        return (
            <div>
                <div style={{overflow:"hidden"}}>
                    <PineChart></PineChart>
                    <div style={{float:"left"}}>
                        <PieChart dataId = "main2" jiaoyistyle="支付方式-交易额分布" jyStyleData={this.state.pieData1}></PieChart>
                    </div>
                    <div style={{float:"right"}}>
                        <PieChart dataId = "main1" jiaoyistyle="支付方式-交易笔数分布" jyStyleData={this.state.pieData2}></PieChart>
                    </div>
                </div>
                
            </div>
        );
    }
}


export default DemoHome