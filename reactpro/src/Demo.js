import React,{Component} from 'react';
import { Link } from 'react-router/lib';

class Demo extends Component{
    render(){
        return (
            <div>
                <h1>这是demo页</h1>
                <div className="D_left">
                    <ul>
                        <li>3d旋转相册</li>
                        <li>飞机大战</li>
                    </ul>
                </div>
                <div className="D_con">
                    内容
                </div>
            </div>
        );
    }
}


export default Demo