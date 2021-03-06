/*
 * @Descripttion: 
 * @version: 
 * @Author: alexwjj
 * @Date: 2020-09-28 21:45:10
 * @LastEditors: alexwjj
 * @LastEditTime: 2021-02-11 13:43:50
 */
import React, { Component } from 'react';
import 'antd/dist/antd.less';
import 'zent/css/index.css';
import Login from './pages/login/Login';
import admin from './pages/admin/admin';
import { HashRouter, Route, Switch } from 'react-router-dom';
class App extends Component {
	render() {
		return (
			<HashRouter>
				<Switch>
					<Route path="/login" component={Login}></Route>
					<Route path="/" component={admin}></Route>
				</Switch>
			</HashRouter>
		);
	}
}

export default App;
