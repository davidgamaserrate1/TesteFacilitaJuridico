import React from "react";
import { Header } from "../components/Header";
import './home-styles.css' 
import { AddClient } from "../components/AddClient";
import { Content } from "antd/es/layout/layout";
import { theme } from "antd";
 
export function Home() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
return (
    <>
    <Header/>
    <Content className="main_content">
         
      <div className="top_actions">
        <AddClient />
      </div>
      </Content>
    </>
  );
}
 