import { Button, Form, Input } from "antd";
import { rules } from "../utils/rules";

const LoginForm = () => {
  const submit = () => {
    console.log("submit");
  };
  return (
    <>
      <Form name="basic" onFinish={submit}>
        <Form.Item
          label="Username"
          name="username"
          rules={[rules.required("Fill the name")]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[rules.required("Fill the password")]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default LoginForm;
