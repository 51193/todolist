import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { userCheck, userLogin } from "../../api/userApi";

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export default function Login() {
  document.title = "登录";

  const navigate = useNavigate();

  const onFinish = (values: any) => {
    userLogin(
      values.username,
      values.password,
      values.remember,
      () => {
        navigate("/home");
      },
      (error: any) => {
        console.error(error);
      }
    );
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    userCheck(() => {
      navigate("/home");
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
