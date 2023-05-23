import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import DigitalInvitation from "../pages/DigitalInvitation";
import ProductCategory from "../pages/ProductCategory";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Pay from "../pages/Pay";
import Header from "../pages/layout/Header";
import Footer from "../pages/layout/Footer";
import AccessibilityStatement from "../pages/AccessibilityStatement";
import Contact from "../pages/Contact";
import Policy from "../pages/Policy";
import Terms from "../pages/Terms";
// import About from "../pages/About";

const Main = () => {
  return (
    <div id="page" className="site">
      {/* Header */}
      <Header/>
      {/* Routes */}
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/digital-invitation" exact Component={DigitalInvitation} />
        <Route
          path="/product-category"
          exact
          Component={ProductCategory}
        />
        <Route path="/product" exact Component={ProductDetails} />
        <Route path="/checkout" exact Component={Checkout} />
        <Route path="/pay" exact Component={Pay} />
        
        <Route path="/accessibility-statement" exact Component={AccessibilityStatement} />        
        <Route path="/contact" exact Component={Contact} />        
        <Route path="/policy" exact Component={Policy} />        
        <Route path="/terms" exact Component={Terms} />        
        {/* <Route path="/about" exact Component={About} />         */}
      </Routes>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Main;
