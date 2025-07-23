import { useState, useEffect, useContext } from "react";
import search from "../assets/Vector.png";
import user from "../assets/user 1.png";

import cart from "../assets/shopping-cart.png";

import { motion, AnimatePresence } from "framer-motion";
import down from "../assets/down.png";
import line from "../assets/Line 145.png";
import shopby from "../assets/shopby.png";
import basic from "../assets/basic.png";
import luxury from "../assets/luxury.png";
import gaming from "../assets/gaming.png";
import wfh from "../assets/wfh.png";
import boss from "../assets/boss.png";
import executive from "../assets/executive.png";
import { Link, useNavigate } from "react-router-dom";
import menu from "../assets/menu.svg";
import close from "../assets/close black.svg";
import arrow from "../assets/down-arrow.svg";
import back from "../assets/back.svg";
import dropdown from "../assets/dropdown.svg";
import plus from "../assets/plus.png";
import minus from "../assets/minus.png";
import pen from "../assets/pen.png";
import truck from "../assets/mage_delivery-truck.png";
import ticket from "../assets/f7_tickets.png";
import shooping from "../assets/shopping-outline.png";
import coupon from "../assets/coupon.png";
import delivery from "../assets/delivery2.png";
import add from "../assets/add.png";
import { FixedSizeList as List } from "react-window";
import { CartContext } from "../context/CartContext";
import { ArrowRight, ShoppingCart } from "lucide-react";

