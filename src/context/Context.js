import axios from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const Cart = createContext();

const Context = ({ children }) => {
  const [product, setProduct] = useState([]);

  const fetchData = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Cart.Provider value={{ product, setProduct }}>{children}</Cart.Provider>
  );
};

export default Context;
