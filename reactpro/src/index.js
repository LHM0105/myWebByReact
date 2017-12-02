import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// 引入antd的css
import "antd/dist/antd.css"
// 引入路由所需模块
import {Router,Route,Link,browserHistory,IndexRoute, IndexRedirect} from "react-router"



// 引入页面组件
import Home from "./Home"
import Main from "./Main"
import AboutMe from './AboutMe'
import Blog from './Blog'
import Demo from './Demo'
import DirectMerchantList from './directMerchantList'
import DemoHome from './DemoHome'
import MerchantManage from './MerchantManage'
import DistributionMerchantList from "./DistributionMerchantList"
import ShopDetail from "./ShopDetail"
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route component={Main} path="/main">
        {/* 重定向到/aboutMe */}
            <IndexRedirect to="/aboutMe" />
            <Route component={AboutMe} path="/aboutMe"></Route>
            <Route component={Demo} path="/demo">
                <IndexRedirect  to="/demoHome" />
                <Route path="/demoHome" component={DemoHome}></Route>
                <Route path="/merchantManage" component={MerchantManage}>
                    <IndexRedirect to="/merchantManage/directMerchantList" />
                    <Route path="/merchantManage/directMerchantList" component={DirectMerchantList}></Route>
                    <Route path="/merchantManage/distributionMerchantList" component={DistributionMerchantList}></Route>
                </Route>
                <Route path="/merchantManage/merchantdetail/:shopId" component={ShopDetail}></Route>
                    {/* <IndexRedirect to="/directMerchantList" />
                    <Route component={} path="/directMerchantList"></Route> */}
            </Route>
            <Route component={Blog} path="/blog"></Route>
        </Route>
    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
