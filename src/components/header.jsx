import { Link } from "react-router-dom";
import styles from './Header.module.css';
import logo from '../assets/logo.svg';

const Header = () => (
    <header className={styles.header}>
        <img src={logo} alt="Kasa logo" width={150} height={40} />
        <nav className={styles.nav}>
            <Link to="/">Accueil</Link>
            <Link to="/about">A propos</Link>
        </nav>
    </header>
);

export default Header;
