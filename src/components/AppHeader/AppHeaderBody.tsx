import { useState } from 'react';
import styles from './styles.module.css';

const AppHeaderBody = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`${styles.navbarLogo}`}>
                <a href="#root"><p className={styles.logoText} >Rohith<span className={styles.fontGreen}>.dev</span></p></a>
            </div>
            <div className={`${styles.navbarLinks} ${isMenuOpen ? styles.show : ''}`}>
                <a href="#root" onClick={() => setIsMenuOpen(false)} >Home</a>
                <a href="#about" onClick={() => setIsMenuOpen(false)} >About</a>
                <a href="#skills" onClick={() => setIsMenuOpen(false)} >Skills</a>
            </div>
            <button className={styles.navbarToggle} onClick={handleMenuToggle}>
                <span className={`${styles.navbarToggleIcon} ${isMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.navbarToggleIcon} ${isMenuOpen ? styles.open : ''}`}></span>
                <span className={`${styles.navbarToggleIcon} ${isMenuOpen ? styles.open : ''}`}></span>
            </button>
        </nav>
    )
}

export default AppHeaderBody;