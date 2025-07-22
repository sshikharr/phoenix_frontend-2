// import { useState } from "react";
// import close from "../assets/close black.svg";
// import pen from "../assets/pen.png";
// import back from "../assets/back.svg";
// import dropdown from "../assets/dropdown.svg";
// import shooping from "../assets/shopping-outline.png";
// import coupon from "../assets/coupon.png";
// import delivery from "../assets/delivery2.png";
// import add from "../assets/add.png";
// import plus from "../assets/plus.png";
// import minus from "../assets/minus.png";
// import { AnimatePresence, motion } from "framer-motion";
// import { useCart } from "../context/CartContext";

// const Cart = () => {
//   const {
//     cartItems,
//     incrementQuantity,
//     decrementQuantity,
//     removeFromCart,
//     getTotalItems,
//   } = useCart();
//   // const [isCartOpen, setIsCartOpen] = useState(false);
//   const [isCheckOut, setIsCheckOut] = useState(false);
//   const [isExpanded, setIsExpanded] = useState(false);
//   const [isExpanded2, setIsExpanded2] = useState(false);
//   const isLoggedIn = true;
//   const [pinCodeForm, setPinCodeForm] = useState(false);
//   const [deliveryForm, setDeliveryForm] = useState(false);
//   const [pinCode, setPinCode] = useState("");
//   const [savedPinCode, setSavedPinCode] = useState("");

//   // Form Data
//   const [city, setCity] = useState("");
//   const [state, setState] = useState("");
//   const [address, setAddress] = useState("");
//   const [email, setEmail] = useState("");
//   const [fullName, setFullName] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");

//   const handleAddressSave = () => {
//     const formData = {
//       city,
//       state,
//       address,
//       email,
//       fullName,
//       phoneNumber,
//     }
  
//     localStorage.setItem("formData", JSON.stringify(formData))
//     alert("Your Address Saved")
//   }

//   const calculateSubtotal = () => {
//     return cartItems.reduce(
//       (total, item) =>
//         total + item.quantity * Number(item.actualPrice.replace(/,/g, "")),
//       0
//     );
//   };

//   const handleToggle = () => {
//     setIsExpanded(!isExpanded); // Toggle the expanded state
//   };
//   const handleToggle2 = () => {
//     setIsExpanded2(!isExpanded2); // Toggle the expanded state
//   };

//   return (
//     <div>
//       {/* Cart */}
//       <AnimatePresence>
        
//           <motion.div
//             initial={{ x: "100%", opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             exit={{ x: "100%", opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="fixed inset-0 z-20 bg-black bg-opacity-50"
//           >
//             <div className="w-full  h-screen bg-white lg:w-1/3 fixed lg:right-0 lg:left-auto">
//               {/* Footer Header */}
//               <div className="flex px-4 py-4 items-center">
//                 <div className="w-1/2 h-full">
//                   <p className="font-roboto font-semibold text-h3-mobile">
//                     Shopping Cart
//                   </p>
//                 </div>
//                 <div className="w-1/2 flex justify-end  h-full">
//                   <img
//                     onClick={(e) => {
//                       e.preventDefault();
//                       // setIsCartOpen(false);
//                     }}
//                     className="w-6 h-6"
//                     src={close}
//                     alt=""
//                   />
//                 </div>
//               </div>
//               {/* Footer Content */}
//               <div className="px-4">
//                 {cartItems.map((cart) => (
//                   <div key={cart.id} className="flex mt-4">
//                     <div className="w-2/5 lg:w-1/5 px-2 h-fit">
//                       <img className="" src={cart.image1} alt="" />
//                     </div>
//                     <div className="w-4/5 px-2 h-fit pt-2">
//                       <p className="text-subtext-mobile lg:text-subtext-desktop font-roboto">
//                         {cart.description}
//                       </p>
//                       <p className="text-[10px] mt-1 font-roboto">
//                         Color: Brown
//                       </p>
//                       {/* <p className="mt-2 text-body-mobile lg:text-body-desktop font-roboto">
//                         ₹
//                         {new Intl.NumberFormat("en-IN").format(
//                           Number(cart.actualPrice.replace(/,/g, ""))
//                         )}
//                         .00
//                       </p> */}

