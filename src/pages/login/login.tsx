import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";

import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  document.title = "登录";

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    try {
      axios
        .post("/user/login", {
          name: values.username,
          password: values.password,
        })
        .then((response) => {
          if (values.remember === true) {
            localStorage.setItem("token", response.data["token"]);
          } else {
            sessionStorage.setItem("token", response.data["token"]);
          }
          navigate("/home");
        });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    axios.post("/user/check").then((response) => {
      if (response.data["state"] === true) {
        navigate("/home");
      }
    });
  }, [navigate]);

  return (
    <div className="login_form">
      <div className="login_form_container">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="用户名"
            name="username"
            rules={[{ required: true, message: "请输入用户名" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="密码"
            name="password"
            rules={[{ required: true, message: "请输入密码" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Checkbox>7天内记住我</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
