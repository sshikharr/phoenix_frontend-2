// import React from "react";
// import chair1 from "../assets/chair1.png";
// import star from "../assets/start.png";
import { useState, useEffect, useContext } from "react";
// import sold from "../assets/image 158.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import stars from "../assets/Group 628218.png";
import { CartContext } from "../context/CartContext";

const BestSellers = () => {
  const [collections, setCollections] = useState([]);
  const [topProduct, setTopProduct] = useState(null);

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await fetch(
          "https://phoenix-backend-50z8.onrender.com/api/products/all-products?limit=3"
        );
        const data = await res.json();

        if (Array.isArray(data.products)) {
          setCollections(data.products);
        } else {
          console.error("Data.products is not an array:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchCollections();
  }, []);

  useEffect(() => {
    const fetchTopProduct = async () => {
      try {
        const res = await fetch(
          "https://phoenix-backend-50z8.onrender.com/api/products/all-products?limit=1"
        );
        const data = await res.json();

        if (Array.isArray(data.products) && data.products.length > 0) {
          setTopProduct(data.products[0]);
        } else {
          console.error("Top product not found:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchTopProduct();
  }, []);

  return (
    <div className="mt-0 lg:h-screen overflow-hidden">
      <div className="w-full h-full  lg:flex">
        {/* --------------------Left Div-------------------- */}
        <div className="w-full lg:w-3/5 lg:pl-8 lg:py-8  lg:px-8 bg-home-bg-black">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className=""
          >
            <h1 className="text-white text-center lg:text-left font-bold font-tomorrow lg:text-h2-desktop text-h1-mobile pt-4 lg:pt-0">
              BEST SELLERS
            </h1>
          </motion.div>

          {/* Grid layout for collections */}
          <Swiper
            // spaceBetween={16}

            modules={[Pagination]}
            className="mySwiper"
            onSwiper={(swiper) => {
              // Update progress bar width
              const progressBar = document.getElementById(
                "custom-progress-bar2"
              );
              swiper.on("slideChange", () => {
                const progress =
                  (swiper.activeIndex /
                    (swiper.slides.length - swiper.params.slidesPerView)) *
                  100;

                progressBar.style.width = `${Math.min(progress, 100)}%`;
              });
            }}
            breakpoints={{
              0: {
                slidesPerView: 1.6,
                spaceBetween: 8,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="gap-4 mt-4"
            >
              {collections.map((collection, index) => (
                <SwiperSlide
                  key={index}
                  className="w-full h-fit py-4 pl-8 lg:pl-0 "
                >
                  <div>
                    <img
                      className="w-full lg:h-[400px]"
                      src={
                        collection.imageUrls?.[0] ||
                        "https://via.placeholder.com/300"
                      }
                      alt=""
                    />
                  </div>
                  {/* -----------------Div-1-3-------------------- */}
                  <div className="flex m-auto flex-col  text-left pr-0 mt-4 font-rubik font-medium">
                    <div>
                      <p className="text-white text-h4-mobile lg:text-body-desktop">
                        {collection.title.split(" ").slice(0, 3).join(" ") +
                          "..."}
                      </p>
                      <p className="text-white text-[14px] font-light lg:text-[14px]">
                        {collection.description
                          .split(" ")
                          .slice(0, 8)
                          .join(" ") + "..."}
                      </p>
                    </div>

                    <div className="mt-1 lg:mt-2 flex items-center gap-4">
                      {/* <p className="font-light text-subtext-mobile lg:text-subtext-desktop mt-1">
                                            {collection.rating || "4.5 ★"}
                                          </p> */}
                      <img className="w-24 h-4" src={stars} alt="" />
                      <p className="text-[#808080] font-light">2000</p>
                    </div>
                    <div className="mt-2 flex items-center gap-4 ">
                      <div className="mt-0 lg:mt-0 space-x-4">
                        <p className="space-x-2">
                          <span className=" text-h4-mobile lg:text-body-desktop text-white">
                            ₹{collection.actualprice || "499"}
                          </span>
                          <span className="line-through text-white/80 text-subtext-mobile lg:text-subtext-mobile">
                            ₹{collection.price || "999"}
                          </span>
                        </p>
                      </div>
                    </div>
                    {/* Add to Cart - Fixed at bottom */}
                    {/* <div className="flex border-2 border-white w-fit  px-16 lg:px-8 py-2 lg:py-4 text-white font-medium">
                      <button onClick={() => addToCart(collection)}>ADD TO CART</button>
                    </div> */}
                  </div>
                </SwiperSlide>
              ))}
            </motion.div>
          </Swiper>

          {/* Custom Progress Bar */}
          {/* <div className="flex justify-center lg:mt-16">
            <div className="w-3/5 m-auto lg:w-[500px]  h-1 lg:h-2 bg-gray-200 rounded-full overflow-hidden">
              <div
                id="custom-progress-bar2"
                className="h-full bg-black transition-all duration-300 ease-in-out"
                style={{ width: "0%" }}
              ></div>
            </div>
          </div> */}

          <motion.div className="mt-4 lg:mt-4 pb-8 lg:pb-0">
            <button className="flex m-auto lg:m-0 bg-home-bg font-rubik font-medium px-10 lg:px-20 py-3 lg:py-6 text-home-bg-black">
              EXPLORE
            </button>
          </motion.div>
        </div>

        {/* --------------------Right Div--------------------------- */}
        <div className="w-full lg:w-2/5 py-8  bg-home-bg">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-tomorrow text-center lg:text-left px-8 font-bold text-h2-mobile lg:text-h3-desktop">
              TODAY’S TOP SELLING
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="relative flex flex-col lg:items-center px-12 lg:px-0"
          >
            <div className="relative lg:w-[350px]">
              <div className="w-fit h-fit px-4 py-0 border bg-discount-bg text-white font-rubik right-4 absolute lg:right-6 top-8">
                <p>SOLD OUT</p>
              </div>
              <img
                className="h-[450px] lg:h-[500px]  py-4 w-full"
                src={
                  topProduct?.imageUrls?.[0] ||
                  "https://via.placeholder.com/300"
                }
                alt={topProduct?.title || "Product Image"}
              />
            </div>
            {/* Details */}
            <div className="lg:w-[350px] font-rubik font-medium text-home-bg-black">
              <p className="text-h4-mobile lg:text-h4-desktop">
                {topProduct?.title || "Product Title"}
              </p>
              <p className="text-body-mobile lg:text-subtext-desktop font-light">
                {topProduct?.description || "Product Title"}
              </p>
              <div className="mt-1 lg:mt-2 flex items-center gap-4">
                {/* <p className="font-light text-subtext-mobile lg:text-subtext-desktop mt-1">
                                      {collection.rating || "4.5 ★"}
                                    </p> */}
                <img className="w-24 h-4" src={stars} alt="" />
                <p className="text-[#808080] font-light">2000</p>
              </div>
              <p className="text-[16px] text-home-bg-black mt-2 space-x-2">
                <span className=" text-h4-mobile lg:text-h4-desktop font-medium text-black">
                  ₹{topProduct?.price || "499"}
                </span>
                <span className="text-subtext-mobile lg:text-subtext-desktop line-through font-light  text-sub-text-best">
                  ₹{topProduct?.actualprice || "999"}
                </span>
              </p>
            </div>
          </motion.div>

          {/* Button */}
          <div className="lg:mt-6 mt-2 flex justify-center">
            <button
              onClick={() => addToCart(topProduct)}
              className="bg-home-bg-black text-white font-rubik font-medium px-16 lg:px-20 py-3 lg:py-6"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellers;
