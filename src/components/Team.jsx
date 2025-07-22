import comma from "../assets/“.png";
import flipkart from "../assets/Flipkart 1.png";
import bhive from "../assets/bhive.png";
import Toi from "../assets/TOI.png";
import team1 from "../assets/team1.png";
import { motion } from "framer-motion";

const Team = () => {
  return (
    <div className="mt-0 lg:mt-20 px-0 lg:px-16 w-full flex flex-col lg:flex-row">
      {/* -------------------LEFT DIV---------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full  lg:w-1/2  py-6 lg:py-12 mt-4 lg:mt-8"
      >
        <div>
          <p className="w-4/5 m-auto lg:m-0 lg:w-1/2 font-rubik text-h3-mobile lg:text-h3-desktop text-center lg:text-left text-home-bg-black font-medium">
            Loved by teams, remote  workers & press.
          </p>{" "}
          <br /> <br />
          <div className="flex gap-2 flex-col-reverse lg:flex-col">
            <img className="m-auto w-4 lg:w-8 lg:m-0" src={comma} alt="" /> <br />
            <p className=" m-auto lg:m-0 px-4  lg:px-0 w-full text-center lg:text-left lg:w-1/2 text-subtext-mobile lg:text-subtext-desktop  font-rubik font-light text-home-bg-black">
              Pheonix is now selling directly to individuals, as well as working
              with Flipkart, Bhive and other companies to outfit home offices
              for employees who may never work in an office five days a week
              again.
            </p>
          </div>
        </div>
        <div className="flex gap-14 mt-16 justify-center items-center lg:items-start lg:justify-start">
          <img className="w-16 lg:w-28" src={flipkart} alt="" />
          <img className="w-16 lg:w-28" src={bhive} alt="" />
          <img className="w-16 lg:w-28" src={Toi} alt="" />
        </div>
      </motion.div>
      {/* -------------------Right DIV---------------------------- */}
      <div className="w-11/12 mt-4 lg:mt-0 m-auto lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
        {/* =============1=========== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:border flex flex-row lg:flex-col  items-center lg:px-8 lg:py-8  "
        >
          <div className=" h-full   w-1/5 ">
            <img className="w-10 lg:w-16 m-auto  lg:mt-0" src={team1} alt="" />
          </div>
          <div className="text-left h-full  lg:text-center flex flex-col-reverse lg:flex-col w-4/5">
            <div>

            <p className="mt-1 lg:mt-6 text-body-mobile lg:text-body-desktop font-rubik font-medium text-home-bg-black">
              Ahmed Ali
            </p>
            <p className="lg:mt-2 text-subtext-mobile lg:text-subtext-desktop font-rubik font-light text-team-company">
              Operations at Flipkart
            </p>
            </div>
            <div>

            <p className=" lg:mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
              We chose these ergonomic chairs for our new corporate office, and
              they exceeded all expectations. Not only are they stylish and
              durable, but they’ve also significantly improved our employees'
              posture and energy levels.
            </p>
            </div>
          </div>
        </motion.div>
        {/* ================2============== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:border flex flex-row lg:flex-col  items-center lg:px-8 lg:py-8 "
        >
          <div className=" h-full   w-1/5 ">
            <img className="w-10 lg:w-16 m-auto  lg:mt-0" src={team1} alt="" />
          </div>
          <div className="text-left h-full  lg:text-center flex flex-col-reverse lg:flex-col w-4/5">
            <div>

            <p className="mt-1 lg:mt-6 text-body-mobile lg:text-body-desktop font-rubik font-medium text-home-bg-black">
              Ahmed Ali
            </p>
            <p className="lg:mt-2 text-subtext-mobile lg:text-subtext-desktop font-rubik font-light text-team-company">
              Operations at Flipkart
            </p>
            </div>
            <div>

            <p className=" lg:mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
              We chose these ergonomic chairs for our new corporate office, and
              they exceeded all expectations. Not only are they stylish and
              durable, but they’ve also significantly improved our employees'
              posture and energy levels.
            </p>
            </div>
          </div>
        </motion.div>
        {/* ================3============== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:border flex flex-row lg:flex-col  items-center lg:px-8 lg:py-8  "
        >
          <div className=" h-full   w-1/5 ">
            <img className="w-10 lg:w-16 m-auto  lg:mt-0" src={team1} alt="" />
          </div>
          <div className="text-left h-full  lg:text-center flex flex-col-reverse lg:flex-col w-4/5">
            <div>

            <p className="mt-1 lg:mt-6 text-body-mobile lg:text-body-desktop font-rubik font-medium text-home-bg-black">
              Ahmed Ali
            </p>
            <p className="lg:mt-2 text-subtext-mobile lg:text-subtext-desktop font-rubik font-light text-team-company">
              Operations at Flipkart
            </p>
            </div>
            <div>

            <p className=" lg:mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
              We chose these ergonomic chairs for our new corporate office, and
              they exceeded all expectations. Not only are they stylish and
              durable, but they’ve also significantly improved our employees'
              posture and energy levels.
            </p>
            </div>
          </div>
        </motion.div>
        {/* ================4============== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="lg:border flex flex-row lg:flex-col  items-center lg:px-8 lg:py-8  "
        >
          <div className=" h-full   w-1/5 ">
            <img className="w-10 lg:w-16 m-auto  lg:mt-0" src={team1} alt="" />
          </div>
          <div className="text-left h-full  lg:text-center flex flex-col-reverse lg:flex-col w-4/5">
            <div>

            <p className="mt-1 lg:mt-6 text-body-mobile lg:text-body-desktop font-rubik font-medium text-home-bg-black">
              Ahmed Ali
            </p>
            <p className="lg:mt-2 text-subtext-mobile lg:text-subtext-desktop font-rubik font-light text-team-company">
              Operations at Flipkart
            </p>
            </div>
            <div>

            <p className=" lg:mt-6 text-[10px]  font-rubik font-light text-home-bg-black">
              We chose these ergonomic chairs for our new corporate office, and
              they exceeded all expectations. Not only are they stylish and
              durable, but they’ve also significantly improved our employees'
              posture and energy levels.
            </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Team;
