import React from "react";
import './header-styles.css'
import { Avatar } from 'antd';
import { UserOutlined } from "@ant-design/icons";


export function Header(){
    return(
        <header className="header">
            <h1 className="header_tittle"> Facilita<span className="header_tittle_strong">Limpeza</span></h1>
           
           < div className="header_avatar_list" >
                <div className="header_avatar_name" >
                    <Avatar  className="header_avatar_icon" icon={<UserOutlined />}/> 
                    <div  className="header_info">
                        <div>David</div>
                        <div>Gerente</div>
                    </div>
                </div>
           </div>
        </header>
    )
}