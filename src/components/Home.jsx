import React from "react";
import home from "../assets/home-bg.webp";

import { Suspense } from "react";
import { motion } from "framer-motion";

import Header from "../common/Header";

const NewArrivals = React.lazy(() => import("./NewArrivals"));
const BestSellers = React.lazy(() => import("./BestSellers"));
const Collection = React.lazy(() => import("./Collection"));
const Team = React.lazy(() => import("./Team"));
const Bulk = React.lazy(() => import("./Bulk"));
const WhyChooseUs = React.lazy(() => import("./WhyChooseUs"));
const Awards = React.lazy(() => import("./Awards"));
const Footer = React.lazy(() => import("./Footer"));

const Home = () => {
  return (
    <div className="w-full">
      <Header />

      <div className="w-full relative">
        <div className="w-full relative">
          <img className="w-full h-[500px] lg:h-[calc(100vh-88px)]" src={home} alt="" />
        </div>
        <motion.div className="w-full  text-center lg:text-left lg:w-2/5 top-1/2  lg:top-1/2 left-0 absolute transform -translate-y-1/2 lg:ml-20 px-8 flex flex-col items-start justify-start">
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-h2-mobile lg:text-[48px] font-rubik font-bold text-white"
          >
            INDIA’s #1 Ergonomic Office Chairs
          </motion.p>
          <br />
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-white text-center mt-6 lg:mt-0 lg:text-left font-tomorrow text-subtext-mobile lg:text-subtext-desktop lg:pr-24"
          >
            Experience unparalleled comfort and support designed for your
            workday. Discover the style and ergonomics, crafted just for you!
          </motion.p>
          <br />
          <br />
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="m-auto lg:m-0 mt-10 bg-home-bg px-4  lg:px-8 py-2 lg:py-4  text-subtext-mobile lg:text-subtext-desktop text-home-bg-black font-rubik"
          >
            SHOP NOW
          </motion.button>
        </motion.div>
      </div>
      <Suspense>
        <NewArrivals />
        <BestSellers />
        <Collection />
        <Team />
        <Bulk />
        <WhyChooseUs />
        <Awards />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Home;
