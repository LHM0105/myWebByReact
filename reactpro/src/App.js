import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">这是首页</h1>
        </header>
        <p className="App-intro">
          咋整啊??这路由,这antd,这请求数据啥的
        </p>
      </div>
    );
  }
}

export default App;
