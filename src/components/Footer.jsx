import payment from "../assets/payment.png";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="mt-10 lg:mt-20 pb-10 w-full bg-home-bg-black">
      {/* --------------Div 1---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="hidden lg:grid grid-cols-5 px-16 py-16 gap-12"
      >
        <div className="font-rubik">
          <h1 className="text-white  font-semibold text-[18px]">MY ACCOUNT</h1>
          <ul className="flex flex-col gap-8 mt-6 text-white font-light text-[14px]">
            <li>Account</li>
            <li>Cart</li>
            <li>Order History</li>
            <li>Return Policy</li>
            <li>Refund Policy</li>
          </ul>
        </div>
        <div className="font-rubik">
          <h1 className="text-white  font-semibold text-[18px]">OUR LEGAL</h1>
          <ul className="flex flex-col gap-8 mt-6 text-white font-light text-[14px]">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Track Order</li>
            <li>Store Location</li>
            <li>FAQs</li>
          </ul>
        </div>
        <div className="font-rubik">
          <h1 className="text-white  font-semibold text-[18px]">
            OUR COLLECTIONS
          </h1>
          <ul className="flex flex-col gap-8 mt-6 text-white font-light text-[14px]">
            <li>Basic Chairs</li>
            <li>Luxury</li>
            <li>Gaming</li>
            <li>Work from Home </li>
            <li>Office</li>
          </ul>
        </div>
        <div className="text-white font-rubik">
          <h1 className="font-semibold text-[18px]">CONTACT US</h1>
          <h1 className="mt-6 font-semibold text-[16px]">FOR SALES ENQUIRY </h1>
          <ul className="font-light mt-4 flex flex-col gap-2 text-[14px]">
            <li>Ph: +91 88848 56173</li>
            <li>Email: sales@phoneix.com</li>
          </ul>
          <h1 className="mt-6 font-semibold text-[16px]">
            FOR SUPPORT ENQUIRY{" "}
          </h1>
          <ul className="font-light mt-4 flex flex-col gap-2 text-[14px]">
            <li>Ph: +91 88848 56173</li>
            <li>Email: support@phoneix.com</li>
          </ul>
        </div>
        <div className="font-rubik ml-8">
          <h1 className="text-white  font-semibold text-[18px]">FOLLOW US</h1>
          <ul className="flex flex-col gap-8 mt-6 text-white font-light text-[14px]">
            <li>Facebook</li>
            <li>Twitter</li>

            <li>Instagram</li>
            <li>Pinterest</li>
          </ul>
        </div>
      </motion.div>
      {/* For Mobile */}

      <div className="lg:hidden py-4 font-rubik px-8">
        <div className="h-fit w-full bg-home-bg-black flex gap-4">
          <div className="w-1/3 font-rubik">
            <h1 className="text-white  font-semibold text-subtext-mobile">
              MY ACCOUNT
            </h1>
            <ul className="flex flex-col gap-2 mt-4 text-white font-light text-[10px]">
              <li>Account</li>

              <li>Order History</li>
              <li>Return Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h1 className="text-white  font-semibold text-subtext-mobile">
              OUR LEGAL
            </h1>
            <ul className="flex flex-col gap-2 mt-4 text-white font-light text-[10px]">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Track Order</li>
              <li>Store Location</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div className="w-1/3">
            <h1 className="text-white  font-semibold text-subtext-mobile">
              FOLLOW US
            </h1>
            <ul className="flex flex-col gap-2 mt-4 text-white font-light text-[10px]">
              <li>Facebook</li>
              <li>Twitter</li>

              <li>Instagram</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
        <div className="h-fit w-full font-rubik py-4 flex gap-4">
          <div className="w-1/3 ">
            <h1 className="text-white  font-semibold text-subtext-mobile">
              OUR COLLECTIONS
            </h1>
            <ul className="flex flex-col gap-2 mt-4 text-white font-light text-[10px]">
              <li>Facebook</li>
              <li>Basic Chairs</li>
              <li>Luxury</li>
              <li>Gaming</li>
              <li>Work from Home </li>
              <li>Office</li>
            </ul>
          </div>
          <div className="w-full  font-rubik pl-4">
            <div>
              <h1 className="text-white  font-semibold text-subtext-mobile">
                CONTACT US
              </h1>
            </div>
            <div className="flex gap-4 text-white">
              <div className="">
                <h1 className="mt-6 font-semibold text-subtext-mobile">
                  FOR SALES ENQUIRY{" "}
                </h1>
                <ul className="font-light mt-4 flex flex-col gap-2 text-[10px]">
                  <li>Ph: +91 88848 56173</li>
                  <li>Email: sales@phoneix.com</li>
                </ul>
              </div>
              <div>
                <h1 className="mt-6 font-semibold text-subtext-mobile">
                  FOR SUPPORT ENQUIRY{" "}
                </h1>
                <ul className="font-light mt-4 flex flex-col gap-2 text-[10px]">
                  <li>Ph: +91 88848 56173</li>
                  <li>Email: support@phoneix.com</li>
                </ul>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* --------------Div 2---------------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="w-full px-8 mt-4 lg:mt-8"
      >
        <h1 className="font-rubik text-white font-semibold text-body-mobile lg:text-body-desktop">
          Subscribe to Newsletter
        </h1>
        <div className="flex gap-2 lg:gap-4 mt-4">
          <div>
            <input
              type="text"
              placeholder="Email Address"
              className="py-2 lg:py-4 w-[200px] lg:w-[400px] px-2 placeholder:text-placeholder-text placeholder:font-rubik placeholder:font-light placeholder:text-[16px]"
            />
          </div>
          <div>
            <button className=" bg-home-bg text-home-bg-black font-rubik font-medium py-2 lg:py-4 px-6 lg:px-12">
              SUBMIT
            </button>
          </div>
        </div>
      </motion.div>
      {/* --------------Div 3---------------- */}
      <div className="mt-8 space-y-2 lg:flex px-8">
        <div className="w-full lg:w-3/5  text-copyright-text text-[10px] text-center lg:text-[14px] font-light font-montserrat flex  items-center">
          <p>
            Copyright © 2024 Lakshmi Venkateshwara Furniture And Works pvt ltd.
            All rights reserved{" "}
          </p>
        </div>
        <div className="w-full lg:w-2/5 m-auto flex lg:justify-end">
          <img className="w-full" src={payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
