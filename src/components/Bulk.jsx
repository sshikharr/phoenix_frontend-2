import { motion } from "framer-motion";
import bulk from "../assets/bulk.png";

const Bulk = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="mt-10 lg:mt-20 px-8 lg:px-16 w-full flex flex-col lg:flex-row "
    >
      {/* ---------------------Left Div------------------------ */}
      <div className="w-full lg:w-1/2 py-0 lg:py-8 mt-4">
        <p className="font-bold font-tomorrow text-h1-mobile lg:text-h1-desktop text-home-bg-black">
          BULK ENQUIRY
        </p>{" "}
        <br /> <br />
        <p className="pr-0 text-subtext-mobile lg:text-subtext-desktop text-home-bg-black font-light w-full lg:w-1/2 font-rubik">
          Looking to furnish your office or workspace with premium ergonomic
          chairs? We specialize in fulfilling corporate bulk orders with
          customized solutions tailored to your team’s comfort and productivity
          needs. Whether it’s a startup or a large organization, we’ve got you
          covered with competitive pricing and dedicated support.
        </p>{" "}
        <br /> <br />
        <a href="">
          <button className="hidden lg:block bg-home-bg-black text-white font-medium font-rubik py-4 px-6">
            ENQUIRE NOW
          </button>
        </a>
      </div>
      {/* ---------------------Right Div----------------------------- */}
      <div className="w-full lg:w-1/2">
        <img src={bulk} alt="" />
        <a href="">
          <button className="lg:hidden bg-home-bg-black mt-8 text-white font-medium font-rubik py-4 px-6">
            ENQUIRE NOW
          </button>
        </a>
      </div>
    </motion.div>
  );
};

export default Bulk;
