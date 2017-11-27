import React,{Component} from 'react';
import { Link } from 'react-router/lib';
import './index.css'
class Home extends Component{
    render(){
        return (
            <div className="Home_box">
                <div className="wrap">
                    <div className="box">
                        <div>happy</div>
                        <div>lucky</div>
                        <div>study</div>
                        <div>beauty</div>
                        <div>smile</div>
                        <div>thinking</div>
                    </div>
                </div>
                <div className="box">
                    <h3>WELCOME TO LHM'S WORLD</h3>
                    <Link to="/main" className="learnMore">LAERN MORE</Link>
                </div>
            </div>
        );
    }
}


export default Home