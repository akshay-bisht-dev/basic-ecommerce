import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/Cart";
import Common from "./components/Common";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Common />}>
            <Route path="/" index element={<Home />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
