import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const ProductCard = ({ productId, productName, productImg, productPrice }) => {
  return (
    <Link to={`products/${productId}`}>
      <div className="w-full  bg-[#fff] p-5 flex items-center justify-center flex-col gap-5 relative hover:bg-[#FDF6E9] transition">
        {/* Add to Cart */}
        {/* Product Image */}
        <div className="w-[180px] h-[180px]">
          <img
            src={productImg}
            alt={productName}
            className="object-contain w-full h-full"
          />
        </div>
        {/* Product Details */}
        <div>
          <h3 className="font-bold uppercase tracking-wide font-playfair mb-2">
            {productName}
          </h3>
          {/* Price */}
          <p className="font-bold text-center text-[#008080] font-playfair text-2xl">
            ${Number(productPrice).toFixed(2)}
          </p>
        </div>
        {/* <button className="primary_btn w-full">Add to cart</button> */}
      </div>
    </Link>
  );
};

export default ProductCard;
