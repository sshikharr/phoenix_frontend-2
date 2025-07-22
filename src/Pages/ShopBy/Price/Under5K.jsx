import { useState, useEffect } from "react";
import red from "../../../assets/red.png";
import yellow from "../../../assets/yellow.png";
import gray from "../../../assets/gray.png";
import green from "../../../assets/green.png";
import blue from "../../../assets/blue.png";
import black from "../../../assets/black.png";
import drop from "../../../assets/drop.png";
import close from "../../../assets/close black.svg"
import Header from "../../../common/Header";
import star from "../../../assets/start.png";
import { Link } from "react-router-dom";
import Bulk from "../../../components/Bulk";
import Footer from "../../../components/Footer";
import { AnimatePresence, motion } from "framer-motion";
import products from "../../../products";
import { useCart } from "../../../context/CartContext";


const Under5K = () => {
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isFilterDrop, setIsFilterDrop] = useState(false);
  const [isSortBy, setIsSortBy] = useState(false);
  const [sortOption, setSortOption] = useState("");
  const [rangeValue, setRangeValue] = useState(0);
  const minValue = 0;
  const maxValue = 30000;
  const { addToCart } = useCart();

  useEffect(() => {
    const filtered = products.filter(
      (product) => Number(product.actualPrice.replace(/,/g, "")) < 5000 
    );
    setFilteredProducts(filtered);
  }, []);
  
  useEffect(() => {
    const sortProducts = () => {
      const sorted = [...filteredProducts];

      switch (sortOption) {
        case "Alphabetically, A-Z":
          sorted.sort((a, b) => a.description.localeCompare(b.description));
          break;

        case "Alphabetically, Z-A":
          sorted.sort((a, b) => b.description.localeCompare(a.description));
          break;

        case "Price, low to high":
          sorted.sort(
            (a, b) =>
              Number(a.actualPrice.replace(/,/g, "")) -
              Number(b.actualPrice.replace(/,/g, ""))
          );
          break;

        case "Price, high to low":
          sorted.sort(
            (a, b) =>
              Number(b.actualPrice.replace(/,/g, "")) -
              Number(a.actualPrice.replace(/,/g, ""))
          );
          break;

        // If it's "Best Seller", "Features", or date options,
        // we'll need additional data fields to implement these
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

  const handleAddToCart = (product) => {
    addToCart(product);
    alert(`${product.description} has been added to the cart!`);
  };

  return (
    <div>
      <Header />
      <div className=" w-full px-8 lg:px-16 h-fit flex flex-col lg:flex-row pt-10 lg:pt-20">
        <div className="hidden lg:block w-full lg:w-1/5 h-fit">
          <h1 className="font-rubik text-home-bg-black">
            Collections /{" "}
            <span className="text-text-light-gray">Under 5K</span>
          </h1>
          <h1 className="mt-8 text-home-bg-black font-rubik text-[24px]">
            Filter by Price
          </h1>
          <input
            className="mt-4"
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
            <img className="w-8 h-8" src={red} alt="" />
            <img className="w-8 h-8" src={gray} alt="" />
            <img className="w-8 h-8" src={yellow} alt="" />
            <img className="w-8 h-8" src={green} alt="" />
            <img className="w-8 h-8" src={blue} alt="" />
          </div>
        </div>

        <div className="w-full lg:w-4/5 h-fit">
          <div className="hidden lg:block py-0">
            <select
              id="sortBy"
              // value={sortOption}
              // onChange={handleSortChange}
              className="w-28 px-4 py-2 text-text-light-gray bg-drop-white"
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
          <div className="w-full lg:hidden h-fit flex  justify-center items-center gap-4">
            <div className="w-3/4 h-full flex gap-2">
              {/* Filter By */}
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
                        <div>
                          <p className="text-h2-mobile">Filters</p>
                        </div>
                        <div>
                          <img
                            onClick={() => setIsFilterDrop(false)}
                            className="w-6 cursor-pointer"
                            src={close}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-h4-mobile">Colors</p>
                        <div className="mt-4 space-y-4">
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Black(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Black(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Black(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Black(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Black(12)
                            </p>
                          </div>
                          <div className="flex gap-2 items-center">
                            <img className="w-8" src={black} alt="" />
                            <p className="font-rubik text-body-mobile">
                              Black(12)
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setIsFilterDrop(true);
                }}
                className="border-2 border-black flex gap-2 items-center px-2 py-1"
              >
                <p className="text-subtext-mobile">Filter</p>
                <img className="w-3 h-3" src={drop} alt="" />
              </button>
              {/* Sort By */}
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
                        <div>
                          <p className="text-h2-mobile font-rubik">Sort By</p>
                        </div>
                        <div>
                          <img
                            onClick={() => setIsSortBy(false)}
                            className="w-6 cursor-pointer"
                            src={close}
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="mt-8 ml-2">
                        <ul className="font-roboto text-body-mobile space-y-4 cursor-pointer">
                          {[
                            "Best Seller",
                            "Features",
                            "Alphabetically, A-Z",
                            "Alphabetically, Z-A",
                            "Price, low to high",
                            "Price, high to low",
                            "Date, old to new",
                            "Date, new to old",
                          ].map((option, index) => (
                            <li
                              key={index}
                              onClick={() => {
                                setSortOption(option);
                                setIsSortBy(false);
                              }}
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
                onClick={(e) => {
                  e.preventDefault();
                  setIsSortBy(true);
                }}
                className="border-2 border-black flex gap-2 items-center px-2 py-1"
              >
                <p className="text-subtext-mobile">Sort By</p>
                <img className="w-3 h-3" src={drop} alt="" />
              </button>
            </div>
            <div className="w-2/4 flex justify-center items-center  h-full">
              <p className="font-rubik text-body-mobile text-black text-opacity-50">
                1131 Products
              </p>
            </div>
          </div>

          <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-4 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="w-full py-4 flex flex-col justify-between h-full"
              >
                <div>
                  <Link to={`/product/${product.id}`}>
                    <img src={product.image1} alt="Product Image" />
                  </Link>
                </div>
                <div className="flex m-auto flex-col mx-0 lg:mx-8 text-left pr-0 mt-4 font-rubik font-medium">
                  <div>
                    <p className="text-subtext-mobile lg:text-subtext-desktop">
                      {product.description}
                    </p>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <img className="w-24 h-4" src={star} alt="Rating Stars" />
                    <p className="font-rubik text-[10px] mt-1 text-arrivals-rating font-light">
                      2000
                    </p>
                  </div>
                  <div className="mt-4 font-rubik">
                    <p className=" space-x-2 font-rubik">
                      <span className="text-[10px] line-through text-sub-text-best">
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          Number(product.price.replace(/,/g, ""))
                        )}
                        .00
                      </span>
                      <span className="text-black text-body-mobile lg:text-body-desktop">
                        ₹
                        {new Intl.NumberFormat("en-IN").format(
                          Number(product.actualPrice.replace(/,/g, ""))
                        )}
                        .00
                      </span>
                    </p>
                  </div>
                </div>
                <div className="font-rubik text-subtext-mobile lg:text-subtext-desktop flex border border-home-bg-black w-fit m-auto px-4 lg:px-8 py-2 lg:py-4 mt-4 text-home-bg-black font-medium">
                  <button onClick={() => handleAddToCart(product)}>
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Bulk />
      <Footer />
    </div>
  );
};

export default Under5K;
