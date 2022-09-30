import "./App.css";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import About from "./components/About";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/product/:id" element={<Product/>}/>
        {/* <Route exact path="/cart" element={<Cart/>}/> */}
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </>
  );
}

export default App;
