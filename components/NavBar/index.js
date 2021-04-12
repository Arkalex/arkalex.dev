import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './style.module.css';

export default function NavBar () {
    const [navActive, setNavActive] = useState(false);

    const handleClick = () => {
        setNavActive(!navActive);
    }
    const handleClickLink = () => {
        setNavActive(!navActive);
    }
    const scrollTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
        setNavActive(!navActive);
    }

    let navClassName = styles.navlinks;
    let burgerClassName = styles.burger;
    if(navActive) {
        navClassName += ` ${styles.navActive}`;
        burgerClassName += ` ${styles.toggle}`
    }

    return (
        <nav className={styles.navbar}>
            <div className={burgerClassName} onClick={handleClick}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            <ul className={navClassName}>
                <li>
                    <a onClick={scrollTop} href='#'>About</a>
                </li>
                <li><a onClick={handleClickLink} href='#work'>Work</a></li>
                <li><a onClick={handleClickLink} href='https://blog.arkalex.dev'>Blog</a></li>
                <li><a onClick={handleClickLink} href='#contact'>Contact</a></li>
            </ul>
        </nav>
    );
}