import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import {
  UserCircleIcon,
  ShoppingBagIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { cart } = useContext(ProductContext);
  const { isAuthenticated, logout } = useContext(AuthContext);
  return (
    <div className="w-full px-5 md:px-10 shadow flex items-center justify-between h-16 bg-white">
      {/* Brand */}
      <Link
        to="/"
        className="font-extrabold text-2xl text-[#008080] font-playfair tracking-wide"
      >
        Essencia
      </Link>
      {/* Links */}
      <ul className="hidden md:flex items-center gap-10">
        <li>
          <Link to="/" className=" text-[#008080]  uppercase text-sm">
            Accueil
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className=" text-[#444444]  uppercase text-sm  hover:text-black transition"
          >
            À propos
          </Link>
        </li>
        <li>
          <Link
            to="/partnership"
            className=" text-[#444444]  uppercase text-sm hover:text-black transition"
          >
            Partenariat
          </Link>
        </li>
        <li>
          <Link
            to="/blog"
            className=" text-[#444444]  uppercase text-sm hover:text-black transition"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className=" text-[#444444]  uppercase text-sm hover:text-black transition"
          >
            Contactez-nous
          </Link>
        </li>
      </ul>
      {/* Icons */}
      <div className="flex items-center gap-5">
        <button>
          <HeartIcon className="w-5 h-5" />
        </button>
        <Link to="/cart" className="relative">
          <ShoppingBagIcon className="w-5 h-5" />
          {cart.length > 0 ? (
            <span className="w-4 h-4 rounded-full bg-[#008080] absolute -top-2 -right-1 text-xs text-white flex items-center justify-center">
              {cart.length}
            </span>
          ) : (
            ""
          )}
        </Link>
        {!isAuthenticated ? (
          <Link to="/register">
            <UserCircleIcon className="w-5 h-5" />
          </Link>
        ) : (
          <button onClick={logout}>
            <ArrowRightOnRectangleIcon className="w-5 h-5" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
