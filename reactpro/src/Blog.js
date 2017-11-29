import React,{Component} from 'react';
import { Link } from 'react-router/lib';
import {Icon} from "antd";
class Blog extends Component{
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