const Header = () => {
  const { cartItems, increaseQty, decreaseQty, removeFromCart } =
    useContext(CartContext);
  const { calculateSubtotal } = useContext(CartContext);

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShopByOpen, setIsShopByOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCheckOut, setIsCheckOut] = useState(false);

  // Shop By Mobile
  const [isShopBy, setIsShopBy] = useState(false);
  const [isSupportNeed, setIsSupportNeed] = useState(false);
  const [isPrice, setIsPrice] = useState(false);
  const [isFeatures, setIsFeatures] = useState(false);
  const [isBestSeller, setIsBestSeller] = useState(false);
  const [isNewArrival, setIsNewArrival] = useState(false);
  // Collection Mobile
  const [isCollections, setIsCollections] = useState(false);

  const [isExpanded, setIsExpanded] = useState(false);
  const [isExpanded2, setIsExpanded2] = useState(false);

  const [pinCodeForm, setPinCodeForm] = useState(false);
  const [deliveryForm, setDeliveryForm] = useState(false);
  const [pinCode, setPinCode] = useState("");

  // Receive Data
  const [savedPinCode, setSavedPinCode] = useState("");
  const [savedAddress, setSavedAddress] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const navigate = useNavigate();

  const userIsAuthenticated = true;

  // Discount
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // Row rendering function for react-window
  const Row = ({ index, style }) => {
    const cart = cartItems[index];

    if (!cart) return null;

    const image = cart.image1 || cart.imageUrls?.[0] || ""; // fallback
    const priceStr = cart.actualPrice || cart.price || "0";
    const price = Number(priceStr.replace(/,/g, "")) || 0;

    return (
      <div key={cart.id} style={style} className="flex mt-4">
        {/* Image */}
        <div className="w-2/5 lg:w-1/5 px-2 h-fit">
          <img className="w-full h-auto object-cover" src={image} alt="" />
        </div>

        {/* Info */}
        <div className="w-4/5 lg:w-4/5 px-0 h-fit pt-2">
          <div className="w-full flex gap-1">
            <div className="w-[60%]">
              <p className="text-body-mobile lg:text-[18px] font-roboto line-clamp-2">
                {cart.title} Lorem ipsum, dolor sit amet consectetur adipisicing
                elit. Dolorem, deserunt!
              </p>
              {/* <p className="text-subtext-mobile lg:text-subtext-desktop font-roboto">
                {cart.description}
              </p> */}
              <p className="text-[10px] mt-1 font-roboto">Color: Brown</p>
              <p className="mt-2 text-body-mobile lg:text-body-desktop font-roboto">
                ₹{new Intl.NumberFormat("en-IN").format(price)}.00
              </p>
            </div>
            <div className="w-[40%] flex justify-end">
              <p className="mt-2 text-body-mobile lg:text-body-desktop font-roboto">
                ₹{new Intl.NumberFormat("en-IN").format(price)}
              </p>
            </div>
          </div>

          {/* Quantity + Remove */}
          <div className="w-full flex py-2 items-center mt-2">
            <div className="w-1/2 h-full">
              <div className="relative flex items-center justify-center">
                <button
                  onClick={() => decreaseQty(cart.id)}
                  className="absolute left-2 text-h2-mobile"
                >
                  <img className="w-2 lg:w-4" src={minus} alt="" />
                </button>
                <input
                  type="text"
                  className="w-full text-body-mobile lg:text-body-desktop border-2 py-2 text-center font-rubik"
                  readOnly
                  value={cart.quantity}
                />
                <button
                  onClick={() => increaseQty(cart.id)}
                  className="absolute right-2 text-h3-mobile"
                >
                  <img className="w-2 lg:w-4" src={plus} alt="" />
                </button>
              </div>
            </div>

            {/* Remove */}
            <div className="w-1/2 h-fit flex justify-start lg:pl-4">
              <button
                onClick={() => removeFromCart(cart.id)}
                className="text-subtext-mobile lg:text-subtext-desktop px-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Delete Address
  const handleDeleteAddress = (index) => {
    // Get existing addresses from localStorage
    const existingAddresses =
      JSON.parse(localStorage.getItem("addresses")) || [];

    // Remove the selected address
    const updatedAddresses = existingAddresses.filter((_, i) => i !== index);

    // Update the state and localStorage
    setSavedAddress(updatedAddresses);
    localStorage.setItem("addresses", JSON.stringify(updatedAddresses));
  };

  // Retrieve pincode from localStorage on component mount
  useEffect(() => {
    const savedPincode = localStorage.getItem("pincode");
    if (savedPincode) {
      setSavedPinCode(savedPincode);
    }
  }, []);

  // Form Data
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Save Address to local storage
  const handleAddressSave = () => {
    const formData = {
      city,
      state,
      address,
      email,
      fullName,
      phoneNumber,
    };

    const existingAddresses =
      JSON.parse(localStorage.getItem("addresses")) || [];

    existingAddresses.push(formData);

    localStorage.setItem("addresses", JSON.stringify(existingAddresses));
    setSavedAddress(existingAddresses);

    // ✅ Clear input states
    setCity("");
    setState("");
    setAddress("");
    setEmail("");
    setFullName("");
    setPhoneNumber("");

    // ✅ Close only the inner modals, NOT the checkout modal
    setDeliveryForm(false); // close the delivery modal
    setPinCodeForm(false); // close the pincode modal
  };

  // Log the state changes after the render
  useEffect(() => {
    console.log("Updated states:", { isCartOpen, isCheckOut });
  }, [isCartOpen, isCheckOut]);

  // Retrieve saved addresses from localStorage when component mounts
  useEffect(() => {
    const existingAddresses =
      JSON.parse(localStorage.getItem("addresses")) || [];
    setSavedAddress(existingAddresses);
  }, []);

  const handleToggle = () => {
    setIsExpanded(!isExpanded); // Toggle the expanded state
    setIsExpanded2(false);
  };
  const handleToggle2 = () => {
    setIsExpanded2(!isExpanded2); // Toggle the expanded state
    setIsExpanded(false);
  };

  const collections = [
    { image: basic, title: "Basic Chairs", path: "/basic-chairs" },
    { image: luxury, title: "Luxury", path: "/luxury-chairs" },
    { image: wfh, title: "Work From Home", path: "/wfh-chairs" },
    { image: gaming, title: "Gaming", path: "/gaming-chairs" },
    { image: boss, title: "Boss Chairs", path: "/boss-chairs" },
    { image: executive, title: "Executive Chairs", path: "/executive-chairs" },
  ];

  // const calculateSubtotal = () => {
  //   return cartItems.reduce(
  //     (total, item) =>
  //       total + item.quantity * Number(item.actualPrice.replace(/,/g, "")),
  //     0
  //   );
  // };

  // Add effect to handle body scrolling when Cart open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isCartOpen]);

  // Lock bg scrolling when CheckOut open
  useEffect(() => {
    if (isCheckOut) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset"; // Cleanup
    };
  }, [isCheckOut]);

  // Lock bg scrolling when menu open
  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling on the body when cart is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scrolling when cart is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scrolling is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const total = calculateSubtotal();
  const discountedTotal = total - (total * discountPercent) / 100;

  const productPrice = total;
  const discountPercent2 = 10;
  const discountAmount = (productPrice * discountPercent2) / 100;

  const handleApplyDiscount = () => {
    setDiscountPercent(10); // apply 10% off
    setIsExpanded2(false);
  };

  return (
    <div className="w-full">
      {/* -----------------------------Search Bar------------------------------- */}
      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "250px", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: 0.6,
            }}
            className="w-full bg-white fixed top-0 z-50 py-10 flex flex-col gap-8 justify-center items-center overflow-hidden"
          >
            <div className="absolute top-8 right-8">
              <a
                className="text-[20px] font-bold font-rubik"
                href="#"
                onClick={() => setIsSearchOpen(false)}
              >
                X
              </a>
            </div>
            <motion.div>
              <h1 className="font-rubik font-bold text-[28px] text-home-bg-black">
                What are you looking for?
              </h1>
            </motion.div>
            <motion.div className="w-full flex justify-center items-center">
              <input
                type="text"
                placeholder="Search our store"
                className="border w-[90%] py-2 px-4"
              />
              <button className="absolute right-24">Search</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ---------------------------Shop By Div-------------------------------------- */}
      {isShopByOpen && (
        <div className="z-20 absolute top-[88px] w-full h-[450px]  bg-white flex">
          <div className="w-3/4 h-full  grid grid-cols-5 px-16  py-16 gap-16">
            <div className="font-rubik">
              <p className="text-[18px] font-medium">Support Needs</p>
              <ul className="text-[14px] mt-6 space-y-6">
                <li>
                  <Link to="/posture">Posture</Link>
                </li>
                <li>
                  <Link to="/lumbar-support">Lumbar Support</Link>
                </li>
                <li>
                  <Link to="/neck-support">Neck Support</Link>
                </li>
                <li>
                  <Link to="/active-support">Active Work</Link>
                </li>
              </ul>
            </div>
            <div className="font-rubik">
              <p className="text-[18px] font-medium">Price</p>
              <ul className="text-[14px] mt-6 space-y-6">
                <li>
                  <Link to="/under5K">Under ₹5000</Link>
                </li>
                <li>
                  <Link to="/under15K">Under ₹15000</Link>
                </li>
                <li>
                  <Link to="/above15K">Above ₹15000</Link>
                </li>
              </ul>
            </div>
            <div className="font-rubik">
              <p className="text-[18px] font-medium">Features</p>
              <ul className="text-[14px] mt-6 space-y-6">
                <li>
                  <Link to="/arm-rest">Arm Rest</Link>
                </li>
                <li>
                  <Link to="/head-rest">Head Rest</Link>
                </li>
                <li>
                  <Link to="/lumbar-pillow">Lumbar Pillow</Link>
                </li>
                <li>
                  <Link to="/metal-base">Metal Base</Link>
                </li>
              </ul>
            </div>
            <div className="font-rubik">
              <p className="text-[18px] font-medium">Best Sellers</p>
              <ul className="text-[14px] mt-6 space-y-6">
                <li>
                  <Link to="/ergonomic-chairs">Ergonomic Chair</Link>
                </li>
                <li>
                  <Link to="/ergonomic-chairs-pro">Ergonomic Chair Pro</Link>
                </li>
                <li>
                  <Link to="/verve-chairs">Verve Chair</Link>
                </li>
                <li>
                  <Link to="/task-chairs">Task Chair</Link>
                </li>
              </ul>
            </div>
            <div className="font-rubik">
              <p className="text-[18px] font-medium">New Arrivals</p>
              <ul className="text-[14px] mt-6 space-y-6">
                <li>
                  <Link to="/ergonomic-chairs-pro">Ergonomic Chair Pro</Link>
                </li>
                <li>
                  <Link to="/aire-chairs">Aire Chair</Link>
                </li>
                <li>
                  <Link to="/gaming-chairs">Gaming Chair</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-1/4 h-full flex  py-16">
            <div>
              <img className="h-3/5" src={line} alt="" />
            </div>
            <div className=" h-2/4 w-2/4 left-1/2 ml-28">
              <img className="" src={shopby} alt="" />
              <p className="font-rubik text-[16px] text-left mt-4">
                Build your space <br /> without breaking the <br /> bank
              </p>
            </div>
          </div>
        </div>
      )}

      {/* -----------------------Collection Div---------------------------- */}
      {isCollectionOpen && (
        <div className="z-20 absolute top-[88px] w-full h-[450px]  bg-white  px-16 py-16">
          <h1 className="font-tomorrow font-bold text-[32px] pl-16">
            OUR COLLECTIONS
          </h1>
          <div className="grid grid-cols-6 pl-16 gap-8">
            {collections.map((collection, index) => (
              <div className="mt-8" key={index}>
                <Link to={collection.path}>
                  <img src={collection.image} alt="" />
                </Link>
                <p className="mt-8 text-center font-rubik font-medium">
                  {collection.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      {/* Cart */}

      <div>
        {isCartOpen && (
          <div className="fixed inset-0 z-20 bg-black bg-opacity-50">
            <div className="w-full h-full bg-[#fbfbfb] lg:w-1/3 fixed lg:right-0 lg:left-auto p-4 lg:p-6">
              <div className="flex justify-between items-center">
                <p className="font-rubik font-semibold lg:text-[24px] text-[20px]">
                  Your cart
                </p>

                <svg
                  onClick={() => setIsCartOpen(false)}
                  fill="#5a5a5a"
                  className="w-10 h-12 cursor-pointer"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g data-name="Layer 2">
                    <g data-name="close">
                      <rect
                        width="24"
                        height="24"
                        transform="rotate(180 12 12)"
                        opacity="0"
                      ></rect>

                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              {cartItems.length > 0 && (
                <div className="flex justify-between items-center border-b-[1px] text-[#c1c1c1] border-[#c1c1c1] py-3">
                  <p className="font-roboto font-normal lg:text-[14px] text-[16px]">
                    PRODUCT
                  </p>

                  <p className="lg:text-[14px]">TOTAL</p>
                </div>
              )}
              <div className="px-0 mt-4">
                {cartItems.length === 0 ? (
                  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                    <div className="relative mb-6">
                      <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
                        <ShoppingCart className="w-12 h-12 text-gray-400" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">0</span>
                      </div>
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-center">
                      Your cart is empty
                    </h2>

                    {/* Subtext */}
                    <p className="text-gray-600 text-center mb-8 max-w-md leading-relaxed">
                      Looks like you haven't added any items to your cart yet.
                      Start shopping to find amazing products!
                    </p>

                    {/* Continue Shopping Button */}
                    <button
                      className="bg-home-bg hover:bg-black text-black hover:text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center gap-2 mb-6"
                      onClick={() => setIsCartOpen(false)}
                    >
                      Continue shopping
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <List
                    height={
                      window.innerWidth < 768
                        ? window.innerHeight - 230
                        : window.innerHeight - 350
                    }
                    itemCount={cartItems.length}
                    itemSize={220}
                    width="100%"
                  >
                    {Row}
                  </List>
                )}
              </div>

              {/* Fixed Cart Footer */}
              {cartItems.length > 0 && (
                <div className="absolute bottom-0 left-0 w-full p-4 bg-white border-t-[1px]">
                  <div className="flex lg:gap-4 gap-4">
                    <img
                      className="border rounded-[5px] h-10 lg:h-12 p-2 w-auto"
                      src={pen}
                      alt=""
                    />
                    <img
                      className="border rounded-[5px] h-10 lg:h-12 p-2 w-auto"
                      src={truck}
                      alt=""
                    />
                    <img
                      className="border rounded-[5px] h-10 lg:h-12 p-2 w-auto"
                      src={ticket}
                      alt=""
                    />
                  </div>

                  <div className="flex justify-between items-center mt-4">
                    <p className="font-rubik font-semibold lg:text-[24px] text-[20px]">
                      Estimated total
                    </p>
                    <p className="lg:text-[24px] font-roboto">
                      ₹{" "}
                      {new Intl.NumberFormat("en-IN").format(
                        calculateSubtotal()
                      )}
                    </p>
                  </div>
                  <p className="font-rubik mt-2 text-[#2a2a2a]">
                    Taxes, Discounts and{" "}
                    <span className="underline">shipping</span> calculated at
                    checkout
                  </p>

                  <button
                    className="w-full bg-black text-white text-center py-2 font-roboto lg:text-[18px] text-[16px] mt-4"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsCheckOut(true);
                    }}
                  >
                    Check Out
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Check Out */}

      <AnimatePresence>
        {isCheckOut && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 bg-black bg-opacity-50"
          >
            <div className="fixed flex flex-col justify-between lg:w-1/3 w-full lg:left-[30%] bg-[#f3f4f9] py-10 mt-10 overflow-y-auto h-full lg:h-[90vh] lg:max-h-[90vh] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <div>
                <div className="relative flex w-full px-4 text-center justify-center items-center">
                  <img
                    onClick={(e) => {
                      e.preventDefault();
                      setIsCheckOut(false);
                      setDeliveryForm(false);
                      setIsExpanded(false);
                      setIsExpanded2(false);
                    }}
                    className="w-6 absolute cursor-pointer left-6"
                    src={back}
                    alt=""
                  />
                  <p className="font-tomorrow font-bold text-h2-mobile lg:text-h2-desktop">
                    PHEONIX
                  </p>
                </div>
                <div className="w-full mt-10 px-4 space-y-4">
                  <div className=" bg-white w-full rounded-[10px]">
                    {/* Order Summary Header */}
                    <div
                      className="h-fit w-full flex px-2 cursor-pointer items-center justify-between py-4"
                      onClick={handleToggle}
                    >
                      <div className="flex gap-2 items-center">
                        <img className="w-6" src={shooping} alt="Shopping" />
                        <p className="font-roboto text-body-mobile lg:text-[16px]">
                          Order Summary
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-roboto text-[14px]">
                          {totalItems} {totalItems === 1 ? "item" : "items"} (
                          {discountPercent > 0 ? (
                            <>
                              <span className="line-through text-gray-500 mr-1">
                                ₹
                                {new Intl.NumberFormat("en-IN", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }).format(calculateSubtotal())}
                              </span>
                              <span className="text-green-700 font-semibold">
                                ₹
                                {new Intl.NumberFormat("en-IN", {
                                  minimumFractionDigits: 2,
                                  maximumFractionDigits: 2,
                                }).format(discountedTotal)}
                              </span>
                            </>
                          ) : (
                            <>
                              ₹
                              {new Intl.NumberFormat("en-IN", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }).format(calculateSubtotal())}
                            </>
                          )}
                          )
                        </p>

                        <img
                          className={`w-4 transform transition-transform ${
                            isExpanded ? "rotate-180" : "rotate-0"
                          }`}
                          src={dropdown}
                          alt="Dropdown"
                        />
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.5 }}
                          className="px-4 py-4 border-black"
                        >
                          {/* Scrollable Section */}
                          <div className="flex flex-col gap-4 max-h-80 py-2 overflow-y-auto scrollbar-thin pr-2">
                            {cartItems.map((item) => (
                              <div key={item.id} className="flex">
                                <div className="lg:w-[20%] w-[30%]">
                                  <img
                                    src={
                                      item.image ||
                                      item.image1 ||
                                      item.imageUrls?.[0] ||
                                      ""
                                    }
                                    alt={item.title}
                                    className="w-full"
                                  />
                                </div>
                                <div className="lg:w-[80%] w-[70%] px-4">
                                  <p className="text-base font-semibold line-clamp-2">
                                    {item.title}
                                  </p>
                                  <p className="text-sm text-gray-500 mt-1">
                                    ₹{item.price}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>

                          {/* Sub Total */}
                          <div className="flex items-center lg:text-[14px] font-roboto justify-between mt-4 border-b-[1px] border-[#b8b8b8] py-2">
                            <p>Subtotal</p>
                            <p>
                              ₹ {new Intl.NumberFormat("en-IN").format(total)}
                            </p>
                          </div>

                          {/* Total */}
                          <div className="flex items-center lg:text-[14px] font-roboto justify-between py-2">
                            <p>Total</p>
                            <p>
                              ₹{" "}
                              {new Intl.NumberFormat("en-IN", {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2,
                              }).format(
                                discountPercent > 0 ? discountedTotal : total
                              )}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  <div className=" bg-white w-full rounded-[10px]">
                    {/* Order Summary Header */}
                    <div
                      className="h-fit w-full flex px-2 cursor-pointer items-center justify-between py-4"
                      onClick={handleToggle2}
                    >
                      <div className="flex gap-2 items-center">
                        <img className="w-6" src={coupon} alt="Shopping" />
                        <p className="font-roboto text-body-mobile lg:text-[16px]">
                          Coupons/Gift Cards
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <p className="font-roboto text-body-mobile lg:text-[14px] text-[#004b94]">
                          1 available
                        </p>
                        <img
                          className={`w-4 transform transition-transform ${
                            isExpanded2 ? "rotate-180" : "rotate-0"
                          }`}
                          src={dropdown}
                          alt="Dropdown"
                        />
                      </div>
                    </div>
                    <div className="">
                      {discountPercent > 0 && (
                        <div className="h-fit w-full flex px-4 cursor-pointer items-center justify-between py-4">
                          <p className="text-[12px] text-[#292829] font-roboto">
                            Discount applied! 🎉
                          </p>
                          <p
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent dropdown toggle
                              setDiscountCode("");
                              setDiscountPercent(0);
                            }}
                            className="text-[12px] text-red-500 font-roboto"
                          >
                            Remove
                          </p>
                        </div>
                      )}
                    </div>

                    {/* Expanded Content */}
                    {isExpanded2 && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="px-4 py-4 border-black hidden"
                      >
                        <p className="font-roboto text-body-mobile lg:text-body-desktop">
                          Here’s some additional order information:
                        </p>
                        <ul className="list-disc pl-4">
                          <li>Delivery Estimate: 3-5 business days</li>
                          <li>Shipping Charges: Free</li>
                          <li>Discount: ₹ 100</li>
                        </ul>
                      </motion.div>
                    )}
                    <div className="relative ">
                      {isExpanded2 && (
                        <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
                      )}
                      <div className={`${isExpanded2 ? "relative" : ""}`}>
                        {isExpanded2 && (
                          <div className="fixed z-50 left-0 lg:left-[30%] w-full lg:w-1/3 bg-white border rounded-t-[10px] py-2 px-4 bottom-0 lg:bottom-10">
                            <div className="flex items-center">
                              <div className="w-1/2">
                                <p className="font-roboto text-body-mobile lg:text-subtext-desktop">
                                  Add New Address
                                </p>
                              </div>
                              <div className="w-1/2 flex justify-end">
                                <svg
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setIsExpanded2(false);
                                  }}
                                  fill="#5a5a5a"
                                  className="w-10 h-12 cursor-pointer"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g data-name="Layer 2">
                                    <g data-name="close">
                                      <rect
                                        width="24"
                                        height="24"
                                        transform="rotate(180 12 12)"
                                        opacity="0"
                                      ></rect>

                                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <p className="text-[14px] font-rubik">
                              Have a discount code?
                            </p>
                            <div className="w-full flex items-center gap-2 p-2 mt-2 border-[1px] bg-gray-100 rounded-[10px] border-[#b8b8b8]">
                              <div className="w-[80%]">
                                <input
                                  className="p-3 w-full rounded-[10px] placeholder:font-rubik"
                                  placeholder="Enter Discount Code"
                                  type="text"
                                  value={discountCode}
                                  onChange={(e) =>
                                    setDiscountCode(e.target.value)
                                  }
                                />
                              </div>
                              <div className="w-[20%]">
                                <button
                                  className="w-full border-[1px] p-3 font-rubik rounded-[10px] text-[#004b94] border-[#004b94]"
                                  onClick={() => {
                                    if (
                                      discountCode.trim().toUpperCase() ===
                                      "NEW10"
                                    ) {
                                      setDiscountPercent(10); // 10% discount
                                    } else {
                                      setDiscountPercent(0); // No discount
                                    }
                                    setIsExpanded2(false);
                                  }}
                                >
                                  Apply
                                </button>
                              </div>
                            </div>
                            <div className="flex h-[160px] rounded-[10px] border-[1px] border-[#b8b8b8] mt-4">
                              <div className="w-[10%] flex items-center justify-center bg-[#292829] rounded-l-[10px]">
                                <span className="text-[16px] font-roboto text-white font-semibold rotate-[-90deg] origin-center whitespace-nowrap block w-full h-full flex  items-center justify-center">
                                  ₹{discountAmount} OFF
                                </span>
                              </div>
                              <div className="w-[90%] flex flex-col justify-between">
                                <div className="px-4">
                                  <p className="border-b-[2px] border-dotted border-[#b8b8b8] py-2">
                                    10% off on first purchase upto RS 100
                                  </p>
                                  <p className="p-2 rounded-[10px] border-[1px] w-fit border-[#004b94] mt-2">
                                    NEW10
                                  </p>
                                </div>
                                <div>
                                  <button
                                    onClick={handleApplyDiscount}
                                    className="text-[#004b94] w-full py-2 bg-blue-50 font-rubik text-[16px] font-medium rounded-br-[10px]"
                                  >
                                    Tap to Apply
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 w-full h-fit px-4 ">
                  {userIsAuthenticated ? (
                    <div className=" px-4 py-4 bg-white rounded-[10px]">
                      <div className="flex items-center text-center w-full">
                        <div className="w-1/2 flex items-center text-center gap-2">
                          <img className="w-6" src={delivery} alt="" />
                          <p className="font-roboto text-body-mobile lg:text-[16px]">
                            Deliver To
                          </p>
                        </div>
                        <div className="w-1/2 flex justify-end">
                          {savedAddress.length > 0 && (
                            <button
                              onClick={(e) => {
                                e.preventDefault();
                                setPinCodeForm(true);
                              }}
                              className="flex items-center gap-1 border bg-[#eff5ff] px-2 py-2"
                            >
                              {/* <img className="w-4" src={plus} alt="" /> */}
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="#1773b0"
                                className="size-3"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M12 4.5v15m7.5-7.5h-15"
                                />
                              </svg>

                              <p className="text-subtext-mobile lg:text-[12px] font-medium text-[#1773b0]">
                                Add New Address
                              </p>
                            </button>
                          )}
                        </div>
                      </div>
                      {/* Pin Code */}
                      <div className="relative">
                        {pinCodeForm && (
                          <div className="fixed inset-0 bg-black bg-opacity-40 z-40"></div>
                        )}
                        <div
                          className={`${pinCodeForm ? "relative z-50" : ""}`}
                        >
                          {pinCodeForm && (
                            <div className="fixed z-50 left-0 lg:left-[30%] w-full lg:w-1/3 bg-white border rounded-t-[10px] py-4 px-2 bottom-0 lg:bottom-10">
                              <div className="flex items-center">
                                <div className="w-1/2">
                                  <p className="font-roboto text-body-mobile lg:text-body-desktop">
                                    Add New Address
                                  </p>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                  {/* <img
                                    className="w-6 cursor-pointer"
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setPinCodeForm(false);
                                    }}
                                    src={close}
                                    alt=""
                                  /> */}
                                  <svg
                                    onClick={(e) => {
                                      e.preventDefault();
                                      setPinCodeForm(false);
                                    }}
                                    fill="#5a5a5a"
                                    className="w-10 h-12 cursor-pointer"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <g data-name="Layer 2">
                                      <g data-name="close">
                                        <rect
                                          width="24"
                                          height="24"
                                          transform="rotate(180 12 12)"
                                          opacity="0"
                                        ></rect>

                                        <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                                      </g>
                                    </g>
                                  </svg>
                                </div>
                              </div>
                              <div className="mt-4">
                                <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                  Pincode*
                                </p>
                                <input
                                  type="text"
                                  className="w-full border border-black placeholder:font-roboto placeholder:text-subtext-mobile lg:placeholder:text-subtext-desktop placeholder:text-black placeholder:text-opacity-60 px-2 py-4 mt-2"
                                  placeholder="Pincode"
                                  value={pinCode}
                                  onChange={(e) => {
                                    setPinCode(e.target.value);
                                  }}
                                />
                                <button
                                  onClick={(e) => {
                                    e.preventDefault();
                                    localStorage.setItem("pincode", pinCode);
                                    setPinCode("");
                                    setSavedPinCode(pinCode);
                                    setDeliveryForm(true);
                                    setPinCodeForm(false);
                                  }}
                                  className="mt-4 py-2 w-full bg-black text-white font-rubik text-body-mobile lg:text-body-desktop"
                                >
                                  Save Address
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>

                      {deliveryForm && (
                        <div className="mt-4">
                          <div className="lg:left-[30%] left-0 w-full bottom-0 z-50 border border-black bg-white py-4 px-2">
                            <div className="flex items-center">
                              <div className="w-1/2">
                                <p className="font-roboto text-body-mobile lg:text-body-desktop">
                                  Add New Address
                                </p>
                              </div>
                              <div className="w-1/2 flex justify-end">
                                {/* <img
                                  className="w-6 h-6 cursor-pointer"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setDeliveryForm(false);
                                  }}
                                  src={close}
                                  alt=""
                                /> */}
                                <svg
                                  onClick={(e) => {
                                    e.preventDefault();
                                    setDeliveryForm(false);
                                  }}
                                  fill="#5a5a5a"
                                  className="w-10 h-12 cursor-pointer"
                                  viewBox="0 0 24 24"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <g data-name="Layer 2">
                                    <g data-name="close">
                                      <rect
                                        width="24"
                                        height="24"
                                        transform="rotate(180 12 12)"
                                        opacity="0"
                                      ></rect>

                                      <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z"></path>
                                    </g>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <div className="px-2 mt-4">
                              <form action="">
                                <div className="flex items-center w-full gap-2">
                                  <div className="w-2/5 flex">
                                    <p className="font-roboto text-auth-border text-subtext-mobile lg:text-subtext-desktop">
                                      Address
                                    </p>
                                  </div>
                                  <div className="w-4/5">
                                    <hr className="border-t border-auth-border" />
                                  </div>
                                </div>
                                <div className="px-2 mt-4">
                                  <label className="space-y-2">
                                    <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                      Pincode*
                                    </p>
                                    <input
                                      className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
                                      type="text"
                                      value={savedPinCode}
                                      readOnly
                                      placeholder="Pincode"
                                    />
                                  </label>
                                  <div className="flex gap-4 mt-4">
                                    <label className="space-y-2 w-1/2">
                                      <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                        City*
                                      </p>
                                      <input
                                        className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
                                        type="text"
                                        value={city}
                                        required
                                        onChange={(e) =>
                                          setCity(e.target.value)
                                        }
                                      />
                                    </label>
                                    <label className="space-y-2 w-1/2">
                                      <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                        State*
                                      </p>
                                      <input
                                        className="border border-black w-full lg:placeholder:text-subtext-desktop placeholder:text-subtext-mobile placeholder:text-auth-border px-2 py-2"
                                        type="text"
                                        value={state}
                                        required
                                        onChange={(e) =>
                                          setState(e.target.value)
                                        }
                                      />
                                    </label>
                                  </div>
                                  <div className="mt-4 relative">
                                    <label className="space-y-2">
                                      <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                        Full Address*
                                      </p>
                                      <textarea
                                        className="text-subtext-mobile lg:text-subtext-desktop border h-28 border-black w-full lg:placeholder:text-subtext-desktop placeholder:text-subtext-mobile placeholder:text-auth-border px-2 py-2"
                                        type="text"
                                        placeholder="Your Address"
                                        value={address}
                                        required
                                        onChange={(e) =>
                                          setAddress(e.target.value)
                                        }
                                      />
                                    </label>
                                  </div>
                                </div>
                                <div className="flex items-center w-full mt-4 gap-2">
                                  <div className="w-2/5 flex">
                                    <p className="font-roboto text-auth-border text-subtext-mobile lg:text-subtext-desktop">
                                      Personal Details
                                    </p>
                                  </div>
                                  <div className="w-4/5">
                                    <hr className="border-t border-auth-border" />
                                  </div>
                                </div>
                                <div className="mt-4 px-2">
                                  <label className="space-y-2">
                                    <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                      Email*
                                    </p>
                                    <input
                                      className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
                                      type="text"
                                      placeholder="Email"
                                      value={email}
                                      required
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                  </label>
                                </div>
                                <div className="mt-4 px-2">
                                  <label className="space-y-2">
                                    <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                      Full Name*
                                    </p>
                                    <input
                                      className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
                                      type="text"
                                      placeholder="Full Name"
                                      value={fullName}
                                      required
                                      onChange={(e) =>
                                        setFullName(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="mt-4 px-2">
                                  <label className="space-y-2">
                                    <p className="font-roboto text-subtext-mobile lg:text-subtext-desktop">
                                      Phone Number*
                                    </p>
                                    <input
                                      className="border border-black w-full placeholder:text-[10px] placeholder:text-auth-border px-2 py-2"
                                      type="text"
                                      placeholder="Phone Number"
                                      value={phoneNumber}
                                      required
                                      onChange={(e) =>
                                        setPhoneNumber(e.target.value)
                                      }
                                    />
                                  </label>
                                </div>
                                <div className="mt-4 px-2">
                                  <button
                                    onClick={() => {
                                      handleAddressSave();
                                    }}
                                    className="w-full bg-black py-2 text-white"
                                  >
                                    Save Address
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="mt-2 space-y-2 overflow-y-auto max-h-[300px] scrollbar-thin">
                        {savedAddress.length === 0 ? (
                          <div>
                            <p>No Address Available</p>
                          </div>
                        ) : (
                          savedAddress.map((addressData, index) => (
                            <div
                              key={index}
                              onClick={() => setSelectedAddress(addressData)}
                              className={`border mt-6 font-roboto text-subtext-mobile lg:text-subtext-desktop py-2 cursor-pointer rounded-[10px]  ${
                                selectedAddress === addressData
                                  ? "border-2 border-black"
                                  : "border-[#b8b8b8]"
                              }`}
                            >
                              <div className="w-full px-2 flex items-center">
                                <div className="w-1/2">
                                  <p>{addressData.fullName}</p>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                  <button
                                    onClick={() => handleDeleteAddress(index)}
                                    className="px-4 py-1 text-[#004b94] font-roboto "
                                  >
                                    Edit
                                  </button>
                                </div>
                              </div>
                              <div className="px-2 w-[80%] mt-2">
                                <p className="font-light">
                                  {addressData.address}, {addressData.city},{" "}
                                  {addressData.state}, {savedPinCode}
                                </p>
                              </div>
                              <div className="w-full px-2 mt-2 flex items-center text-black text-opacity-50">
                                <div className="w-1/2">
                                  <p>{addressData.email}</p>
                                </div>
                                <div className="w-1/2 flex justify-end">
                                  <p>({addressData.phoneNumber})</p>
                                </div>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                      {savedAddress.length === 0 && (
                        <div
                          onClick={(e) => {
                            e.preventDefault();
                            setPinCodeForm(true);
                          }}
                          className="w-full h-10 border flex items-center text-center gap-2 py-6 px-2 mt-2 border-black cursor-pointer"
                        >
                          <img className="w-6" src={add} alt="" />
                          <p className="font-roboto text-body-mobile lg:text-body-desktop">
                            Add New Address
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <button>
                        <Link to="/login">
                          <p>You have to login first</p>
                        </Link>
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full  mt-4  px-4 ">
                <button
                  className={`w-full text-white font-rubik py-2 ${
                    selectedAddress
                      ? "bg-black cursor-pointer"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!selectedAddress}
                  onClick={() => navigate("/payment")}
                >
                  Proceed To Payment
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* For Mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-10 w-full h-screen bg-white"
          >
            <div className="w-full px-8 h-fit flex mt-10">
              <div className="w-2/3  h-full py-2 flex justify-start">
                <p className="text-h4-mobile">Pheonix Ecommerce</p>
              </div>
              <div className="w-1/3  h-full py-2 flex justify-end">
                <img
                  className="w-6 cursor-pointer"
                  onClick={() => setIsMenuOpen(false)}
                  src={close}
                  alt=""
                />
              </div>
            </div>

            <div className="w-full px-8 h-fit mt-10">
              <ul className="font-rubik cursor-pointer">
                {/* Shop By Open */}
                <AnimatePresence>
                  {isShopBy && (
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="fixed inset-0 z-20 w-full h-screen bg-white"
                    >
                      <div className="w-full px-8 h-fit flex mt-10">
                        <div className="w-2/3  h-full py-2 flex justify-start">
                          <p
                            onClick={() => setIsShopBy(false)}
                            className="text-h4-mobile flex gap-2 items-center cursor-pointer"
                          >
                            <img className="w-4 h-4" src={back} alt="" /> Shop
                            By
                          </p>
                        </div>
                        <div className="w-1/3  h-full py-2 flex justify-end">
                          <img
                            className="w-6 cursor-pointer"
                            onClick={() => setIsMenuOpen(false)}
                            src={close}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="w-full px-8 h-fit mt-10">
                        <ul className="font-rubik cursor-pointer">
                          {/* -----------------Support Need---------------------- */}
                          <AnimatePresence>
                            {isSupportNeed && (
                              <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="fixed inset-0 z-30 w-full h-screen bg-white"
                              >
                                <div className="w-full px-8 h-fit flex mt-10">
                                  <div className="w-2/3  h-full py-2 flex justify-start">
                                    <p
                                      onClick={() => setIsSupportNeed(false)}
                                      className="text-h4-mobile flex gap-2 items-center cursor-pointer"
                                    >
                                      <img
                                        className="w-4 h-4"
                                        src={back}
                                        alt=""
                                      />{" "}
                                      Support Needs
                                    </p>
                                  </div>
                                  <div className="w-1/3  h-full py-2 flex justify-end">
                                    <img
                                      className="w-6 cursor-pointer"
                                      onClick={() => setIsMenuOpen(false)}
                                      src={close}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="w-full px-8 h-fit mt-10">
                                  <ul className="font-rubik cursor-pointer">
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Posture
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Lumbar Support
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Neck Support
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Best Seller
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Work Arrival
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <div>
                                  <Link to={"/login"}>
                                    <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                                      Log In
                                    </button>
                                  </Link>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <li onClick={() => setIsSupportNeed(true)}>
                            <div className="w-full h-fit flex">
                              <div className="w-2/3 py-2 flex justify-start">
                                <p className="text-body-mobile">
                                  Support Needs
                                </p>
                              </div>
                              <div className="w-1/3  py-2 justify-end flex">
                                <img
                                  className="w-4 h-4 mt-1"
                                  src={arrow}
                                  alt=""
                                />
                              </div>
                            </div>
                          </li>
                          {/* ------------------------Price----------------------- */}
                          <AnimatePresence>
                            {isPrice && (
                              <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="fixed inset-0 z-30 w-full h-screen bg-white"
                              >
                                <div className="w-full px-8 h-fit flex mt-10">
                                  <div className="w-2/3  h-full py-2 flex justify-start">
                                    <p
                                      onClick={() => setIsPrice(false)}
                                      className="text-h4-mobile flex gap-2 items-center cursor-pointer"
                                    >
                                      <img
                                        className="w-4 h-4"
                                        src={back}
                                        alt=""
                                      />{" "}
                                      Price
                                    </p>
                                  </div>
                                  <div className="w-1/3  h-full py-2 flex justify-end">
                                    <img
                                      className="w-6 cursor-pointer"
                                      onClick={() => setIsMenuOpen(false)}
                                      src={close}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="w-full px-8 h-fit mt-10">
                                  <ul className="font-rubik cursor-pointer">
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <Link to="/under5k">
                                            <p className="text-body-mobile">
                                              Under ₹5000
                                            </p>
                                          </Link>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <Link to="/under15k">
                                            <p className="text-body-mobile">
                                              Under ₹15000
                                            </p>
                                          </Link>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <Link to="/above15k">
                                            <p className="text-body-mobile">
                                              Above ₹15000
                                            </p>
                                          </Link>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <Link to={"/login"}>
                                  <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                                    Log In
                                  </button>
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>

                          <li onClick={() => setIsPrice(true)}>
                            <div className="w-full h-fit flex">
                              <div className="w-2/3 py-2 flex justify-start">
                                <p className="text-body-mobile">Price</p>
                              </div>
                              <div className="w-1/3  py-2 justify-end flex">
                                <img
                                  className="w-4 h-4 mt-1"
                                  src={arrow}
                                  alt=""
                                />
                              </div>
                            </div>
                          </li>
                          {/* -------------------------Features------------------------ */}
                          <AnimatePresence>
                            {isFeatures && (
                              <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="fixed inset-0 z-30 w-full h-screen bg-white"
                              >
                                <div className="w-full px-8 h-fit flex mt-10">
                                  <div className="w-2/3  h-full py-2 flex justify-start">
                                    <p
                                      onClick={() => setIsFeatures(false)}
                                      className="text-h4-mobile flex gap-2 items-center cursor-pointer"
                                    >
                                      <img
                                        className="w-4 h-4"
                                        src={back}
                                        alt=""
                                      />{" "}
                                      Features
                                    </p>
                                  </div>
                                  <div className="w-1/3  h-full py-2 flex justify-end">
                                    <img
                                      className="w-6 cursor-pointer"
                                      onClick={() => setIsMenuOpen(false)}
                                      src={close}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="w-full px-8 h-fit mt-10">
                                  <ul className="font-rubik cursor-pointer">
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Arm Rest
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Head Rest
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Lumbar Rest
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Metal Base
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <Link to={"/login"}>
                                  <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                                    Log In
                                  </button>
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <li onClick={() => setIsFeatures(true)}>
                            <div className="w-full h-fit flex">
                              <div className="w-2/3 py-2 flex justify-start">
                                <p className="text-body-mobile">Features</p>
                              </div>
                              <div className="w-1/3  py-2 justify-end flex">
                                <img
                                  className="w-4 h-4 mt-1"
                                  src={arrow}
                                  alt=""
                                />
                              </div>
                            </div>
                          </li>

                          {/* ----------------------------Best Seller----------------------------- */}
                          <AnimatePresence>
                            {isBestSeller && (
                              <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="fixed inset-0 z-30 w-full h-screen bg-white"
                              >
                                <div className="w-full px-8 h-fit flex mt-10">
                                  <div className="w-2/3  h-full py-2 flex justify-start">
                                    <p
                                      onClick={() => setIsBestSeller(false)}
                                      className="text-h4-mobile flex gap-2 items-center cursor-pointer"
                                    >
                                      <img
                                        className="w-4 h-4"
                                        src={back}
                                        alt=""
                                      />{" "}
                                      Best Seller
                                    </p>
                                  </div>
                                  <div className="w-1/3  h-full py-2 flex justify-end">
                                    <img
                                      className="w-6 cursor-pointer"
                                      onClick={() => setIsMenuOpen(false)}
                                      src={close}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="w-full px-8 h-fit mt-10">
                                  <ul className="cursor-pointer font-rubik">
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Ergonomic Chair
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Ergonomic Pro Chair
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Verve Chair
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Task Chair
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <Link to={"/login"}>
                                  <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                                    Log In
                                  </button>
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <li onClick={() => setIsBestSeller(true)}>
                            <div className="w-full h-fit flex">
                              <div className="w-2/3 py-2 flex justify-start">
                                <p className="text-body-mobile">Best Seller</p>
                              </div>
                              <div className="w-1/3  py-2 justify-end flex">
                                <img
                                  className="w-4 h-4 mt-1"
                                  src={arrow}
                                  alt=""
                                />
                              </div>
                            </div>
                          </li>
                          {/* ---------------------------New Arrival------------------------- */}
                          <AnimatePresence>
                            {isNewArrival && (
                              <motion.div
                                initial={{ x: "-100%", opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: "-100%", opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="fixed inset-0 z-30 w-full h-screen bg-white"
                              >
                                <div className="w-full px-8 h-fit flex mt-10">
                                  <div className="w-2/3  h-full py-2 flex justify-start">
                                    <p
                                      onClick={() => setIsNewArrival(false)}
                                      className="text-h4-mobile flex gap-2 items-center cursor-pointer"
                                    >
                                      <img
                                        className="w-4 h-4"
                                        src={back}
                                        alt=""
                                      />{" "}
                                      New Arrival
                                    </p>
                                  </div>
                                  <div className="w-1/3  h-full py-2 flex justify-end">
                                    <img
                                      className="w-6 cursor-pointer"
                                      onClick={() => setIsMenuOpen(false)}
                                      src={close}
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="mt-10 w-full px-8 h-fit">
                                  <ul className="cursor-pointer font-rubik">
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Ergonomic Pro Chair
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Aire Chair
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                    <li>
                                      <div className="w-full h-fit flex">
                                        <div className="w-2/3 py-2 flex justify-start">
                                          <p className="text-body-mobile">
                                            Gaming Chair
                                          </p>
                                        </div>
                                        <div className="w-1/3  py-2 justify-end flex">
                                          <img
                                            className="w-4 h-4 mt-1"
                                            src={arrow}
                                            alt=""
                                          />
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
                                <Link to={"/login"}>
                                  <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                                    Log In
                                  </button>
                                </Link>
                              </motion.div>
                            )}
                          </AnimatePresence>
                          <li onClick={() => setIsNewArrival(true)}>
                            <div className="w-full h-fit flex">
                              <div className="w-2/3 py-2 flex justify-start">
                                <p className="text-body-mobile">New Arrival</p>
                              </div>
                              <div className="w-1/3  py-2 justify-end flex">
                                <img
                                  className="w-4 h-4 mt-1"
                                  src={arrow}
                                  alt=""
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <Link to={"/login"}>
                          <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                            Log In
                          </button>
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <li
                  className="cursor-pointer"
                  onClick={() => setIsShopBy(true)}
                >
                  <div className="w-full h-fit flex">
                    <div className="w-2/3 py-2 flex justify-start">
                      <p className="text-body-mobile">Shop By</p>
                    </div>
                    <div className="w-1/3  py-2 justify-end flex">
                      <img className="w-4 h-4 mt-1" src={arrow} alt="" />
                    </div>
                  </div>
                </li>

                {/* ======================Collections======================= */}
                <AnimatePresence>
                  {isCollections && (
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: "-100%", opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="fixed inset-0 z-20 w-full h-screen bg-white"
                    >
                      <div className="w-full px-8 h-fit flex mt-10">
                        <div className="w-2/3  h-full py-2 flex justify-start">
                          <p
                            onClick={() => setIsCollections(false)}
                            className="text-h4-mobile flex gap-2 items-center cursor-pointer"
                          >
                            <img className="w-4 h-4" src={back} alt="" />{" "}
                            Collections
                          </p>
                        </div>
                        <div className="w-1/3  h-full py-2 flex justify-end">
                          <img
                            className="w-6"
                            onClick={() => setIsMenuOpen(false)}
                            src={close}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="w-full h-fit px-8 mt-10 grid grid-cols-2 gap-4">
                        {collections.map((collection, index) => (
                          <div key={index}>
                            <Link to={collection.path}>
                              <img src={collection.image} alt="" />
                              <p className="text-center text-body-mobile mt-2 font-rubik">
                                {collection.title}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                      <Link to={"/login"}>
                        <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                          Log In
                        </button>
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                <li onClick={() => setIsCollections(true)}>
                  <div className="w-full h-fit flex">
                    <div className="w-2/3 py-2 flex justify-start">
                      <p className="text-body-mobile">Collections</p>
                    </div>
                    <div className="w-1/3  py-2 justify-end flex">
                      <img className="w-4 h-4 mt-1" src={arrow} alt="" />
                    </div>
                  </div>
                </li>
                {/* ======================Track Order==================== */}
                <Link to="/track-order-mobile">
                  <li>
                    <div className="w-full h-fit flex">
                      <div className="w-2/3 py-2 flex justify-start">
                        <p className="text-body-mobile">Track Order</p>
                      </div>
                      <div className="w-1/3  py-2 justify-end flex">
                        <img className="w-4 h-4 mt-1" src={arrow} alt="" />
                      </div>
                    </div>
                  </li>
                </Link>

                {/* =======================FAQs================== */}
                <Link to="/faqs">
                  <li className="">
                    <div className="w-full h-fit flex">
                      <div className="w-2/3 py-2 flex justify-start">
                        <p className="text-body-mobile">FAQs</p>
                      </div>
                      <div className="w-1/3  py-2 justify-end flex">
                        <img className="w-4 h-4 mt-1" src={arrow} alt="" />
                      </div>
                    </div>
                  </li>
                </Link>
                {/* =====================Contact Us======================= */}
                <Link to="/contact-us">
                  <li className="">
                    <div className="w-full h-fit flex">
                      <div className="w-2/3 py-2 flex justify-start">
                        <p className="text-body-mobile">Contact Us</p>
                      </div>
                      <div className="w-1/3  py-2 justify-end flex">
                        <img className="w-4 h-4 mt-1" src={arrow} alt="" />
                      </div>
                    </div>
                  </li>
                </Link>
              </ul>
            </div>
            <div>
              <Link to={"/login"}>
                <button className="font-rubik text-body-mobile bg-black text-white px-28 py-2 m-auto flex mt-28">
                  Log In
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hidden lg:block  w-full z-10">
        {/* ---------------------------------DIV 1-------------------------------------------- */}
        <div className=" bg-home-bg w-full h-fit text-center py-1">
          <p className="font-rubik font-medium text-subtext-mobile lg:text-[14px]">
            ❤️SHOP NOW AND GET 10% OFF - USE CODE (FIRSTBUY)
          </p>
        </div>

        {/* ---------------------------------DIV 2-------------------------------------------- */}
        <div className="w-full h-fit lg:flex items-center bg-home-bg-black ">
          {/* ===========Div 2-1 ============ */}
          <div className="hidden w-2/5  text-white font-rubik lg:flex lg:pl-16  items-center gap-8 text-[16px]">
            <div
              onClick={(e) => {
                e.preventDefault();
                setIsShopByOpen((prev) => !prev);
                if (!isShopByOpen) {
                  setIsCollectionOpen(false);
                }
              }}
              className={`py-4 f-full flex items-center space-x-1 ${
                isShopByOpen ? "border-b-4 border-home-bg" : ""
              }`}
            >
              <a href="">Shop By</a>{" "}
              <a href="">
                <img className="w-3 h-2" src={down} alt="" />
              </a>
            </div>
            <div
              className={`py-4 f-full flex items-center space-x-1
            ${isCollectionOpen ? "border-b-4 border-home-bg" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                setIsCollectionOpen((prev) => !prev);
                if (!isCollectionOpen) {
                  setIsShopByOpen(false);
                }
              }}
            >
              <a href="">Collections</a>{" "}
              <a href="">
                <img className="w-3 h-2" src={down} alt="" />
              </a>
            </div>
            <div className={`py-4 f-full`}>
              <p>
                <Link to="/track-order">Track Order</Link>
              </p>
            </div>
            <div className=" py-4 f-full  ">
              <Link to="/faqs">FAQs</Link>
            </div>
            <div className="py-4 f-full   ">
              <a href="">Contact Us</a>
            </div>
          </div>

          {/* ===========Div 2-2 ============ */}
          <div className="w-1/5  flex justify-center items-center ">
            <Link to="/">
              <p className="font-tomorrow font-bold text-white text-[22px] py-4 uppercase">
                Phoenix
              </p>
            </Link>
          </div>
          {/* ===========Div 2-3 ============ */}
          <div className="w-2/5   text-white pr-32 py-4  font-rubik ">
            <nav className="flex justify-end gap-8 ">
              <a
                onClick={(e) => {
                  e.preventDefault();
                  setIsSearchOpen(true);
                  if (!isSearchOpen) {
                    setIsCollectionOpen(false);
                    setIsShopBy(false);
                  }
                }}
                href=""
              >
                <img className="w-6" src={search} alt="" />
              </a>
              <a href={userIsAuthenticated ? "/profile" : "/login"}>
                <img className="w-6" src={user} alt="" />
              </a>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsCartOpen(true);
                }}
                className="relative"
              >
                <img className="w-6" src={cart} alt="Cart" />

                {cartItems.length > 0 && (
                  <span className="absolute -top-3 bg-red-500 px-2 py-0 -right-4 text-white text-[10px] font-bold rounded-full lg:text-[16px]">
                    {cartItems.length}
                  </span>
                )}
              </button>

              {/* <Cart 
            isCartOpen={isCartOpen}
            setIsCartOpen={setIsCartOpen}
            /> */}
            </nav>
          </div>
        </div>
      </div>
      {/* For Mobile */}
      <div className="lg:hidden">
        <div className=" bg-home-bg w-full h-fit text-center py-1">
          <p className="font-rubik font-medium text-subtext-mobile lg:text-[14px]">
            ❤️SHOP NOW AND GET 10% OFF - USE CODE (FIRSTBUY)
          </p>
        </div>
        <div className="w-full flex  justify-center items-center  h-fit bg-home-bg-black ">
          <div className="w-3/5  pl-4  py-4 ">
            <a href="">
              <img
                onClick={(e) => {
                  e.preventDefault();
                  setIsMenuOpen(true);
                }}
                className="w-6"
                src={menu}
                alt=""
              />
            </a>
          </div>
          <div className="w-3/5  py-4 ">
            <Link to="/">
              <p className="font-tomorrow font-bold text-white text-h2-mobile text-center uppercase">
                Phoenix
              </p>
            </Link>
          </div>
          <div className="w-3/5 pr-4  flex justify-end items-center gap-4 py-4">
            <a href="">
              <img className="w-6 h-6" src={search} alt="" />
            </a>
            <a href={userIsAuthenticated ? "/profile" : "/login"}>
              <img className="w-6 h-6" src={user} alt="" />
            </a>
            {/* <button
            onClick={(e) => {
              e.preventDefault();
              setIsCartOpen(true);
            }}
            
          >
            <img className="w-6 h-6" src={cart} alt="" />
          </button> */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsCartOpen(true);
              }}
              className="relative"
            >
              <img className="w-6" src={cart} alt="Cart" />

              {cartItems.length > 0 && (
                <span className="absolute -top-3 bg-red-500 px-2 py-0 -right-4 text-white text-[16px] font-bold rounded-full ">
                  {cartItems.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
