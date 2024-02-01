import React from "react";
import { Header } from "../components/Header";
import './home-styles.css' 
import { AddClient } from "../components/AddClient";
 
export function Home() {
return (
    <>
    <Header/>
    <div className="main_content">
        
      <div className="top_actions">
        <AddClient />
      </div>
    </div>
    </>
  );
}
