import { Layout, Menu, Row } from "antd";
import Item from "antd/lib/list/Item";
import React from "react";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../router";

const { Header } = Layout;

function Navbar() {
  const router = useNavigate();
  const auth = true;
  return (
    <>
      <Header>
        <Row justify="end">
          {auth ? (
            <>
              <div style={{ color: "white" }}>User name</div>
              <Menu theme="dark" mode="horizontal" selectable={false}>
                <Menu.Item
                  key={1}
                  onClick={() => {
                    router("/login");
                  }}
                >
                  Logout
                </Menu.Item>
              </Menu>
            </>
          ) : (
            <Menu theme="dark" mode="horizontal" selectable={false}>
              <Menu.Item
                key={1}
                onClick={() => {
                  router("/login");
                }}
              >
                Login
              </Menu.Item>
            </Menu>
          )}
        </Row>
      </Header>
    </>
  );
}

export default Navbar;
