import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  MinusIcon,
  PlusIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import "animate.css";
import { ProductContext } from "../context/ProductContext";
import api from "../services/api";

const ProductPage = () => {
  const [product, setProduct] = useState({});
  const { cart, addProductToCart, incrementQty, decrementQty } =
    useContext(ProductContext);
  const cartProduct = cart.find((item) => item._id === product._id);
  const qty = cartProduct ? cartProduct.qty : 0;
  const { id } = useParams();
  console.log(product.images);
  useEffect(() => {
    // Get Product By Id
    const getProduct = async () => {
      try {
        const response = await api.get(`/products/${id}`);
        if (response.data.success) {
          setProduct(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, []);

  return (
    <div className="w-full px-5 md:px-10 my-20 flex md:flex-row flex-col gap-10">
      {/* Product Slider */}
      <div className="bg-[#FDF6E9] p-5 w-full md:w-2/5 h-[400px] animate__animated animate__fadeInLeft overflow-hidden">
        <img
          className="w-full h-full object-contain"
          src={`http://localhost:3001/${product.images && product.images[0]}`}
          alt={product.name}
        />
      </div>
      {/* Product Details */}
      <div className="flex flex-col gap-5 w-full md:w-3/5">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-xl uppercase tracking-wide font-playfair animate__animated animate__fadeIn text-center md:text-left">
            {product.name}
          </h3>
          {/* Add to wishlist button */}
          <button>
            <HeartIcon className="w-5 h-5" />
          </button>
        </div>
        <p className="text-[#444444] text-sm leading-6 animate__animated animate__fadeInUp text-center md:text-left">
          {product.description}
        </p>
        {/* Details */}
        <div className="flex md:flex-row flex-col items-center gap-5 md:gap-10 animate__animated animate__fadeInUp">
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase text-sm font-playfair">
              Volume:
            </span>
            <span className="text-[#444444]">{product.volume}ml</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold uppercase text-sm font-playfair">
              Prix:
            </span>
            <span className="text-[#008080]">
              ${Number(product.price).toFixed(2)}
            </span>
          </div>
          <div className="flex items-center gap-2 ">
            <span className="font-bold uppercase text-sm font-playfair">
              Quantité:
            </span>
            <div className="flex items-center gap-5 px-5 py-1 border border-black">
              <button
                aria-label="Decrease quantity"
                onClick={() => decrementQty(product)}
              >
                <MinusIcon className="w-5 h-5" />
              </button>
              <span>{qty}</span>
              <button
                aria-label="Increase quantity"
                onClick={() => incrementQty(product)}
              >
                <PlusIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 mt-5 animate__animated animate__fadeInUp">
          <button
            className="primary_btn w-full py-4 md:px-20"
            aria-label="Add to cart"
            onClick={() => addProductToCart(product)}
          >
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
