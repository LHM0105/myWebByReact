import React,{Component} from 'react';
import { Link } from 'react-router/lib';

class Home extends Component{
    render(){
        return (
            <div>
                <h3>这是Home页</h3>
                <Link to="/main">进入主页main</Link>
            </div>
        );
    }
}


export default Home