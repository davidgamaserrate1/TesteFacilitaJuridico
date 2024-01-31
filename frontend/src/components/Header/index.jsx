import React from "react";
import './header-styles.css'

import logo from '../../assets/logo.png'

export function Header(){
    return(
        <header className="header">
            <img src={logo} alt="Logo de empresa de limpeza" />
        </header>
    )
}