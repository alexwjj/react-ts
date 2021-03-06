/*
 * @Descripttion:
 * @version:
 * @Author: alexwjj
 * @Date: 2020-10-14 21:16:42
 * @LastEditors: alexwjj
 * @LastEditTime: 2021-02-11 01:32:47
 */
import React, { Component } from "react";
import { Layout } from "antd";
import LeftNav from "../../components/left-nav";
import Header from "../../components/header";
import { Redirect, Route, Switch } from "react-router-dom";
import Category from "../category/Category";
import Product from "../product/Product";
import Role from "../role/Role";
import Bar from "../chars/Bar";
import Line from "../chars/Line";
import Pie from "../chars/Pie";
import Home from "../home";
import Todo from "../todo";
import TsStudy from "../ts-study";

import Clinic from "../clinic/index";
import User from "../user/User";
import Record from "../register/record";
import AddRegister from "../register/add-register";
import ChargeManage from "../charge/charge-manage";
import SettleRecord from "../charge/settle-record";
import PrescriptionDetail from "../charge/prescription-detail";
import Demo from "../demo";
import DemoHooks from "../demo-hooks";
import DemoComponents from "../demo-components";

import ZentBase from "../zent/base";
import ZentNav from "../zent/nav";
import ZentData from "../zent/data";
import ZentShow from "../zent/show";
import ZentFeedback from "../zent/feedback";

import { connect } from "react-redux";
import { RootState } from "typesafe-actions";
import NotFound from "../not-found/not-found";
const { Footer, Sider, Content } = Layout;

type IProps = ReturnType<typeof mapStateToProps>;

class admin extends Component<IProps, {}> {
  render() {
    const user = sessionStorage.getItem("user");
    if (!user) {
      return <Redirect to="/login"></Redirect>;
    }
    return (
      <Layout style={{ minHeight: "100%" }}>
        <Sider>
          <LeftNav></LeftNav>
        </Sider>
        <Layout>
          <Header></Header>
          <Content
            style={{
              backgroundColor: "#fff",
              margin: "12px 0 0 12px",
            }}
          >
            <Switch>
              <Redirect exact={true} from="/" to="/home"></Redirect>
              <Route path="/home" component={Home}></Route>
              <Route path="/todo" component={Todo}></Route>
              <Route path="/ts-study" component={TsStudy}></Route>
              <Route path="/clinic" component={Clinic}></Route>
              <Route path="/record" component={Record}></Route>
              <Route path="/add-register" component={AddRegister}></Route>
              <Route path="/charge-manage" component={ChargeManage}></Route>
              <Route path="/settle-record" component={SettleRecord}></Route>
              <Route path="/demo" component={Demo}></Route>
              <Route path="/demo-hooks" component={DemoHooks}></Route>
              <Route path="/demo-components" component={DemoComponents}></Route>
              <Route
                path="/prescription-detail"
                component={PrescriptionDetail}
              ></Route>
              <Route path="/zent-base" component={ZentBase}></Route>
              <Route path="/zent-nav" component={ZentNav}></Route>
              <Route path="/zent-data" component={ZentData}></Route>
              <Route path="/zent-show" component={ZentShow}></Route>
              <Route path="/zent-feedback" component={ZentFeedback}></Route>
              {/* 废弃 */}
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/role" component={Role}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/bar" component={Bar}></Route>
              <Route path="/line" component={Line}></Route>
              <Route path="/pie" component={Pie}></Route>
              <Route component={NotFound}></Route>
            </Switch>
          </Content>
          <Footer style={{ textAlign: "center", color: "#cccccc" }}>
            十年医院his系统架构师，专业搬砖，值得信赖
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  user: state.user,
});

export default connect(mapStateToProps, {})(admin);
