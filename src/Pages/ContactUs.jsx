import React, { Suspense, lazy } from "react";
import arrow from "../assets/arrow down.svg";
import contact from "../assets/contact.png";
import arrow2 from "../assets/back.svg";
import instagram from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import pinterest from "../assets/pinterest.png"
import twitter from "../assets/twitter.png"
const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));

const ContactUs = () => {
  return (
    <Suspense>
      <Header />
      <div className="w-full mt-4">
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
        <div className="w-full px-8 mt-2 font-roboto">
          <p className="text-body-mobile font-roboto font-medium">
            Information
          </p>
          <div className="text-subtext-mobile mt-4">
            <p>Call or chat for sales Enquiry</p>
            <p className="font-semibold italic">WhatsApp and calls</p>
            <p className="font-semibold italic">(+91 8884856173).</p>
          </div>
          <div className="text-subtext-mobile mt-4">
            <p>Support Mail:</p>
            <p className="font-extrabold">Email: sales@phoneix.com</p>
          </div>
          <div className="text-subtext-mobile mt-4">
            <p>Call or chat for Support Enquiry</p>
            <p className="font-semibold italic">WhatsApp and calls</p>
            <p className="font-semibold italic">(+91 8884856173).</p>
          </div>
          <div className="text-subtext-mobile mt-4">
            <p>Support Mail:</p>
            <p className="font-extrabold">Email: support@phoneix.com</p>
          </div>
          <div className="pl-2 mt-4">
            <button className="py-2 px-8 text-subtext-mobile font-rubik font-medium text-white  rounded-[10px] bg-auth-bg">
              find us on google map
            </button>
          </div>
        </div>
        <div className="mt-8 px-8">
          <h1 className="font-rubik font-medium text-body-mobile">
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
            <input
              placeholder="Comment"
              type="text"
              className="w-full h-36  border rounded-[20px] pl-4  placeholder:text-body-mobile placeholder:font-rubik placeholder:font-medium"
            />
            <button className="bg-auth-bg text-white px-10 font-rubik font-medium rounded-[10px] py-2">
              Send
            </button>
          </form>
        </div>
        <div>
          <div className="w-full px-8 h-fit text-center mt-10">
            <p className="font-roboto font-extrabold text-h4-mobile">
              Subscribe to our emails
            </p>
            <p className="text-subtext-mobile font-roboto px-4 mt-4">
              Be the first to know about the new products and exclusive offers.
            </p>
            <div className="mt-4 relative">
              <input
                placeholder="Email"
                type="text"
                className="w-full border rounded-[20px] py-2 placeholder:text-black placeholder:text-opacity-50 placeholder:font-rubik pl-6 placeholder:text-body-mobile"
              />
              <img
                className="w-4 h-4 rotate-180 absolute top-3 right-4"
                src={arrow2}
                alt=""
              />
            </div>
          </div>
          <div className="w-full px-8 mt-8">
          <p className="font-roboto text-h4-mobile font-extrabold">Follow Us</p>
          <div className="flex mt-4 gap-2">
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
              <img src={pinterest} alt="" />
              <img src={twitter} alt="" />
          </div>

          <div className="mt-8">
            <p className="font-roboto font-extrabold text-h4-mobile">My Account</p>
            <ul className="font-roboto font-normal text-subtext-mobile mt-4 space-y-4">
              <li>Account</li>
              <li>order history</li>
              <li>Return Policy</li>
              <li>Refund Policy</li>
            </ul>
          </div>
          <div className="mt-8">
            <p className="font-roboto font-extrabold text-h4-mobile">Our Legals</p>
            <ul className="font-roboto font-normal text-subtext-mobile mt-4 space-y-4">
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Track Order</li>
              <li>Store Location</li>
            </ul>
          </div>
      </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default ContactUs;
