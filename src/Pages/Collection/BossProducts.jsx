import { useEffect, useState } from "react";
import { Suspense } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Bulk from "../../components/Bulk";
import Footer from "../../components/Footer";
import star from "../../assets/start.png";
import drop from "../../assets/drop.png";
import red from "../../assets/red.png";
import gray from "../../assets/gray.png";
import yellow from "../../assets/yellow.png";
import blue from "../../assets/blue.png";
import green from "../../assets/green.png";
import Header from "../../common/Header";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "../../context/CartContext";

// Toast component
const Toast = ({ message, isVisible, onClose }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        initial={{ opacity: 0, y: -50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -50, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="fixed top-4 right-4 z-50 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
        <span className="font-medium">{message}</span>
      </motion.div>
    )}
  </AnimatePresence>
);

const BasicProducts = () => {
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [rangeValue, setRangeValue] = useState(0);
  const minValue = 0;
  const maxValue = 30000;
  const [sortOption, setSortOption] = useState("default");
  const [isFilterDrop, setIsFilterDrop] = useState(false);
  const [isSortBy, setIsSortBy] = useState(false);
  
  // Toast state
  const [toast, setToast] = useState({ message: '', isVisible: false });

  // Show toast function
  const showToast = (message) => {
    setToast({ message, isVisible: true });
    setTimeout(() => {
      setToast({ message: '', isVisible: false });
    }, 3000);
  };

  // Fetch products dynamically
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://phoenix-backend-50z8.onrender.com/api/products/all-products",
          {
            params: { page: 1, limit: 100 }, // Adjust limit as needed
          }
        );
        const filteredProducts = response.data.products;
        setFilteredProducts(filteredProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Sort products
  useEffect(() => {
    const sortProducts = () => {
      const sorted = [...filteredProducts];

      switch (sortOption) {
        case "priceLowToHigh":
          sorted.sort((a, b) => Number(a.price) - Number(b.price));
          break;
        case "priceHighToLow":
          sorted.sort((a, b) => Number(b.price) - Number(a.price));
          break;
        case "ratingHighToLow":
          sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
          break;
        case "ratingLowToHigh":
          sorted.sort((a, b) => (a.rating || 0) - (b.rating || 0));
          break;
        case "newestFirst":
          sorted.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          break;
        default:
          return sorted;
      }
      return sorted;
    };

    if (filteredProducts.length > 0) {
      const sortedProducts = sortProducts();
      setFilteredProducts(sortedProducts);
    }
  }, [sortOption, filteredProducts.length]);

  // Handle body overflow for filter/sort dropdowns
  useEffect(() => {
    document.body.style.overflow = isSortBy ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSortBy]);

  useEffect(() => {
    document.body.style.overflow = isFilterDrop ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isFilterDrop]);

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  return (
    <div className="w-full h-screen">
      <Header />
      
      {/* Toast */}
      <Toast 
        message={toast.message} 
        isVisible={toast.isVisible} 
        onClose={() => setToast({ message: '', isVisible: false })}
      />
      
      <div className="w-full px-8 lg:px-16 h-fit flex flex-col lg:flex-row pt-10 lg:pt-20">
        <div className="hidden lg:block w-full lg:w-1/5 h-fit">
          <h1 className="font-rubik text-home-bg-black">
            Collections /{" "}
            <span className="text-text-light-gray">Basic Chairs</span>
          </h1>
          <h1 className="mt-8 text-home-bg-black font-rubik text-[24px]">
            Filter by Price
          </h1>
          <input
            className="mt-4 hover:opacity-80 transition-opacity duration-200"
            type="range"
            min={minValue}
            max={maxValue}
            step="100"
            value={rangeValue}
            onChange={(e) => setRangeValue(Number(e.target.value))}
          />
          <p className="mt-2 text-text-light-gray font-rubik">
            Price: {minValue.toLocaleString()} - {rangeValue.toLocaleString()}
          </p>
          <p className="mt-4 font-rubik text-[24px]">Color</p>
          <div className="flex gap-2 mt-4">
            <img className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200" src={red} alt="Red" />
            <img className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200" src={gray} alt="Gray" />
            <img className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200" src={yellow} alt="Yellow" />
            <img className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200" src={green} alt="Green" />
            <img className="w-8 h-8 cursor-pointer hover:scale-110 transition-transform duration-200" src={blue} alt="Blue" />
          </div>
        </div>
        <div className="w-full lg:w-4/5 h-fit">
          <div className="hidden lg:block py-0">
            <select
              id="sortBy"
              value={sortOption}
              onChange={handleSortChange}
              className="w-28 px-4 py-2 text-text-light-gray bg-drop-white hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
            >
              <option value="default">Sort By</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="ratingHighToLow">Rating: High to Low</option>
              <option value="ratingLowToHigh">Rating: Low to High</option>
              <option value="newestFirst">Newest First</option>
            </select>
          </div>
          {/* For Mobile */}
          <div className="w-full lg:hidden h-fit flex justify-center items-center gap-4">
            <div className="w-3/4 h-full flex gap-2">
              <AnimatePresence>
                {isFilterDrop && (
                  <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-10 bg-black bg-opacity-50"
                  >
                    <div className="w-full h-fit py-10 bg-white px-8">
                      <div className="flex justify-between">
                        <p className="text-h2-mobile">Filters</p>
                        <button 
                          onClick={() => setIsFilterDrop(false)}
                          className="hover:opacity-70 transition-opacity duration-200"
                        >
                          <span className="text-subtext-mobile">Close</span>
                        </button>
                      </div>
                      <div className="mt-4 cursor-pointer">
                        <p className="text-h4-mobile">Colors</p>
                        <div className="mt-4 space-y-4">
                          <div className="flex gap-2 items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                            <img className="w-8" src={red} alt="Red" />
                            <p className="font-rubik text-body-mobile">Red</p>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                            <img className="w-8" src={gray} alt="Gray" />
                            <p className="font-rubik text-body-mobile">Gray</p>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                            <img className="w-8" src={yellow} alt="Yellow" />
                            <p className="font-rubik text-body-mobile">Yellow</p>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                            <img className="w-8" src={green} alt="Green" />
                            <p className="font-rubik text-body-mobile">Green</p>
                          </div>
                          <div className="flex gap-2 items-center hover:bg-gray-50 p-2 rounded transition-colors duration-200">
                            <img className="w-8" src={blue} alt="Blue" />
                            <p className="font-rubik text-body-mobile">Blue</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsFilterDrop(true)}
                className="border-2 border-black flex gap-2 items-center px-4 py-1 hover:bg-black hover:text-white transition-colors duration-200"
              >
                <p className="text-subtext-mobile">Filter</p>
                <img className="w-2 h-2" src={drop} alt="Dropdown" />
              </button>
              <AnimatePresence>
                {isSortBy && (
                  <motion.div
                    initial={{ y: "-100%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 z-10 bg-black bg-opacity-50"
                  >
                    <div className="w-full h-fit py-10 bg-white px-8">
                      <div className="flex justify-between">
                        <p className="text-h2-mobile font-rubik">Sort By</p>
                        <button 
                          onClick={() => setIsSortBy(false)}
                          className="hover:opacity-70 transition-opacity duration-200"
                        >
                          <span className="text-subtext-mobile">Close</span>
                        </button>
                      </div>
                      <div className="mt-8 ml-2">
                        <ul className="font-roboto text-body-mobile space-y-4 cursor-pointer">
                          {[
                            "Price: Low to High",
                            "Price: High to Low",
                            "Rating: High to Low",
                            "Rating: Low to High",
                            "Newest First",
                          ].map((option, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSortOption(
                                  option
                                    .toLowerCase()
                                    .replace(/: /g, "")
                                    .replace(/ /g, "")
                                );
                                setIsSortBy(false);
                              }}
                              className="hover:bg-gray-100 p-2 rounded transition-colors duration-200"
                            >
                              {option}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={() => setIsSortBy(true)}
                className="border-2 border-black flex gap-2 items-center px-4 py-1 hover:bg-black hover:text-white transition-colors duration-200"
              >
                <p className="text-subtext-mobile">Sort By</p>
                <img className="w-2 h-2" src={drop} alt="Dropdown" />
              </button>
            </div>
            <div className="w-2/4 flex justify-center items-center h-full">
              <p className="font-rubik text-body-mobile text-black text-opacity-50">
                {filteredProducts.length} Products
              </p>
            </div>
          </div>
          <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full py-4 flex flex-col justify-between h-full group hover:shadow-lg transition-shadow duration-300 rounded-lg p-2"
              >
                <div className="overflow-hidden rounded-lg">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.imageUrls?.[0] || "https://via.placeholder.com/150"}
                      alt={product.title}
                      className="w-full h-auto transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>
                </div>
                <div className="flex m-auto flex-col mx-8 text-left pr-0 mt-4 font-rubik font-medium">
                  <div>
                    <p className="group-hover:text-blue-600 transition-colors duration-200">{product.title}</p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <img className="w-20 h-4" src={star} alt="Rating Stars" />
                    <p className="font-rubik text-[10px] mt-1 text-arrivals-rating font-light">
                      {product.rating || 2000}
                    </p>
                  </div>
                  <div className="mt-4 font-rubik">
                    <p className="text-[16px] space-x-2">
                      <span className="line-through text-sub-text-best text-[10px]">
                        ₹{new Intl.NumberFormat("en-IN").format(Number(product.price) + 500)}.00
                      </span>
                      <span className="text-black">
                        ₹{new Intl.NumberFormat("en-IN").format(Number(product.price))}.00
                      </span>
                    </p>
                  </div>
                </div>
                <div className="font-rubik flex border-2 border-home-bg-black w-fit m-auto px-8 py-4 mt-4 text-home-bg-black font-medium hover:bg-home-bg-black hover:text-white transform hover:scale-105 transition-all duration-200 cursor-pointer">
                  <button
                    onClick={() => {
                      addToCart(product);
                      showToast(`${product.title} added to cart!`);
                    }}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Suspense>
        {/* <Bulk /> */}
        <Footer />
      </Suspense>
    </div>
  );
};

export default BasicProducts;