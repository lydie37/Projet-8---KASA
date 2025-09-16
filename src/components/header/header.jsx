import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.svg";

const Header = () => (
  <header className="header">
    <img src={logo} alt="Kasa logo" width={150} height={40} />
    <nav className="nav">
      <Link to="/">Accueil</Link>
      <Link to="/about">A propos</Link>
    </nav>
  </header>
);

export default Header;
