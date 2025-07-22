import earth from "../assets/earth.png";
import card from "../assets/credit-card 1.png";
import customer from "../assets/customer-service 1.png";
import chat from "../assets/bubble-chat 1.png";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  return (
    <motion.div className="w-full h-screen lg:h-fit mt-10 lg:mt-20 grid grid-cols-1 lg:grid-cols-4 lg:px-8  lg:gap-0 py-10 bg-home-bg">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col m-auto items-center px-8  w-full"
      >
        <img className="w-10 lg:w-10" src={earth} alt="" />
        <p className="font-rubik font-medium text-body-mobile lg:text-body-desktop mt-4 text-home-bg-black">
          FREE SHIPPING
        </p>
        <p className="w-4/5 text-center font-rubik font-light text-black text-subtext-mobile lg:text-subtext-desktop mt-4">
          Free worldwide shipping and returns - customs and duties taxes
          included
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col m-auto items-center px-8"
      >
        <img className="w-10 lg:w-10" src={customer} alt="" />
        <p className="font-rubik font-medium text-body-mobile lg:text-body-desktop mt-4 text-home-bg-black">
          CUSTOMER SERVICE
        </p>
        <p className="w-4/5 text-center font-rubik font-light text-black text-subtext-mobile lg:text-subtext-desktop mt-4">
          We are available from monday to friday to answer your questions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col m-auto items-center px-8"
      >
        <img className="w-10 lg:w-10" src={card} alt="" />
        <p className="font-rubik font-medium text-body-mobile lg:text-body-desktop mt-4 text-home-bg-black">
          SECURE PAYMENT
        </p>
        <p className="w-4/5 text-center font-rubik font-light text-black text-subtext-mobile lg:text-subtext-desktop mt-4">
          Your payment information is processed securely.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col m-auto items-center px-8"
      >
        <img className="w-10 lg:w-10" src={chat} alt="" />
        <p className="font-rubik font-medium text-body-mobile lg:text-body-desktop mt-4 text-home-bg-black">
          CONTACT US
        </p>
        <p className="w-4/5 text-center font-rubik font-light text-black text-subtext-mobile lg:text-subtext-desktop mt-4">
          Need to contact us ? Just send us an e-mail at info@pheonix.com
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhyChooseUs;