//                       <div className="w-full flex py-2 items-center mt-2">
//                         <div className="w-1/2 h-full">
//                           <div className="relative flex items-center justify-center">
//                             <button
//                               onClick={() => decrementQuantity(cart.id)}
//                               className="absolute left-2 text-h2-mobile"
//                             >
//                               <img className="w-2 lg:w-4" src={minus} alt="" />
//                             </button>
//                             <input
//                               type="text"
//                               className="w-full  text-body-mobile lg:text-body-desktop border-2 py-2 text-center font-rubik"
//                               readOnly
//                               value={cart.quantity}
//                             />
//                             <button
//                               onClick={() => incrementQuantity(cart.id)}
//                               className="absolute right-2 text-h3-mobile"
//                             >
//                               <img className="w-2 lg:w-4" src={plus} alt="" />
//                             </button>
//                           </div>
//                         </div>
//                         <div className="w-1/2 h-fit flex justify-center">
//                           <button
//                             onClick={() => removeFromCart(cart.id)}
//                             className="border-b-2 text-subtext-mobile lg:text-subtext-desktop px-2"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               {/* Footer Cart */}
//               <div className="w-full lg:w-1/3 h-fit fixed bottom-0">
//                 <div>
//                   {/* Images */}
//                   <div className="w-full flex px-4 gap-4 ">
//                     <div className="border py-1 px-1 rounded-[8px]">
//                       <img className="w-10" src={pen} alt="" />
//                     </div>
//                     <div className="border py-1 px-1 rounded-[8px]">
//                       <img className="w-10" src={pen} alt="" />
//                     </div>
//                     <div className="border py-1 px-1 rounded-[8px]">
//                       <img className="w-10" src={pen} alt="" />
//                     </div>
//                   </div>
//                   {/* Sub Total */}
//                   <div className="w-full h-fit flex px-4 py-2">
//                     <div className="w-1/2">
//                       <p className="font-rubik text-body-mobile lg:text-body-desktop">
//                         Sub Total
//                       </p>
//                     </div>
//                     <div className="w-1/2 text-end">
//                       <p className="font-rubik text-body-mobile lg:text-body-desktop">
//                         ₹{" "}
//                         {new Intl.NumberFormat("en-IN").format(
//                           calculateSubtotal()
//                         )}
//                       </p>
//                     </div>
//                   </div>
//                   {/* Check Out */}
//                   <div className="w-full px-4 py-10">
//                     <button
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setIsCheckOut(true);
//                       }}
//                       className="w-full bg-black text-white font-rubik py-2"
//                     >
//                       Check Out
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
        
//       </AnimatePresence>
//       <AnimatePresence>
//         {isCheckOut && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.5 }}
//             className="fixed inset-0 z-50 bg-black bg-opacity-50"
//           >
//             <div className="fixed lg:w-1/3 lg:h-5/6  w-full h-screen lg:left-[30%] lg:top-20 bg-white pt-10">
//               <div className="relative flex w-full px-4 text-center justify-center items-center">
//                 <img
//                   onClick={(e) => {
//                     e.preventDefault();
//                     setIsCheckOut(false);
//                   }}
//                   className="w-6 absolute left-6"
//                   src={back}
//                   alt=""
//                 />
//                 <p className="font-tomorrow font-bold text-h2-mobile lg:text-h2-desktop">
//                   PHEONIX
//                 </p>
//               </div>
//               <div className="w-full mt-10 px-4 space-y-4">
//                 <div className="border border-black w-full">
//                   {/* Order Summary Header */}
//                   <div
//                     className="h-fit w-full flex px-2 cursor-pointer items-center justify-between py-4"
//                     onClick={handleToggle}
//                   >
//                     <div className="flex gap-2 items-center">
//                       <img className="w-6" src={shooping} alt="Shopping" />
//                       <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                         Order Summary
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                         {getTotalItems()} Item{getTotalItems() > 1 ? "s" : ""}{" "}
//                         (₹{" "}
//                         {new Intl.NumberFormat("en-IN").format(
//                           calculateSubtotal()
//                         )}
//                         )
//                       </p>
//                       <img
//                         className={`w-4 transform transition-transform ${
//                           isExpanded ? "rotate-180" : "rotate-0"
//                         }`}
//                         src={dropdown}
//                         alt="Dropdown"
//                       />
//                     </div>
//                   </div>

//                   {/* Expanded Content */}
//                   <AnimatePresence>
//                     {isExpanded && (
//                       <motion.div
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         transition={{ duration: 0.5 }}
//                         className="px-4 py-4  border-black"
//                       >
//                         <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                           Here’s some additional order information:
//                         </p>
//                         <ul className="list-disc pl-4">
//                           <li>Delivery Estimate: 3-5 business days</li>
//                           <li>Shipping Charges: Free</li>
//                           <li>Discount: ₹ 100</li>
//                         </ul>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>

