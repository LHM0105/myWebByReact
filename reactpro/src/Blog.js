import React,{Component} from 'react';
import { Link } from 'react-router/lib';
import {Icon} from "antd";

import axios from "axios"
class Blog extends Component{
    componentDidMount(){
        // 请求数据
        // axios.get("http://datainfo.duapp.com/shopdata/getclass.php").then(function(data){
        //     console.log(data)
        // })

        //获取商城jsonp接口数据
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
    render(){
        return (
            <div>
                <div className="B_left">
                    <ul>
                        <li>
                            <Icon type="star-o" />
                            {/* <Link to="blog/blog1">在react中引用图片</Link> */}
                        </li>
                        <li><Icon type="star-o" /></li>
                        <li><Icon type="star-o" /></li>
                        <li><Icon type="star-o" /></li>
                    </ul>
                </div>
                <div className="B_con">
                    {this.props.children}
                </div>
            </div>
        );
    }
}


export default Blog