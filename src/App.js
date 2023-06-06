import "./App.css";
import { Cart } from "./pages/cart/Cart";
import { Home } from "./pages/home/Home";
import { ProductListing } from "./pages/productListing/ProductListing";
import { Header } from "./pages/component/Header";
import { SingleProduct } from "./pages/singleProduct/SingleProduct";
import { Routes, Route } from "react-router-dom";
import { Wishlist } from "./pages/wishlist/Wishlist";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
       </Routes>
      </header>
    </div>
  );
}

export default App;
