import React, { Suspense, lazy, useState } from "react";
const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));
import arrow from "../assets/arrow down.svg";
// import arrow2 from "../assets/back.svg";
// import instagram from "../assets/instagram.png";
// import facebook from "../assets/facebook.png";
// import pinterest from "../assets/pinterest.png";
// import twitter from "../assets/twitter.png";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const accordialDatas = [
    {
      title: "How do I search for chairs in the app?",
      content:
        "You can search for chairs using the search bar at the top of the homepage. Simply enter keywords like 'gaming chair', 'ergonomic', or 'lumbar support' to find relevant products.",
    },
    {
      title: "How do I place an order?",
      content:
        "To place an order, browse the product, select the quantity, and click 'Add to Cart'. Once you're done, proceed to checkout, enter your shipping details, and complete the payment process.",
    },
    {
      title: "What payment methods do you accept?",
      content:
        "We accept a variety of payment options including UPI, credit/debit cards, net banking, and popular wallets. You can also choose cash on delivery if available in your area.",
    },
    {
      title: "Is there a cash-on-delivery (COD) option?",
      content:
        "Yes, we offer Cash on Delivery (COD) for selected pin codes. During checkout, you can see if COD is available for your location after entering your delivery address.",
    },
    {
      title: "Can I track my order?",
      content:
        "Absolutely! After placing your order, you’ll receive a tracking link via email and SMS. You can also track it anytime from the 'Track Order' section in the app.",
    },
    {
      title: "What is your return policy?",
      content:
        "We offer a 7-day return policy. If the product is damaged, defective, or not as described, you can request a return or exchange within 7 days of delivery.",
    },
    {
      title: "When will I receive my refund?",
      content:
        "Once we receive and inspect the returned item, your refund will be processed within 5–7 business days. The amount will be credited to your original payment method.",
    },
    {
      title: "How can I contact customer support?",
      content:
        "You can reach our support team through the 'Contact Us' section in the app or email us at support@phoenixchairs.in. Our team is available Monday to Saturday from 10 AM to 7 PM.",
    },
    {
      title: "How long does delivery take?",
      content:
        "Delivery usually takes 3–7 business days depending on your location. During peak seasons, delivery times may vary slightly.",
    },
    {
      title: "Can I see customer reviews and ratings for the chairs?",
      content:
        "Yes! On every product page, scroll down to see genuine customer reviews, star ratings, and photos shared by other buyers to help you make the right choice.",
    },
  ];

  return (
    <Suspense>
      <Header />
      <div className="lg:w-[80%] lg:m-auto px-4 mt-4 lg:mt-8">
        <h1 className="font-tomorrow font-bold text-[28px] lg:text-[48px] leading-none text-[#292829]">
          Frequently Asked <br />
          Questions ?
        </h1>
      </div>
      <main className="w-full lg:w-[80%] m-auto px-4 py-8 space-y-6">
        {accordialDatas.map((data, index) => {
          const isOpen = activeIndex === index;
          return (
            <div key={index} className="border-b border-gray-200 pb-4">
              <div
                onClick={() => toggleAccordion(index)}
                className="flex justify-between items-start cursor-pointer"
              >
                <p className="text-body-mobile lg:text-[18px] font-medium leading-snug">
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
                  <p className="text-subtext-mobile lg:text-[16px] font-rubik leading-relaxed">
                    {data.content}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* Subscribe Section */}
      {/* <section className="w-full lg:w-[60%] lg:m-auto px-6 text-center mt-10">
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
      </section> */}

      {/* Footer Section */}
      {/* <footer className="w-full flex flex-col lg:flex-row  items-baseline lg:w-[0%] lg:gap-8 lg:m-auto px-6 pt-6 pb-12 space-y-10">
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
      </footer> */}

      <Footer />
    </Suspense>
  );
};

export default FAQs;
