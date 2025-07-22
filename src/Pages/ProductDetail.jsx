// import React, { useEffect, useState, Suspense } from "react";

// import { useLocation, Link, useParams } from "react-router-dom";
// import star from "../assets/start.png";
// import direction from "../assets/Group .png";
// import delivery from "../assets/delivery.svg";
// import payment from "../assets/payment-method.svg";
// import exchange from "../assets/transfer.svg";

// // Product Detail
// import { getProducts } from "../services/productService";
// import products from "../products";
// import Header from "../common/Header";

// const Footer = React.lazy(() => import("../components/Footer"));

// const ProductDetail = () => {
//   // const [products, setProducts] = useState(null);
//   const [pinCode, setPinCode] = useState("");
//   const [productDetail, setProductDetail] = useState([]);
//   const [isCheckPin, setIsCheckPin] = useState(false);

//   useEffect(() => {
//     window.scrollTo(0, 0); // Scroll to the top of the page
//   }, []);

//   const { id } = useParams();

//   useEffect(() => {
//     const fetchedProduct = products.find(
//       (product) => String(product.id) === id
//     );
//     setProductDetail(fetchedProduct);
//   }, []);



//   const [items, setItems] = useState(1);

//   // Handle item count change
//   const handleDecrement = () => {
//     if (items > 1) {
//       setItems(items - 1); // Decrease item count, ensuring it doesn't go below 1
//     }
//   };

//   const handleIncrement = () => {
//     setItems(items + 1); // Increase item count
//   };

//   const handleInputChange = (e) => {
//     setPinCode(e.target.value);
//   };

//   const handleCheckPin = () => {
//     if (isCheckPin) {
//       // Reset state when "Change" is clicked
//       setPinCode("");
//       setIsCheckPin(false);
//     } else if (pinCode.trim()) {
//       // Show additional content when "Check" is clicked
//       setIsCheckPin(true);
//     }
//   };

//   const [mainImage, setMainImage] = useState(productDetail?.image1);

//   if (!productDetail) return null;

//   const images = [
//     productDetail.image1,
//     productDetail.image2,
//     productDetail.image3,
//     productDetail.image4,
//   ];

//   return (
//     <div className="w-full h-screen">
//       <Header />

//       {/* -----------------------Product Image Section---------------------------- */}
//       <div className="w-full px-8 lg:px-32  h-fit lg:flex mt-0 lg:mt-16">
//         <div className="w-full lg:w-1/2 h-full mt-4">
//           {/* Main Image */}
//           <div className="h-[400px]">
//             <img
//               className="h-[400px] w-auto m-auto object-contain cursor-pointer"
//               src={mainImage || productDetail.image1}
//               alt="Product main view"
//             />
//           </div>

//           {/* Thumbnail Images */}
//           <div className="lg:h-[150px] flex justify-center gap-2 lg:gap-4 mt-4">
//             {images.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Product view ${index + 1}`}
//                 className={`h-[80px] lg:h-[100px] w-auto object-contain cursor-pointer transition-all duration-200 ${
//                   mainImage === image
//                     ? "border-2 border-blue-500"
//                     : "opacity-70 hover:opacity-100"
//                 }`}
//                 onClick={() => setMainImage(image)}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Product Details */}
//         <div className="w-full lg:w-1/2 h-full">
//           <div className=" h-full">
//             {productDetail && (
//               <div key={products.id} className="pr-0 mt-6">
//                 <p className="font-rubik lg:text-h4-desktop text-body-mobile ">
//                   {productDetail.description}
//                 </p>
//                 <p className="flex items-center  gap-2 mt-4">
//                   <img className="h-4 w-24" src={star} alt="" />{" "}
//                   <span className="text-arrivals-rating font-light font-rubik text-[10px] mt-1">
//                     2000
//                   </span>
//                 </p>
//                 <p className=" mt-6 font-rubik">
//                   <span className="font-medium text-black text-h4-mobile lg:text-h4-desktop">
//                     {/* ₹{new Intl.NumberFormat("en-IN").format(Number(productDetail.actualPrice.replace(/,/g, "")))}.00 */}
//                     ₹{productDetail.actualPrice}.00
//                   </span>{" "}
//                   <span className="text-gray-price text-[10px] line-through pl-4">
//                     {/* ₹{new Intl.NumberFormat("en-IN").format(Number(productDetail.price.replace(/,/g, "")))}.00 */}
//                     ₹{productDetail.price}.00
//                   </span>{" "}
//                   <span className="font-medium text-off-text text-subtext-mobile lg:text-subtext-desktop pl-3">
//                     (65% OFF)
//                   </span>
//                 </p>
//                 <p className="font-rubik text-tax-text text-[12px] ">
//                   Inclusive of all taxes
//                 </p>
//               </div>
//             )}
//           </div>

//           <div className="mt-4">
//             <div className="hidden lg:block">
//               <div>
//                 <p className="font-rubik text-quantity-text font-light text-[18px]">
//                   Quantity
//                 </p>
//               </div>

//               {/* Items */}
//               <div className="mt-2 flex items-center gap-4">
//                 <div className="relative">
//                   {/* Decrement Button */}
//                   <button
//                     onClick={handleDecrement}
//                     className="absolute top-1/2 left-2 text-2xl transform -translate-y-1/2 text-quantity-value"
//                   >
//                     -
//                   </button>

//                   {/* Input Field */}
//                   <input
//                     className="border  w-28 py-4 text-center rounded-[8px] text-xl text-quantity-value border-quantity-border"
//                     type="text"
//                     value={items}
//                     readOnly
//                   />

