import "./footer.css"; 
import logoFooter from "../../assets/logofooter.svg";

const Footer = () => (
  <footer className="footer">
    <img src={logoFooter} alt="Kasa logo footer"/>
    <p>© 2020 Kasa. All rights reserved</p>
  </footer>
);

export default Footer;
