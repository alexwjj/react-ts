import React from "react";
import LifeCycle from "./lifeCycle";
import { Button, Alert, BlockLoading } from "zent";
import "./index.less";
// import TestLoading from "./test-loading";
// import Test from './test';

// 定义 LifeCycle 组件的父组件

export default class LifeCycleContainer extends React.Component {
  // state 也可以像这样用属性声明的形式初始化
  state = {
    text: "父组件的文本",
    display: "none",
    hideChild: true,
    loading: true,
    lifeCycle: "https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/",
  };

  // 点击按钮，修改父组件文本的方法

  changeText = () => {
    this.setState({
      text: "修改后的父组件文本",
    });
  };

  // 点击按钮，隐藏（卸载）LifeCycle 组件的方法

  hideChild = () => {
    this.setState({
      hideChild: !this.state.hideChild,
    });
  };
  onLoading = () => {
    this.setState({
      loading: false,
    });
  };

  render() {
    return (
      <>
        {/* <Alert title="测试HOC withLoading" />
        <TestLoading></TestLoading> */}
        <Alert title="控制台展示父子组件生命周期的过程" />
        <div className="fatherContainer">
          <Button onClick={this.changeText} type="primary">
            修改父组件文本内容
          </Button>
          <Button onClick={this.hideChild} type="danger">
            {this.state.hideChild ? "显示" : "隐藏"}子组件
          </Button>
          {this.state.hideChild ? null : (
            <LifeCycle text={this.state.text} count={1} />
          )}
        </div>
        <div>
          <BlockLoading loading={this.state.loading} iconSize={64} />
          <iframe
            src={this.state.lifeCycle}
            title="navigation"
            width="100%"
            height="600px"
            onLoad={this.onLoading}
            onError={this.onLoading}
          ></iframe>
        </div>
      </>
    );
  }
}
