import React from "react";
import { useHistory } from "react-router-dom";
import "./login.less";
import {
  FormInputField,
  Form,
  FormStrategy,
  Validators,
  Pop,
  Icon,
  Button,
  Notify
} from "zent";
// import imgURL from "../../assets/images/logo.png";

function Login() {
  const form = Form.useForm(FormStrategy.View);
  const [initializing, setInitializing] = React.useState(false);
  const initialize = React.useCallback(() => {
    setInitializing(true);
    setTimeout(() => {
      form.initialize({
        name: "alexwjj",
        password: "88888888",
      });
      setInitializing(false);
    }, 1000);
  }, [form]);
	let history = useHistory();

  const handleClick = () => {
    console.log(form.getValue(),"form");
    const user = form.getValue()
    if(user.name === "alexwjj") {
      sessionStorage.setItem('user', JSON.stringify(user));
      history.push("/home");
    } else {
      Notify.warn('账号错误，请点击账号填充！')
    }
    
  };
  return (
    <div className="login">
      <div className="login-logo"></div>
      <div className="login-content">
        {/* <img src={require('../../assets/imgs/fe-logo.png')} alt="logo"  /> */}
        <Form layout="horizontal" form={form} className="login-form">
          <div className="login-form-title">
            {/* <img
              src={imgURL}
              alt="logo"
              style={{ width: "50px", height: "50px" }}
            /> */}
            俊劫学习系统
          </div>
          <FormInputField
            name="name"
            label={
              <span>
                用户名&nbsp;
                <Pop
                  trigger="hover"
                  content="用户名用于个人账号登录"
                  centerArrow
                >
                  <Icon type="error-circle-o" />
                </Pop>
                :
              </span>
            }
            validators={[
              Validators.minLength(5, "用户名至少 5 个字"),
              Validators.maxLength(25, "用户名最多 25 个字"),
            ]}
            helpDesc="用户名alexwjj"
            required="必填"
          />
          <FormInputField
            name="password"
            props={{ type: "password" }}
            label="密码:"
            validateOccasion={
              Form.ValidateOccasion.Blur | Form.ValidateOccasion.Change
            }
            validators={[Validators.pattern(/^[0-9]+$/, "只允许数字")]}
            required="必填"
          />
          <div style={{ textAlign: "center" }}>
            <Button type="primary" onClick={initialize} loading={initializing}>
              获取账号
            </Button>
            <Button type="primary" onClick={handleClick}>
              登录
            </Button>
            <Button onClick={form.model.clear.bind(form.model)}>重置</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
export default Login;
