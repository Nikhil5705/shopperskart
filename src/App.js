import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Cart } from "./pages/cart/Cart";
import { Home } from "./pages/home/Home";
import { ProductListing } from "./pages/productListing/ProductListing";
import { Header } from "./pages/component/Header";
import { SingleProduct } from "./pages/singleProduct/SingleProduct";
import { Wishlist } from "./pages/wishlist/Wishlist";
import { Footer } from "./pages/component/Footer";
// import { products } from "./backend/db/products";
import { Shoes } from "./pages/component/Shoes";
import { Menswear } from "./pages/component/Menswear";
import { Womenswear } from "./pages/component/Womenswear";
import { Login } from "./pages/login/Login";
import { RequireAuth } from "./pages/component/RequireAuth";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { SignUp } from "./pages/signup/SignUp"
import { Profile } from "./pages/profile/Profile";
import { Checkout } from "./pages/checkout/Checkout";
import { OrderConfirmation } from "./pages/orderconfirmation/OrderConfirmation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />        
         <Route path="/product" element={<ProductListing />} />
         <Route path="/cart" element={<RequireAuth><Cart /></RequireAuth>} />
         <Route path="/wishlist" element={<RequireAuth><Wishlist /></RequireAuth>} />
         <Route path="/singleproduct/:productId" element={<SingleProduct />} />
         <Route path="/shoes" element={<Shoes />} />
         <Route path="/menswear" element={<Menswear />} />
         <Route path="/womenswear" element={<Womenswear />} />
         <Route path="/signup" element={<SignUp />} />
         <Route path="/profile" element={<RequireAuth><Profile /></RequireAuth>} />
         <Route path="/checkout" element={<Checkout />} />
         <Route path="/order_confirmation" element={<OrderConfirmation />} />
       </Routes>
      </header>
      <ToastContainer
          position="top-center"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
/>
      <Footer />
      
    </div>
  );
}

export default App;
