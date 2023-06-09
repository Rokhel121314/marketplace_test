"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Product from "@components/Product";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const fetchApiData = async () => {
    const url =
      "https://lako-v3-0-api.onrender.com/products/640b1de8c3bf207ede1da162";

    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(result);
      setProducts(result);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchApiData();
  }, []);

  return (
    <div className="flex flex-wrap w-screen h-auto justify-around gap-y-6 gap-x-1">
      {products.map((product) => {
        return (
          <Product
            productName={product.product_name}
            productPrice={product.selling_price}
            productImage={product.product_image.secure_url}
          />
        );
      })}
    </div>
  );
};

export default AllProducts;
