import { Row } from "antd";
import Layout from "antd/lib/layout/layout";
import React from "react";
import LoginForm from "../components/LoginForm";

function Login() {
  return (
    <>
      <Layout>
        <Row justify="center" align="middle" className="h100">
          <LoginForm></LoginForm>
        </Row>
      </Layout>
    </>
  );
}

export default Login;
