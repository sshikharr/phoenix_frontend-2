import collection1 from "../assets/collection1.png";
import collection2 from "../assets/collection2.png";
import collection3 from "../assets/collection3.png";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Collection = () => {
  const collections = [
    { image: collection1, title: "LUXURY" },
    { image: collection2, title: "GAMING" },
    { image: collection3, title: "WFH" },
    { image: collection1, title: "LUXURY" },
    { image: collection2, title: "GAMING" },
    { image: collection3, title: "WFH" },
  ];

  return (
    <div className="mt-10 lg:mt-20">
      <div className="text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-rubik font-medium lg:text-h2-desktop text-h2-mobile text-home-bg-black"
        >
          DISCOVER OUR
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="font-tomorrow font-bold lg:text-h1-desktop text-h1-mobile text-home-bg-black"
        >
          COLLECTIONS
        </motion.h1>
      </div>

      <div className="flex px-8 mt-4">
        <Swiper
          spaceBetween={16}
          modules={[Pagination]}
          className="mySwiper"
          onSwiper={(swiper) => {
            // Update progress bar width
            const progressBar = document.getElementById("custom-progress-bar3");
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
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3.5,
            },
          }}
        >
          {collections.map((collection, index) => (
            <SwiperSlide key={index} className="">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                }}
              >
                <motion.img
                  src={collection.image}
                  alt={`Slide ${index}`}
                  className="object-cover w-full"
                />
                <h1 className="text-center font-rubik font-medium text-body-mobile lg:text-body-desktop mt-8 text-home-bg-black">
                  {collection.title}
                </h1>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Custom Progress Bar */}
      <div className="flex justify-center mt-8 lg:mt-16">
        <div className="w-3/5 lg:w-[500px] h-1 lg:h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            id="custom-progress-bar3"
            className="h-full bg-black transition-all duration-300 ease-in-out"
            style={{ width: "0%" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
