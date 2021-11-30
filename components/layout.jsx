import { GlobalStyle } from "styles/GlobalStyle";
import Navbar from "components/ui/navbar";
import Footer from "./ui/footer";
const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
