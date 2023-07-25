import React from "react";
import { Link } from "react-router-dom";
import "animate.css";

const Hero = () => {
  return (
    <div className="w-full mb-20">
      <div className="w-full bg-[#FDF6E9] px-5 md:px-10 py-10 md:py-0 min-h-[500px] flex flex-col md:flex-row items-center md:justify-between justify-center">
        {/* Left section */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:block mb-5 md:mb-0">
          <h1 className="text-4xl font-bold mb-4 font-playfair leading-[48px] text-center md:text-left animate__animated animate__fadeIn">
            Des parfums <span className="text-[#006D5F]">captivants</span> qui
            libèrent votre charme intérieur
          </h1>
          <p className="text-[#444444] leading-6 mb-6  text-center md:text-left animate__animated animate__fadeInUp">
            Découvrez l'attrait des parfums de luxe qui captivent vos sens et
            évoquent un monde d'élégance et d'individualité. Découvrez le parfum
            parfait pour exprimer votre style unique.
          </p>
          <Link
            to="/"
            className="primary_btn animate__animated animate__fadeInUp"
          >
            Commencez
          </Link>
        </div>
        {/* Right section */}
        <div>
          <img
            src="https://essencia-client-pzya.vercel.app/hero_photo.png"
            className="object-contain animate__animated animate__fadeInRight"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
