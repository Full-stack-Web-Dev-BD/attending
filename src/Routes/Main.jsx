import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import DigitalInvitation from "../pages/DigitalInvitation";
import ProductCategory from "../pages/ProductCategory";
import ProductDetails from "../pages/ProductDetails";
import Checkout from "../pages/Checkout";
import Pay from "../pages/Pay";
import Header from "../pages/layout/Header";
import Footer from "../pages/layout/Footer";

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
          path="/product-category/:category"
          exact
          Component={ProductCategory}
        />
        <Route path="/product/:id" exact Component={ProductDetails} />
        <Route path="/checkout" exact Component={Checkout} />
        <Route path="/pay" exact Component={Pay} />
      </Routes>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Main;
