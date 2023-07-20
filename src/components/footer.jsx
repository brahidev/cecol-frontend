import React from "react";
import styles from '../styles/footer.module.css'
import { Link } from "react-router-dom";
import { itemsFooter } from '../provider/dataconfig';

const Footer = () =>{
    return(
        <footer className={styles.wrapperfooter}>
            <img className={styles.logo} src={'/images/logo.png'} alt="Logo"/>
            <section className={styles.info}>
                {itemsFooter.map((item, index)=>(
                    <div key={item.title} className={styles.col}>
                        <span className={styles.title}>{item.title}</span>
                        {item.subitems.map((subitem)=>(
                            <Link key={subitem.name} to={subitem.url} className={styles.subitem}>{subitem.name}</Link>
                        ))}
                    </div>
                ))}
                <div className={styles.col}>
                    <span className={styles.title}>Siguenos</span>
                    <div className={styles.social}>
                        <Link to={process.env.REACT_APP_FACEBOOK} target="_blank" rel="noreferrer"><img src={'/images/facebook.png'} alt="facebook"/></Link>
                        <Link to={process.env.REACT_APP_TWITTER} target="_blank" rel="noreferrer"><img src={'/images/twitter.png'} alt="twitter"/></Link>
                        <Link to={process.env.REACT_APP_INSTA} target="_blank" rel="noreferrer"><img src={'/images/instagram.png'} alt="instagram"/></Link>
                        <Link to={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer"><img src={'/images/linkedIn.png'} alt="linkedIn"/></Link>
                    </div>
                    <div className={styles.login}>
                        <Link to={process.env.REACT_APP_BTN_REGISTER}>REGISTRO</Link>
                        <Link to={process.env.REACT_APP_BTN_LOGIN}>INGRESAR</Link>
                    </div>
                </div>
            </section>
        </footer>
    )
}

export default Footer