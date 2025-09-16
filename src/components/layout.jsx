import Header from "./header/header";
import Footer from "./footer/footer";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
    <Header />
    <main>
      <Outlet />
    </main>
    <Footer />
  </>
);

export default Layout;
