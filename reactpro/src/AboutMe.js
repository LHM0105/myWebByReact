import React,{Component} from 'react';
import { Link } from 'react-router/lib';
import {Icon} from "antd";

class AboutMe extends Component{
    componentDidMount(){
        console.log("组件渲染完之后，请求数据")
       
    }
    render(){
        return (
            <div className="AM">
                <div className="AM_left">
                    <h4><Icon type="idcard" />LHM</h4>
                    <h4><Icon type="phone" />liuhuimin0105@qq.com</h4>
                </div>
                <div className="AM_R">

                </div>
            </div>
        );
    }
}


export default AboutMe