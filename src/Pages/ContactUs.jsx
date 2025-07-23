import React, { Suspense, lazy } from "react";
import arrow from "../assets/arrow down.svg";
import contact from "../assets/contact.png";
import arrow2 from "../assets/back.svg";
// import instagram from "../assets/instagram.png"
// import facebook from "../assets/facebook.png"
// import pinterest from "../assets/pinterest.png"
// import twitter from "../assets/twitter.png"
const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));

const ContactUs = () => {
  return (
    <Suspense>
      <Header />
      <div className="w-full mt-4 lg:px-8 px-4">
        <h1 className="text-center font-tomorrow font-bold text-h3-mobile">
          Contact Us
        </h1>
        <div className="font-roboto text-body-mobile flex gap-4 justify-center mt-4">
          <p>Home</p>
          <img className="w-4 -rotate-90" src={arrow} alt="" />
          <p>Contact Us</p>
        </div>
        <div className="mt-4">
          <img className="w-full" src={contact} alt="" />
        </div>
        <div className="flex flex-col lg:justify-between gap-6 lg:flex-row items-baseline mt-10">
          <div className="w-full lg:w-[40%] lg:pl-16  font-roboto">
          <p className="text-body-mobile lg:text-h4-desktop font-roboto font-medium">
            Information
          </p>
          <div className="flex flex-col mt-6  gap-6">

          
          <div className="text-subtext-mobile lg:text-[16px]">
            <p className="lg:text-[18px]">Call or chat for sales Enquiry</p>
            <p className="font-semibold italic">WhatsApp and calls</p>
            <p className="font-semibold italic">(+91 8884856173).</p>
          </div>
          <div className="text-subtext-mobile lg:text-[16px]">
            <p className="lg:text-[18px]">Support Mail:</p>
            <p className="font-extrabold">Email: sales@phoneix.com</p>
          </div>
          
          
          <div className="">
            <button className="py-2 px-8 text-subtext-mobile lg:text-[16px] font-rubik font-medium text-white  rounded-[10px] bg-auth-bg">
              find us on google map
            </button>
          </div>
          </div>
        </div>
        <div className="lg:w-[40%] ">
          <h1 className="font-rubik font-medium text-body-mobile lg:text-[24px]">
            We would love to hear from you!
          </h1>
          <form className="mt-4 space-y-4" action="">
            <input
              placeholder="Name"
              type="text"
              className="w-full py-2 border rounded-[20px] pl-4 placeholder:text-body-mobile placeholder:font-rubik placeholder:font-medium"
            />
            <input
              placeholder="Email"
              type="text"
              className="w-full py-2 border rounded-[20px] pl-4 placeholder:text-body-mobile placeholder:font-rubik placeholder:font-medium"
            />
            <input
              placeholder="Phone Number"
              type="text"
              className="w-full py-2 border rounded-[20px] pl-4 placeholder:text-body-mobile placeholder:font-rubik placeholder:font-medium"
            />
            <textarea
              placeholder="Comment"
              type="text"
              className="w-full h-36 resize-none  border rounded-[20px] p-4  placeholder:text-body-mobile placeholder:font-rubik placeholder:font-medium"
            />
            <button className="bg-auth-bg text-white px-10 font-rubik font-medium rounded-[10px] py-2">
              Send
            </button>
          </form>
        </div>
        </div>
        
      </div>
      <Footer />
    </Suspense>
  );
};

export default ContactUs;
