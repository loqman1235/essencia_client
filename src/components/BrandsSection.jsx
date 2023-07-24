import React, { useEffect, useState } from "react";
import Brand from "./Brand";
import api from "../services/api";

const BrandsSection = () => {
  const brandsData = [
    {
      id: 1,
      logo: "public/brands/dior.png",
      name: "Dior",
    },
    {
      id: 2,
      logo: "public/brands/channel.png",
      name: "Channel",
    },
    {
      id: 3,
      logo: "public/brands/boss.png",
      name: "Hugo Boss",
    },
    {
      id: 4,
      logo: "public/brands/dg.png",
      name: "Dolce & Gabanna",
    },
  ];

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const getBrands = async () => {
      try {
        const response = await api.get("/brands");
        setBrands(response.data.brands);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBrands();
  }, []);

  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 mb-20">
      {/* Section Title */}
      <h3 className="font-playfair text-xl md:2xl flex w-fit items-center justify-center font-bold uppercase text-center relative">
        <span className="absolute -left-28 md:-left-60 w-[80px] md:w-[200px] h-[1px] bg-[#c4c4c4]"></span>{" "}
        {/* Line on the left */}
        Marques
        <span className="absolute -right-28 md:-right-60 w-[80px] md:w-[200px] h-[1px] bg-[#c4c4c4]"></span>{" "}
        {/* Line on the right */}
      </h3>
      {/* Brands */}
      <div className="w-full px-5 md:-px-10 grid grid-cols-1 md:grid-cols-4 gap-10">
        {brands.map((brand) => (
          <Brand
            key={brand._id}
            name={brand.name}
            image={brand.image}
            brandId={brand._id}
          />
        ))}
      </div>
    </div>
  );
};

export default BrandsSection;