//                 <div className="border border-black w-full">
//                   {/* Order Summary Header */}
//                   <div
//                     className="h-fit w-full flex px-2 cursor-pointer items-center justify-between py-4"
//                     onClick={handleToggle2}
//                   >
//                     <div className="flex gap-2 items-center">
//                       <img className="w-6" src={coupon} alt="Shopping" />
//                       <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                         Coupons/Gift Cards
//                       </p>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                         1 Available
//                       </p>
//                       <img
//                         className={`w-4 transform transition-transform ${
//                           isExpanded2 ? "rotate-180" : "rotate-0"
//                         }`}
//                         src={dropdown}
//                         alt="Dropdown"
//                       />
//                     </div>
//                   </div>

//                   {/* Expanded Content */}
//                   {isExpanded2 && (
//                     <motion.div
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       transition={{ duration: 0.5 }}
//                       className="px-4 py-4  border-black"
//                     >
//                       <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                         Here’s some additional order information:
//                       </p>
//                       <ul className="list-disc pl-4">
//                         <li>Delivery Estimate: 3-5 business days</li>
//                         <li>Shipping Charges: Free</li>
//                         <li>Discount: ₹ 100</li>
//                       </ul>
//                     </motion.div>
//                   )}
//                 </div>
//               </div>

//               <div className="mt-10 w-full h-fit px-4">
//                 {isLoggedIn ? (
//                   <div className="border border-black px-2 py-4">
//                     <div className="flex items-center text-center gap-2">
//                       <img className="w-6" src={delivery} alt="" />
//                       <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                         Deliver To
//                       </p>
//                     </div>
//                     {/* Pin Code */}
//                     {pinCodeForm && (
//                       <div className="absolute left-0 w-full  border border-b-0 rounded-t-[10px] border-black py-4 px-2 bottom-0">
//                         <div className="flex">
//                           <div className="w-1/2">
//                             <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                               Add New Address
//                             </p>
//                           </div>
//                           <div className="w-1/2 flex justify-end">
//                             <img
//                               className="w-6 cursor-pointer"
//                               onClick={(e) => {
//                                 e.preventDefault();
//                                 setPinCodeForm(false);
//                               }}
//                               src={close}
//                               alt=""
//                             />
//                           </div>
//                         </div>
//                         <div className="mt-4">
//                           <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                             Pincode*
//                           </p>
//                           <input
//                             type="text"
//                             className="w-full border border-black placeholder:font-roboto placeholder:text-subtext-mobile lg:placeholder:text-subtext-desktop placeholder:text-black placeholder:text-opacity-60 px-2 py-4 mt-2"
//                             placeholder="Pincode"
//                             value={pinCode}
//                             onChange={(e) => {
//                               setPinCode(e.target.value);
//                             }}
//                           />
//                           <button
//                             onClick={(e) => {
//                               e.preventDefault();
//                               localStorage.setItem("pincode", pinCode);
//                               setPinCode("");
//                               setSavedPinCode(pinCode);
//                               setDeliveryForm(true);
//                               setPinCodeForm(false);
//                             }}
//                             className="mt-4 py-2 w-full bg-black text-white font-rubik text-body-mobile lg:text-body-desktop"
//                           >
//                             Save Address
//                           </button>
//                         </div>
//                       </div>
//                     )}
//                     {deliveryForm && (
//                       <div className="absolute bottom-0 left-0 border-t bg-white  rounded-t-[10px] border-black py-4 px-2">
//                         <div className="flex">
//                           <div className="w-1/2">
//                             <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                               Add New Address
//                             </p>
//                           </div>
//                           <div className="w-1/2 flex justify-end">
//                             <img
//                               className="w-6 cursor-pointer"
//                               onClick={(e) => {
//                                 e.preventDefault();
//                                 setDeliveryForm(false);
//                               }}
//                               src={close}
//                               alt=""
//                             />
//                           </div>
//                         </div>
//                         <div className="px-2 mt-4">
//                           <form action="">
//                             <div className="flex items-center w-full gap-2">
//                               <div className="w-2/5 flex">
//                                 <p className="font-roboto text-auth-border  text-subtext-mobile lg:text-subtext-desktop">
//                                   Address
//                                 </p>
//                               </div>
//                               <div className="w-4/5">
//                                 <hr className="border-t border-auth-border" />
//                               </div>
//                             </div>
//                             <div className="px-2 mt-4">
//                               <label className="space-y-2">
//                                 <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                                   Pincode*
//                                 </p>
//                                 <input
//                                   className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
//                                   type="text"
//                                   value={savedPinCode}
//                                   placeholder="Pincode"
//                                 />
//                               </label>
//                               <div className="flex gap-4 mt-4">
//                                 {/* Input 1 */}
//                                 <label className="space-y-2 w-1/2">
//                                   <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                                     City*
//                                   </p>
//                                   <input
//                                     className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
//                                     type="text"
//                                     value={city}
//                                     onChange={(e) => setCity(e.target.value)}
//                                   />
//                                 </label>

