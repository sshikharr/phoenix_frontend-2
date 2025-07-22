import React, { Suspense, lazy, useState } from "react";
const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));
import arrow from "../assets/arrow down.svg";
import arrow2 from "../assets/back.svg";
import instagram from "../assets/instagram.png";
import facebook from "../assets/facebook.png";
import pinterest from "../assets/pinterest.png";
import twitter from "../assets/twitter.png";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordialDatas = [
    { title: "How do I search for chairs in the app?", content: "..." },
    { title: "How do I place an order?", content: "..." },
    { title: "What payment methods do you accept?", content: "..." },
    { title: "Is there a cash-on-delivery (COD) option?", content: "..." },
    { title: "Can I track my order?", content: "..." },
    { title: "What is your return policy?", content: "..." },
    { title: "When will I receive my refund?", content: "..." },
    { title: "How can I contact customer support?", content: "..." },
    { title: "How long does delivery take?", content: "..." },
    { title: "Can I see customer reviews and ratings for the chairs?", content: "..." },
  ];

  return (
    <Suspense>
      <Header />

      <main className="w-full px-6 py-8 space-y-6">
        {accordialDatas.map((data, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-start cursor-pointer"
              >
                <p className="text-body-mobile font-medium leading-snug">
                  {index + 1}. {data.title}
                </p>
                <img
                  src={arrow}
                  alt="Toggle"
                  className={`w-4 h-4 mt-1 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
              {isOpen && (
                <div className="mt-3 transition-all duration-300 ease-in-out">
                  <p className="text-subtext-mobile font-rubik leading-relaxed">
                    {data.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* Subscribe Section */}
      <section className="w-full px-6 text-center mt-10">
        <h2 className="font-roboto font-extrabold text-h4-mobile">Subscribe to our emails</h2>
        <p className="text-subtext-mobile font-roboto mt-4">
          Be the first to know about the new products and exclusive offers.
        </p>
        <div className="mt-4 relative">
          <input
            placeholder="Email"
            type="email"
            className="w-full border rounded-[20px] py-2 pl-6 pr-10 placeholder:text-black placeholder:text-opacity-50 placeholder:font-rubik text-body-mobile focus:outline-none focus:ring-2 focus:ring-black/20"
          />
          <img src={arrow2} alt="Submit" className="w-4 h-4 rotate-180 absolute top-3 right-4 cursor-pointer" />
        </div>
      </section>

      {/* Footer Section */}
      <footer className="w-full px-6 mt-12 pb-12 space-y-10">
        <div>
          <h3 className="font-roboto text-h4-mobile font-extrabold">Follow Us</h3>
          <div className="flex mt-4 gap-4">
            {[instagram, facebook, pinterest, twitter].map((icon, idx) => (
              <img
                key={idx}
                src={icon}
                alt="Social"
                className="w-6 h-6 hover:opacity-70 transition-opacity duration-200"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-roboto font-extrabold text-h4-mobile">My Account</h3>
          <ul className="mt-4 space-y-3 text-subtext-mobile font-roboto">
            <li className="hover:underline cursor-pointer">Account</li>
            <li className="hover:underline cursor-pointer">Order History</li>
            <li className="hover:underline cursor-pointer">Return Policy</li>
            <li className="hover:underline cursor-pointer">Refund Policy</li>
          </ul>
        </div>

        <div>
          <h3 className="font-roboto font-extrabold text-h4-mobile">Our Legals</h3>
          <ul className="mt-4 space-y-3 text-subtext-mobile font-roboto">
            <li className="hover:underline cursor-pointer">Terms & Conditions</li>
            <li className="hover:underline cursor-pointer">Privacy Policy</li>
            <li className="hover:underline cursor-pointer">Track Order</li>
            <li className="hover:underline cursor-pointer">Store Location</li>
          </ul>
        </div>
      </footer>

      <Footer />
    </Suspense>
  );
};

export default FAQs;
