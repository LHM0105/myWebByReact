import React,{Component} from 'react';
import { Link } from 'react-router/lib';
import {Icon} from "antd";

class AboutMe extends Component{
    render(){
        return (
            <div className="AM">
                <h4><Icon type="idcard" />LHM</h4>
                <h4>E-mail</h4>
                <p>liuhuimin0105@qq.com</p>
            </div>
        );
    }
}


export default AboutMe