//                                 {/* Input 2 */}
//                                 <label className="space-y-2 w-1/2">
//                                   <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                                     State*
//                                   </p>
//                                   <input
//                                     className="border border-black w-full lg:placeholder:text-subtext-desktop placeholder:text-subtext-mobile placeholder:text-auth-border px-2 py-2"
//                                     type="text"
//                                     value={state}
//                                     onChange={(e) => setState(e.target.value)}
//                                   />
//                                 </label>
//                               </div>
//                               <div className="mt-4 relative">
//                                 <label className="space-y-2">
//                                   <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                                     Full Address*
//                                   </p>
//                                   <input
//                                     className="placeholder:absolute  placeholder:top-2 border h-28 border-black w-full  lg:placeholder:text-subtext-desktop placeholder:text-subtext-mobile placeholder:text-auth-border px-2 py-2"
//                                     type="text"
//                                     placeholder="Your Address"
//                                     value={address}
//                                     onChange={(e) => setAddress(e.target.value)}
//                                   />
//                                 </label>
//                               </div>
//                             </div>

//                             <div className="flex items-center w-full mt-4 gap-2">
//                               <div className="w-2/5 flex">
//                                 <p className="font-roboto text-auth-border  text-subtext-mobile lg:text-subtext-desktop">
//                                   Personal Details
//                                 </p>
//                               </div>
//                               <div className="w-4/5">
//                                 <hr className="border-t border-auth-border" />
//                               </div>
//                             </div>
//                             <div className="mt-4">
//                               <label className="space-y-2">
//                                 <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                                   Email*
//                                 </p>
//                                 <input
//                                   className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
//                                   type="text"
//                                   placeholder="Email"
//                                   value={email}
//                                   onChange={(e) => setEmail(e.target.value)}
//                                 />
//                               </label>
//                             </div>
//                             <div className="mt-4">
//                               <label className="space-y-2">
//                                 <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                                   Full Name*
//                                 </p>
//                                 <input
//                                   className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
//                                   type="text"
//                                   placeholder="Full Name"
//                                   value={fullName}
//                                   onChange={(e) => setFullName(e.target.value)}
//                                 />
//                               </label>
//                             </div>
//                             <div className="mt-4">
//                               <label className="space-y-2">
//                                 <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
//                                   Phone Number*
//                                 </p>
//                                 <input
//                                   className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
//                                   type="text"
//                                   placeholder="Phone Number"
//                                   value={phoneNumber}
//                                   onChange={(e) =>
//                                     setPhoneNumber(e.target.value)
//                                   }
//                                 />
//                               </label>
//                             </div>
//                             <div className="mt-4">
//                               <button
//                                 onClick={handleAddressSave}
//                                 className="w-full bg-black py-2 text-white"
//                               >
//                                 Save Address
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     )}
//                     <div
//                       onClick={(e) => {
//                         e.preventDefault();
//                         setPinCodeForm(true);
//                       }}
//                       className="w-full h-10 border flex items-center text-center gap-2 py-6 px-2 mt-2 border-black cursor-pointer"
//                     >
//                       <img className="w-6" src={add} alt="" />
//                       <p className="font-roboto text-body-mobile lg:text-body-desktop">
//                         Add New Address
//                       </p>
//                     </div>
//                   </div>
//                 ) : (
//                   <div>
//                     <h1>Please login first</h1>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// };

// export default Cart;

import React from 'react'

const Cart = () => {
  return (
    <div > 
        <h1 className='text-black'>Hello</h1>
        <h1>Hello</h1>
    </div>
  )
}

export default Cart