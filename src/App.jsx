import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Layout from "./layout/Layout";
import Modal from "./components/Modal";
import ModalProvider from "./components/ModalContext";
import ProductPage from "./components/Products/ProductPage";
import ProductCatalog from "./components/ProductCatalog";
import CartPage from "./components/Cart/CartPage";
import CartProvider from "./components/Cart/CartContext";
import FAQS from "./pages/FAQS";
import ContactUsMain from "./components/Contacts/ContactUsMain";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <ModalProvider>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shop" element={<ProductCatalog />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/faqs" element={<FAQS />} />
          <Route path="/contacts" element={<Contacts/>} />
        </Route>
      </Routes>
      <Modal />
    </CartProvider>
    </ModalProvider>
  );
}


export default App;
