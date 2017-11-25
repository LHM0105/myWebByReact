import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// 引入antd的css
import "antd/dist/antd.css"
// 引入路由所需模块
import {Router,Route,Link,browserHistory,IndexRoute} from "react-router"
// 引入页面组件
import Home from "./Home"
import Main from "./Main"
import AboutMe from './AboutMe'
import Blog from './Blog'
import Demo from './Demo'
ReactDOM.render(<Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Home}></IndexRoute>
        <Route component={Main} path="/main">
            <IndexRoute component={AboutMe  }></IndexRoute>
            <Route component={AboutMe} path="/aboutMe"></Route>
            <Route component={Demo} path="/demo"></Route>
            <Route component={Blog} path="/blog"></Route>
        </Route>
    </Route>
</Router>, document.getElementById('root'));
registerServiceWorker();
