import "./footer.css"; // CSS global
import logoFooter from "../../assets/logofooter.svg";

const Footer = () => (
  <footer className="footer">
    <img src={logoFooter} alt="Kasa logo footer" width={150} height={40} />
    <p>© 2025 Kasa. Tous droits réservés</p>
  </footer>
);

export default Footer;
