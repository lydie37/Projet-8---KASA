import Header from "../header/header";
import Footer from "../footer/footer";
import { Outlet } from "react-router-dom";
import "./layout.css";

const Layout = () => (
  <div className="site-wrapper">
    <Header /> {/* le header est dans le wrapper */}
    <main className="main-container">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
