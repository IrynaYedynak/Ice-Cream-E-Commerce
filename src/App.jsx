import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/contacts";
import Layout from "./layout/Layout";
import Modal from "./components/Modal";
import ProductPage from "./components/Products/ProductPage";
import ProductCatalog from "./components/ProductCatalog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contacts />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/shop" element={<ProductCatalog />} />
        </Route>
      </Routes>
      <Modal /> 
    </>
  );
}

export default App;
