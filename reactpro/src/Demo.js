import React,{Component} from 'react';
import { Link } from 'react-router/lib';

class Demo extends Component{
    render(){
        return (
            <div>
                <h3>这是demo页</h3>
                <Link to="/main">返回main</Link>
            </div>
        );
    }
}


export default Demo