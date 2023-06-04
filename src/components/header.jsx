import React from "react";
import MenuDesktop from "./menu";
import styles from '../styles/header.modules.css'

const Header = ()=>{
    return(
        <header className={styles.headerContaint}>
            <MenuDesktop/>
        </header>
    )
}

export default Header