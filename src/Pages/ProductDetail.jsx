import React, { useState, Suspense } from "react";
import star from "../assets/start.png";
import direction from "../assets/Group .png";
import delivery from "../assets/delivery.svg";
import payment from "../assets/payment-method.svg";
import exchange from "../assets/transfer.svg";
import Header from "../common/Header";
const Footer = React.lazy(() => import("../components/Footer"));
import chair1 from "../assets/chair1.png";
import chair2 from "../assets/chair2.png";
import chair3 from "../assets/chair3.png";
import chair4 from "../assets/chair4.png";
import star2 from "../assets/star 1.png";
import star3 from "../assets/star 2.png";
import star4 from "../assets/StarWhite.png";

const ProductDetail = () => {
  const [pinCode, setPinCode] = useState("");
  const [isCheckPin, setIsCheckPin] = useState(false);
  const [items, setItems] = useState(1);

  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { key: "description", label: "Product Description" },
    { key: "shipping", label: "Shipping & Delivery" },
    { key: "return", label: "Return Policy" },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div className="mt-4 space-y-4 text-[#2d2d2d] font-rubik lg:text-[18px] text-[18px]">
            <p>
              Introducing our Premium Ergonomic Office Chair – expertly crafted
              to deliver maximum comfort, posture support, and stylish
              aesthetics. Whether you're working long hours or gaming, this
              chair offers advanced lumbar support, adjustable height, and a
              breathable mesh back to keep you cool and comfortable.
            </p>
            <p>
              Key Features:
              <ul className="list-disc ml-5 mt-2">
                <li>High-density molded foam cushion for lasting comfort</li>
                <li>Adjustable armrests, seat height, and tilt tension</li>
                <li>Breathable mesh back for optimal airflow</li>
                <li>
                  Durable, heavy-duty metal base with smooth-rolling wheels
                </li>
                <li>Modern design that fits any workspace aesthetic</li>
              </ul>
            </p>
            <p>
              Whether you're setting up a home office or upgrading your
              professional setup, this chair is a must-have for anyone who
              values comfort, health, and productivity.
            </p>
          </div>
        );

      case "shipping":
        return (
          <div className="mt-4 space-y-3 text-[#2d2d2d] font-rubik lg:text-[18px] text-[18px]">
            <p>
              <strong>Delivery Time:</strong> Orders are typically shipped
              within 1-2 business days. Delivery may take 3-7 business days
              depending on your location.
            </p>
            <p>
              <strong>Shipping Charges:</strong> We offer FREE standard shipping
              on all domestic orders. Expedited shipping options are available
              at checkout.
            </p>
            <p>
              <strong>Order Tracking:</strong> Once your order is shipped, you
              will receive an email with a tracking link to monitor your
              shipment in real-time.
            </p>
            <p>
              <strong>International Shipping:</strong> Currently, we only ship
              within India. Stay tuned as we expand to international markets.
            </p>
          </div>
        );

      case "return":
        return (
          <div className="mt-4 space-y-3 text-[#2d2d2d] font-rubik lg:text-[18px] text-[18px]">
            <p>
              <strong>Easy 7-Day Return Policy:</strong> Not satisfied with your
              purchase? Return it within 7 days of delivery—no questions asked.
            </p>
            <p>
              <strong>Return Conditions:</strong> Items must be unused,
              undamaged, and returned in original packaging with tags.
            </p>
            <p>
              <strong>Refunds:</strong> Once the product is received and
              inspected, we will process your refund within 5–7 business days to
              the original payment method.
            </p>
            <p>
              <strong>Return Process:</strong> Contact our support team at{" "}
              <a href="mailto:support@example.com" className="underline">
                support@example.com
              </a>{" "}
              with your order number to initiate a return.
            </p>
          </div>
        );

      default:
        return null;
    }
  };

  const productDetail = {
    id: 1,
    title: "Ergonomic Office Chair",
    description: "High-back mesh chair with lumbar support and padded seat.",
    actualPrice: "3,499",
    price: "9,999",
    image1: chair1,
    image2: chair2,
    image3: chair3,
    image4: chair4,
  };

  const [mainImage, setMainImage] = useState(productDetail.image1);

  const images = [
    productDetail.image1,
    productDetail.image2,
    productDetail.image3,
    productDetail.image4,
  ];

  const handleDecrement = () => {
    if (items > 1) setItems(items - 1);
  };

  const handleIncrement = () => {
    setItems(items + 1);
  };

  const handleInputChange = (e) => {
    setPinCode(e.target.value);
  };

  const handleCheckPin = () => {
    if (isCheckPin) {
      setPinCode("");
      setIsCheckPin(false);
    } else if (pinCode.trim()) {
      setIsCheckPin(true);
    }
  };

  return (
    <div className="w-full h-screen">
      <Header />

      {/* -----------------------Product Image Section--------------------------- */}
      <div className="w-full px-8 lg:px-32 h-fit lg:flex mt-0 lg:mt-16">
        <div className="w-full lg:w-1/2 h-fit mt-0">
          <div className="h-[400px]">
            <img
              className="h-[400px] m-auto lg:m-0 lg:h-[500px]  w-auto"
              src={mainImage}
              alt="Product"
            />
          </div>

          <div className="lg:h-[150px] flex  gap-2 lg:gap-6 mt-4 lg:mt-28">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className={`h-[80px] lg:h-[100px] w-auto m-auto lg:m-0 object-contain cursor-pointer transition-all duration-200 ${
                  mainImage === image
                    ? "border-2 border-blue-500"
                    : "opacity-70 hover:opacity-100"
                }`}
                onClick={() => setMainImage(image)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 h-full">
          <div className="h-full mt-6">
            <p className="font-rubik lg:text-h4-desktop text-body-mobile font-medium">
              {productDetail.description}
            </p>
            <p className="flex items-center gap-2 mt-4">
              <img className="h-4 w-24" src={star} alt="rating" />
              <span className="text-arrivals-rating font-light font-rubik text-[10px] mt-1">
                2000
              </span>
            </p>
            <p className="mt-6 font-rubik">
              <span className="font-medium text-black text-h4-mobile lg:text-h4-desktop">
                ₹{productDetail.actualPrice}
              </span>
              <span className="text-gray-price text-[10px] line-through pl-4">
                ₹{productDetail.price}
              </span>
              <span className="font-medium text-off-text text-subtext-mobile lg:text-subtext-desktop pl-3">
                (65% OFF)
              </span>
            </p>
            <p className="font-rubik text-tax-text text-[12px]">
              Inclusive of all taxes
            </p>
          </div>

          {/* Quantity Selector */}
          <div className="mt-6">
            <p className="font-rubik text-quantity-text text-[18px]">
              Quantity
            </p>
            <div className="mt-2 flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={handleDecrement}
                  className="absolute top-1/2 left-2 text-2xl -translate-y-1/2"
                >
                  -
                </button>
                <input
                  className="border w-28 py-4 text-center rounded-[8px] text-xl"
                  type="text"
                  value={items}
                  readOnly
                />
                <button
                  onClick={handleIncrement}
                  className="absolute top-1/2 right-2 text-2xl -translate-y-1/2"
                >
                  +
                </button>
              </div>

              <button className="py-4 border px-8 bg-home-bg-black text-white font-rubik">
                ADD TO CART
              </button>
            </div>
          </div>

          {/* Check PIN Section */}
          <div className="mt-8">
            <h1 className="flex items-center gap-4 font-rubik font-medium lg:text-h4-desktop text-h4-mobile text-home-bg-black">
              <img className="w-4 h-6" src={direction} alt="location" />
              Check for Delivery Details
            </h1>

            <div className="relative mt-4">
              <input
                type="text"
                value={pinCode}
                onChange={handleInputChange}
                placeholder="Enter your pincode"
                className="w-full lg:w-2/3 border border-check-border py-4 rounded-[8px] pl-4 font-rubik"
              />
              <button
                onClick={handleCheckPin}
                disabled={!pinCode.trim() && !isCheckPin}
                className={`absolute right-4 lg:right-[35%] font-rubik text-[14px] top-1/2 -translate-y-1/2 ${
                  pinCode.trim() || isCheckPin
                    ? "text-home-bg-black cursor-pointer"
                    : "cursor-not-allowed text-gray-400"
                }`}
              >
                {!isCheckPin ? "Check" : "Change"}
              </button>
            </div>

            <p className="text-tax-text text-[9px] lg:text-subtext-desktop">
              Please enter PIN code to check delivery time & Pay on Delivery
              Availability
            </p>

            {isCheckPin && (
              <div className="mt-2 space-y-4">
                <p className="flex items-center gap-6 font-rubik text-[16px]">
                  <img className="w-8" src={delivery} alt="delivery" />
                  Get it by Fri, Jan 03
                </p>
                <p className="flex items-center gap-6 font-rubik text-[16px]">
                  <img className="w-8" src={payment} alt="payment" />
                  Pay on delivery available
                </p>
                <p className="flex items-center gap-6 font-rubik text-[16px]">
                  <img className="w-8" src={exchange} alt="exchange" />
                  Easy 7 days return & exchange available
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Detail */}
      <div className="lg:px-32 px-8 mt-6">
        <div className="overflow-x-auto scrollbar-hide lg:overflow-visible">
          <div className="flex text-[#2d2d2d] gap-4 lg:gap-12 items-baseline font-rubik text-[18px]  border-b border-[#B2B2B2] w-max lg:w-[70%] lg:py-0 px-0 ">
            {tabs.map((tab) => (
              <p
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`cursor-pointer pb-2 whitespace-nowrap ${
                  activeTab === tab.key
                    ? "border-b-2 border-[#000000] font-medium lg:text-[22px]"
                    : "border-b-2 border-transparent font-normal lg:text-[18px]"
                }`}
              >
                {tab.label}
              </p>
            ))}
          </div>
        </div>

        <div className="text-[#2d2d2d] font-rubik text-[18px] lg:text-[20px] mt-6">
          {renderContent()}
        </div>
      </div>
      {/* Rating */}
      <div className="lg:px-32 px-8 mt-10 ">
        <div className="border-t-[1px] border-b-[1px] border-[#b2b2b2] lg:w-[70%] py-6 lg:py-10">
          <p className="text-[#292829] font-medium lg:text-[22px] text-[20px]">
            Rating
          </p>
          <div className="flex gap-6 lg:gap-10 mt-2">
            <div className="flex items-center gap-2">
              <p className="font-rubik text-[28px]  lg:text-[36px]">4.2</p>
              <img className="h-6 w-auto" src={star2} alt="" />
            </div>
            <div className="border-l-[1px] border-[#aaaaaa] py-2 px-4">
              <div className="flex items-center gap-2">
                <p className="font-rubik text-[#7F7F7F] lg:text-[16px]">5</p>
                <img className="w-2" src={star3} alt="" />
                <div className="relative w-24 lg:w-28 h-1 bg-[#D9D9D9] overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-[#5CB85C] w-[90%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-rubik text-[#7F7F7F] lg:text-[16px]">4</p>
                <img className="w-2" src={star3} alt="" />
                <div className="relative w-24 lg:w-28 h-1 bg-[#D9D9D9] overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-[#80E3A6] w-[75%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-rubik text-[#7F7F7F] lg:text-[16px]">3</p>
                <img className="w-2" src={star3} alt="" />
                <div className="relative w-24 lg:w-28 h-1 bg-[#D9D9D9] overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-[#FFC107] w-[45%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-rubik text-[#7F7F7F] lg:text-[16px]">2</p>
                <img className="w-2" src={star3} alt="" />
                <div className="relative w-24 lg:w-28 h-1 bg-[#D9D9D9] overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-[#FD7E14] w-[55%]"></div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-rubik text-[#7F7F7F] lg:text-[16px]">1</p>
                <img className="w-2" src={star3} alt="" />
                <div className="relative w-24 lg:w-28 h-1 bg-[#D9D9D9] overflow-hidden">
                  <div className="absolute left-0 top-0 h-full bg-[#DC3545] w-[35%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Review */}
      <div className="lg:px-32 px-8 lg:mt-10 mt-6">
        <p className="text-[2d2d2d] font-rubik font-medium lg:text-[20px]">
          Customer Reviews (18)
        </p>
        <div className="flex items-baseline gap-4 border-b-[1px] border-[#666666] py-4 lg:py-6">
          <div className="flex gap-1 h-fit items-center bg-green-500 px-2">
            <p className="font-rubik text-white lg:text-[12px]">5</p>
            <svg
              fill="#fff"
              width="12px"
              height="12px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"></path>
            </svg>
          </div>
          <div className="font-rubik font-light text-[#292829] lg:text-[20px]">
            <p>
              We’ve equipped our entire workspace with these chairs, and the
              feedback has been overwhelmingly positive. Their ergonomic design
              has made a noticeable difference in reducing fatigue and improving
              focus during long work hours.
            </p>
          </div>
        </div>
        <div className="flex items-baseline gap-4 border-b-[1px] border-[#666666] py-4 lg:py-6">
          <div className="flex gap-1 h-fit items-center bg-[#80E3A6] px-2">
            <p className="font-rubik text-white lg:text-[12px]">4</p>
            <svg
              fill="#fff"
              width="12px"
              height="12px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"></path>
            </svg>
          </div>
          <div className="font-rubik font-light text-[#292829] lg:text-[20px]">
            <p>
              We’ve equipped our entire workspace with these chairs, and the
              feedback has been overwhelmingly positive. Their ergonomic design
              has made a noticeable difference in reducing fatigue and improving
              focus during long work hours.
            </p>
          </div>
        </div>
      </div>

      <Suspense fallback={<div>Loading Footer...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default ProductDetail;

// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";

// const ProductDetail = () => {
//   const { id } = useParams(); // Get ID from URL
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     // Replace with your actual backend URL or Firebase logic
//     const fetchProduct = async () => {
//       try {
//         const response = await fetch(`https://your-backend.com/products/${id}`);
//         const data = await response.json();
//         setProduct(data);
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) return <p className="text-center mt-10">Loading product...</p>;

//   return (
//     <div className="max-w-4xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
//       <img className="w-full max-w-md mb-4" src={product.image1} alt={product.title} />
//       <p className="text-lg text-gray-600 mb-4">{product.description}</p>
//       <p className="text-xl font-semibold">₹ {product.price}</p>
//     </div>
//   );
// };

// export default ProductDetail;
