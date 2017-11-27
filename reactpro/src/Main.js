import React,{Component} from 'react';
import { Link } from 'react-router/lib';


import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;

class Main extends Component{
    render(){
        return (
            <div>
                <div className="Main_top">
                    <div className="top-con">
                        <ul>
                            <li><Link to="/main">AboutMe</Link></li>
                            <li><Link to="/demo">Demo</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul> 
                    </div>
                </div>
                <div className="con">
                    {this.props.children}
                </div>

                <div className="foot">
                    <p>LiuHuiMin'world ©2015 Created by LHM</p>
                </div>
          </div>
        );
    }
}


export default Main