import React from "react";
import { Link } from "react-router-dom";
import styles from '../styles/menu.module.css'

const MenuDesktop = ()=>{
    return(
        <section className={styles.contentheader}>
            <img className={styles.logo} src={'/images/logo.png'} alt="Logo"/>
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
                    <Link to={process.env.REACT_APP_BTN_LOGIN}>INGRESAR</Link>
                </div>
            </menu>
        </section>
    )
}

export default MenuDesktop