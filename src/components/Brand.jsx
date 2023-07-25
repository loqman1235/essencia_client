import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Brand = ({ image, name, brandId }) => {
  return (
    <Link
      to={`/brands/${brandId}`}
      className="bg-white shadow flex items-center justify-center p-10 rounded-md animate__animated animate__fadeIn"
    >
      <img
        src={`https://essencia-backend.onrender.com/${image}`}
        alt={name}
        className="object-contain"
      />
    </Link>
  );
};

export default Brand;
