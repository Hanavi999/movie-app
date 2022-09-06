import logo from '../img/logo.png';
import styles from './Home.module.css';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Header() {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
    return (
        <header className={scrollPosition < 100 ? styles.original_header : styles.change_header}>
            <div>
                <Link to={'/'}>
                <img src={logo} className={styles.logo} alt="logo" />
                </Link>
            </div>
            <ul className={styles.list}>
            <Link to={'/mostDownload'} className={styles.titlebar} 
                state={{
                    genre: "",
                    option: 'download_count'
                }}
            >
                <li>High download</li>
            </Link>
            <Link to={'/adventure'} className={styles.titlebar} 
                state={{
                    genre: "Adventure",
                    option: 'year'
                }}
            >
                <li>Adventure</li>
            </Link>
            <Link to={'/animation'} className={styles.titlebar} 
                state={{
                    genre: "Animation",
                    option: 'year'
                }}
            >
                <li>Animation</li>
            </Link>
            <Link to={'/romance'} className={styles.titlebar} 
                state={{
                    genre: "Romance",
                    option: 'year'
                }}
            >
                <li>Romance</li>
            </Link>
            </ul>
            <div className={styles.logo}></div>
        </header>
    )
}

export default Header;