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

        // axios({
        //     url:"https://c.y.qq.com/soso/fcgi-bin/client_search_cp?ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.center&searchid=37321371798720943&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=20&w=aaaaa&g_tk=5381&jsonpCallback=searchCallbacksong6743&loginUin=747450952&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0",
        //     method:"get",
        // }).then(function(data){
        //     console.log(eval(data.data))
        // })
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