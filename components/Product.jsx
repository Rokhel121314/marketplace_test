import React from "react";
import Image from "next/image";

const Product = (props) => {
  const { productName, productImage, productPrice } = props;
  return (
    <div className="bg-blue-500 mt-4 w-1/6 flex flex-col items-center rounded-xl p-5">
      <Image src={productImage} alt="products" height={50} width={50} />
      <h1 className="m-0 p-0">{productName}</h1>
      <h1 className="m-0 p-0">{productPrice}</h1>
      <button className="bg-green-300 px-4 py-1 rounded-full">
        ADD TO FAVORITE
      </button>
    </div>
  );
};

export default Product;
