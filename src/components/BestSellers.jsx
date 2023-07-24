import ProductCard from "./ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";
import "swiper/css";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

const BestSellers = () => {
  const newArrivalProductsData = [
    {
      id: 1,
      productImg: "/products/bestsellers/cavalli.png",
      productName: "Roberto cavalli",
      productPrice: "247.99",
    },
    {
      id: 2,
      productImg: "/products/bestsellers/shalimar.png",
      productName: "Shalimar",
      productPrice: "300.99",
    },
    {
      id: 3,
      productImg: "/products/bestsellers/Amouage.png",
      productName: "Amouage",
      productPrice: "120.99",
    },
    {
      id: 4,
      productImg: "/products/bestsellers/Cartier.png",
      productName: "Cartier",
      productPrice: "80.99",
    },
    {
      id: 5,
      productImg: "/products/bestsellers/Cartier.png",
      productName: "Cartier",
      productPrice: "80.99",
    },
    {
      id: 6,
      productImg: "/products/bestsellers/Cartier.png",
      productName: "Cartier",
      productPrice: "80.99",
    },
  ];
  return (
    <div className="w-full flex justify-center items-center flex-col gap-4 mb-20">
      {/* NewArrivals Title */}
      <h3 className="font-playfair text-xl md:2xl flex w-fit items-center justify-center font-bold uppercase text-center relative">
        <span className="absolute -left-28 md:-left-60 w-[80px] md:w-[200px] h-[1px] bg-[#c4c4c4]"></span>{" "}
        {/* Line on the left */}
        MEILLEURES VENTES
        <span className="absolute -right-28 md:-right-60 w-[80px] md:w-[200px] h-[1px] bg-[#c4c4c4]"></span>{" "}
        {/* Line on the right */}
      </h3>
      {/* Products */}
      <Swiper
        className="w-full px-5 md:px-10 relative"
        spaceBetween={40}
        grabCursor={false}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        speed={800}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, Navigation]}
      >
        <button className="swiper-button-next text-4xl absolute right-10 top-1/2 -translate-y-1/2 z-20 bg-[#008080] p-3 cursor-pointer text-white shadow-xl">
          <ChevronRightIcon className="w-5 h-5 pointer-events-none" />
        </button>
        {newArrivalProductsData.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard
              productId={product.id}
              productName={product.productName}
              productImg={product.productImg}
              productPrice={product.productPrice}
            />
          </SwiperSlide>
        ))}

        <button className="swiper-button-prev text-4xl absolute left-10 top-1/2 -translate-y-1/2 z-20 bg-[#008080] p-3 cursor-pointer text-white shadow-xl">
          <ChevronLeftIcon className="w-5 h-5 pointer-events-none" />
        </button>
      </Swiper>
    </div>
  );
};

export default BestSellers;
