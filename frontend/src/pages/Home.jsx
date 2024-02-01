import React from "react";
import { Header } from "../components/Header";
import './home-styles.css' 
import { Content } from "antd/es/layout/layout";
import { AddClientModal } from "../components/AddClientModal";
import TableClients from "../components/TableClients"; 
 
export function Home() {

return (
    <>
    <Header/>
      <Content className="main_content">
        <div className="top_actions">
          <AddClientModal className="top_action_add"/>
        </div>    
        <TableClients />
      </Content>
    </>
  );
}
 