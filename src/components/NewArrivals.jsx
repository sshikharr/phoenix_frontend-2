// import chair1 from "../assets/chair1.png";
// import star from "../assets/start.png";
import { useState, useEffect, useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { CartContext } from "../context/CartContext";
import stars from "../assets/Group 628218.png"

const NewArrivals = () => {
  const [collections, setCollections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchCollections = async () => {
      try {
        const res = await fetch(
          "https://phoenix-backend-50z8.onrender.com/api/products/all-products?limit=8"
        );
        const data = await res.json();

        if (Array.isArray(data.products)) {
          setCollections(data.products);
        } else {
          console.error("Data.products is not an array:", data);
        }
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCollections();
  }, []);

  const handleAddToCart = (collection) => {
    addToCart(collection);
    setToastMessage(`${collection.title} added to cart!`);
    setShowToast(true);
    
    // Hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div className="lg:h-screen mt-10">
      {/* Toast Notification */}
      {showToast && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg font-rubik font-medium"
        >
          {toastMessage}
        </motion.div>
      )}

      <h1 className="text-center font-bold font-tomorrow lg:text-h1-desktop text-h1-mobile">
        NEW ARRIVALS
      </h1>

      <div className="flex w-full pl-8 lg:px-8 gap-2 mt-4">
        <Swiper
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => {
            const progressBar = document.getElementById("custom-progress-bar");
            swiper.on("slideChange", () => {
              const progress =
                (swiper.activeIndex /
                  (swiper.slides.length - swiper.params.slidesPerView)) *
                100;

              progressBar.style.width = `${Math.min(progress, 100)}%`;
            });
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 16,
            },
            0: {
              slidesPerView: 1.2,
              spaceBetween: 32,
            },
          }}
        >
          {loading ? (
            <p>Loading...</p>
          ) : (
            collections.map((collection, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="flex flex-col justify-between w-full border-2 h-full py-4 pb-4 hover:shadow-lg transition-shadow duration-300"
                >
                  {/* Tag */}
                  <div className="w-fit h-fit px-4 border bg-discount-bg text-white font-rubik ml-4">
                    <p>- 50% Off</p>
                  </div>

                  {/* Product Image */}
                  <div className="flex justify-center">
                    <img
                      className="h-[250px] lg:h-[300px] object-contain transition-transform duration-300 hover:scale-105"
                      src={
                        collection.imageUrls?.[0] ||
                        "https://via.placeholder.com/300"
                      }
                      alt={collection.title}
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col mx-4 text-left pr-10 mt-2 lg:mt-2 font-rubik font-medium">
                    <p className="text-body-mobile lg:text-body-desktop">
                      {collection.title}
                    </p>
                    <p className="text-body-mobile lg:text-subtext-desktop font-light text-[#282929]">
                      {collection.description}
                    </p>

                    {/* Rating */}
                    <div className="mt-1 lg:mt-2 flex items-center gap-4">
                      <img className="w-24 h-4" src={stars} alt="" />
                      <p className="text-[#808080] font-light">2000</p>
                    </div>

                    {/* Price */}
                    <div className="mt-1 lg:mt-2 mb-2 space-x-4">
                      <p className="space-x-2">
                        <span className="text-h4-mobile lg:text-h4-desktop font-medium text-black">
                          ₹{collection.actualprice || "499"}
                        </span>
                        <span className="line-through font-light  text-body-mobile lg:text-body-mobile   text-[#282929]">
                          ₹{collection.price || "999"}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Add to Cart - Fixed at bottom */}
                  <div className="mt-auto flex border-2 border-home-bg-black w-fit mx-auto px-16 lg:px-8 py-2 lg:py-2 text-home-bg-black font-medium hover:bg-home-bg-black hover:text-white transition-all duration-300 cursor-pointer">
                    <button onClick={() => handleAddToCart(collection)}>ADD TO CART</button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
      
      <div className="flex justify-center mt-8 lg:mt-8">
        <div className="w-3/5 lg:w-[500px] h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            id="custom-progress-bar"
            className="h-full bg-black transition-all duration-300 ease-in-out"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
      
      <div className="flex justify-center mt-4 lg:mt-8 mb-8 lg:mb-0">
        <button className="bg-home-bg-black text-white font-rubik px-20 py-4 font-medium text-[16px] hover:bg-gray-800 hover:scale-105 transition-all duration-300 cursor-pointer">
          VIEW ALL
        </button>
      </div>
    </div>
  );
};

export default NewArrivals;