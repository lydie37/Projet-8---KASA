import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => (
  <header className="header">
    <img src={logo} alt="Kasa logo" className="logo" />
    <nav className="nav">
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  </header>
);

export default Header;
