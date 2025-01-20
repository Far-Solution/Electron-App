import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import React from "react";
import Navbar from "./components/navbar.jsx";
import Home from "./components/home.jsx";
import Sidebar from "./components/sidebar.jsx";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "black",
};

const App = () => {
  return (
    <div>
      <Layout
        style={{
          maxHeight: "100vh",
          height: "100%",
          // overflow: "hidden",
        }}
      >
        <Sider width="150" style={siderStyle}>
          <Navbar />
        </Sider>
        <Content style={{ backgroundColor: "black", padding: "16px" }}>
          <Home />
        </Content>
        <Sider width="550" style={siderStyle}>
          <Sidebar />
        </Sider>
      </Layout>
    </div>
  );
};

export default App;
