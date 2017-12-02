import React,{Component} from 'react';
import { Link } from 'react-router/lib';


class MerchantManage extends Component{
    render(){
        return (
            <div>
                {this.props.children}
          </div>
        );
    }
}


export default MerchantManage