//                   {/* Increment Button */}
//                   <button
//                     onClick={handleIncrement}
//                     className="absolute top-1/2 right-2 text-2xl transform -translate-y-1/2 text-quantity-value"
//                   >
//                     +
//                   </button>
//                 </div>

//                 <div>
//                   <button className="py-4 border px-8 bg-home-bg-black text-white font-rubik">
//                     ADD TO CART
//                   </button>
//                 </div>
//               </div>
//             </div>
//             {/* For Mobile */}
//             <div className="lg:hidden">
//               <div className="w-full m-auto flex justify-center items-center">
//                 <div className="w-2/5">
//                   <p className="font-rubik text-quantity-text font-light text-h2-mobile ">
//                     Quantity
//                   </p>
//                 </div>
//                 <div className="w-3/5">
//                   <div className="relative">
//                     {/* Decrement Button */}
//                     <button
//                       onClick={handleDecrement}
//                       className="absolute top-1/2 left-4 text-h2-mobile transform -translate-y-1/2 text-quantity-value"
//                     >
//                       -
//                     </button>

//                     {/* Input Field */}
//                     <input
//                       className="border w-full py-4 text-center rounded-[8px] text-h2-mobile text-quantity-value border-quantity-border"
//                       type="text"
//                       value={items}
//                       readOnly
//                     />

//                     {/* Increment Button */}
//                     <button
//                       onClick={handleIncrement}
//                       className="absolute top-1/2 right-4 text-h2-mobile transform -translate-y-1/2 text-quantity-value"
//                     >
//                       +
//                     </button>
//                   </div>
//                 </div>
//               </div>
//               <div>
//                 <button className="w-full mt-4 m-auto flex py-4 border px-8 bg-home-bg-black text-white font-rubik">
//                   ADD TO CART
//                 </button>
//               </div>
//             </div>

//             {/* Availability */}
//             <div className="mt-8">
//               <h1 className="flex items-center gap-4 font-rubik font-medium lg:text-h4-desktop text-h4-mobile text-home-bg-black">
//                 {" "}
//                 <img className="w-4 h-6" src={direction} alt="" /> 
//                 Check for Delivery Details
//               </h1>
//               <div className="relative mt-4">
//                 <input
//                   type="text"
//                   value={pinCode}
//                   onChange={handleInputChange}
//                   placeholder="Enter your pincode"
//                   className="w-full lg:w-2/3 border border-check-border py-4 rounded-[8px] placeholder:text-[18px] pl-4 font-rubik placeholder:font-rubik"
//                 />
//                 <button
//                   onClick={handleCheckPin}
//                   disabled={!pinCode.trim() && !isCheckPin} // Disable when no input and not in "Change" state
//                   className={`absolute right-4 lg:right-[35%] font-rubik text-[14px] top-1/2 -translate-y-1/2 ${
//                     pinCode.trim() || isCheckPin
//                       ? "text-home-bg-black cursor-pointer"
//                       : "text-home-bg-black cursor-not-allowed"
//                   }`}
//                 >
//                   {!isCheckPin ? "Check" : "Change"}
//                 </button>
//               </div>
//               <p className="text-tax-text text-[9px] lg:text-subtext-desktop">
//                 Please enter PIN code to check delivery time & Pay on Delivery
//                 Availability
//               </p>
//               {isCheckPin && (
//                 <div className="mt-2 space-y-4">
//                   <p className="flex items-center gap-6 font-rubik text-[16px]">
//                     <img className="w-8" src={delivery} alt="" />
//                     Get it by Fri, Jan 03
//                   </p>
//                   <p className="flex items-center gap-6 font-rubik text-[16px]">
//                     <img className="w-8" src={payment} alt="" />
//                     Pay on delivery available
//                   </p>
//                   <p className="flex items-center gap-6 font-rubik text-[16px]">
//                     <img className="w-8" src={exchange} alt="" />
//                     Easy 7 days return & exchange available
//                   </p>
//                 </div>
//               )}
//               <div className="mt-4 font-rubik text-black text-[10px] lg:text-subtext-desktop">
//                 <p>100% Original Products</p>
//                 <p>Pay on delivery might be available</p>
//                 <p>Easy 30 days returns and exchanges</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Suspense>
//         <Footer />
//       </Suspense>
//     </div>
//   );
// };

// export default ProductDetail;

import React, { useEffect, useState, Suspense } from "react";
import star from "../assets/start.png";
import direction from "../assets/Group .png";
import delivery from "../assets/delivery.svg";
import payment from "../assets/payment-method.svg";
import exchange from "../assets/transfer.svg";
import Header from "../common/Header";
const Footer = React.lazy(() => import("../components/Footer"));
import chair1 from "../assets/chair1.png"
import chair2 from "../assets/chair2.png"
import chair3 from "../assets/chair3.png"
import chair4 from "../assets/chair4.png"

const ProductDetail = () => {
  const [pinCode, setPinCode] = useState("");
  const [isCheckPin, setIsCheckPin] = useState(false);
  const [items, setItems] = useState(1);

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
        <div className="w-full lg:w-1/2 h-full mt-4">
          <div className="h-[400px]">
            <img
              className="h-[400px] w-auto m-auto object-contain"
              src={mainImage}
              alt="Product"
            />
          </div>

          <div className="lg:h-[150px] flex justify-center gap-2 lg:gap-4 mt-4">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Product ${index + 1}`}
                className={`h-[80px] lg:h-[100px] w-auto object-contain cursor-pointer transition-all duration-200 ${
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
            <p className="font-rubik lg:text-h4-desktop text-body-mobile">
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

