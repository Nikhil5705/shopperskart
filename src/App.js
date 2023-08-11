import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Cart } from "./pages/cart/Cart";
import { Home } from "./pages/home/Home";
import { ProductListing } from "./pages/productListing/ProductListing";
import { Header } from "./pages/component/Header";
import { SingleProduct } from "./pages/singleProduct/SingleProduct";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Footer } from "./pages/component/Footer";
import { products } from "./backend/db/products";
import { Shoes } from "./pages/component/Shoes";
import { Menswear } from "./pages/component/Menswear";
import { Womenswear } from "./pages/component/Womenswear";
import { Login } from "./pages/login/Login";
import { RequireAuth } from "./pages/component/RequireAuth";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />        
        <Route path="/product" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
{/* </RequireAuth> */}
        <Route path="/singleproduct/:productId" element={<SingleProduct />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/menswear" element={<Menswear products={products} />} />
        <Route path="/womenswear" element={<Womenswear products={products} />} />
       </Routes>
      </header>
      <Footer />
    </div>
  );
}

export default App;
