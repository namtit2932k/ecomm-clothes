import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Router>
        <audio loop autoPlay>
          <source src="/sound/shangabi.mp3" type="audio/mpeg" />
        </audio>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products/:id" element={<Products />}></Route>
          <Route path="/product/:id" element={<Product />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
