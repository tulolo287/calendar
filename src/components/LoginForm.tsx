import React from "react";
import { Button, Card, Form, Input } from "antd";
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators"


const LoginForm = () => {

  const dispatch = useDispatch()

  const submit = () => {
    dispatch(AuthActionCreators.setLogin("k", "f"))
  }
  
  return (
    <>
    <Card>
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
      </Card>
    </>
  )
}

export default LoginForm;