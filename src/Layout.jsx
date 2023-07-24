import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
