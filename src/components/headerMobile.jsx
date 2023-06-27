import React, { useState } from "react";
import styles from "../styles/headerMB.module.css"
import { Link } from "react-router-dom";

const HeaderMB = ()=>{
    const [isOpen, setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen(!isOpen)
    }

    return(
        <header className={styles.headerMB}>
            <div className={styles.logo}>
                <img className={styles.logo} src={'/images/logo.png'} alt="Logo"/>
            </div>
            <button className={isOpen? styles.burger_open : styles.burger} onClick={handleClick}>
                <div className={styles.strip}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </button>
            {isOpen &&
                <menu className={styles.content}>
                    <div className={styles.wrapper_items}>
                        <li className={styles.item}>
                        <Link to="/">Home</Link>
                        </li>
                        <li className={styles.item}>
                        <Link to="/quienes-somos">Quienes somos</Link>
                        </li>
                        <li className={styles.item}>
                        <Link to="/esquemas-certificacion">Esquemas de certificación</Link>
                        </li>
                        <li className={styles.item}>
                        <Link to="/preguntas-frecuentes">Preguntas frecuentes</Link>
                        </li>
                    </div>
                    <div className={styles.wrapper_login}>
                        <Link to={process.env.REACT_APP_BTN_REGISTER}>REGISTRO</Link>
                        <a href={process.env.REACT_APP_BTN_LOGIN}>INGRESAR</a>
                    </div>
                </menu>
            }
        </header>
    )
}

export default HeaderMB