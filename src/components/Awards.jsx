import award from "../assets/award.png";
import certificate1 from "../assets/certificate1.png";
import certificate2 from "../assets/certificate2.png";
import certificate3 from "../assets/certificate3.png";
import certificate4 from "../assets/certificate4.png";
import certificate5 from "../assets/certificate5.png";

import { motion } from "framer-motion";

const Awards = () => {
  return (
    <motion.div className="w-full mt-10 lg:mt-20 px-8 lg:px-16 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <img className="w-[150px] lg:w-[300px]" src={award} alt="" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full  font-rubik  text-[10px] lg:text-body-desktop flex flex-col-reverse lg:flex-col text-center items-center justify-center gap-4 px-0 lg:px-28 mt-8 font-regular text-awards-text"
      >
        <div>
          <p>
            Our commitment to excellence is reflected in the numerous accolades
            and certifications we’ve achieved. Proudly certified with ISO
            standards,{" "}
          </p>{" "}
          <br />
          <p className="font-rubik ">
            we ensure the highest levels of quality, safety, and environmental
            responsibility in our products. Recognized for innovation and
            ergonomic design, our office chairs have set industry benchmarks,
            making us a trusted choice for businesses nationwide.
          </p>{" "}
          <br />
          <p>
            Our certifications validate our dedication to delivering only the
            best, while our awards highlight the impact we’ve made in redefining
            workplace comfort. From sustainable practices to cutting-edge
            designs, every recognition inspires us to keep raising the bar.
            Choose us for unmatched quality backed by trust and industry
            acclaim.
          </p>
          <button className="lg:hidden bg-[#282929] text-white font-rubik px-6 py-2 mt-4 text-[14px]">
          Learn More
        </button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className=" mt-0 lg:mt-8 lg:flex gap-4"
        >
          <div className="flex gap-4 m-auto ">
              <img className="w-20" src={certificate1} alt="" />
              <img className="w-20" src={certificate2} alt="" />
              <img className="w-24" src={certificate3} alt="" />
          </div>
          <div className="flex  justify-center gap-4">
          <img className="w-20" src={certificate4} alt="" />
          <img className="w-20" src={certificate5} alt="" />
          </div>
         
        </motion.div>
        <button className="hidden lg:block bg-[#282929] text-white font-rubik px-6 py-2 mt-4 text-[16px]">
          Learn More
        </button>
        
      </motion.div>
    </motion.div>
  );
};

export default Awards;
