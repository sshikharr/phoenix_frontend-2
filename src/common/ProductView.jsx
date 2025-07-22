import { useState } from "react";
import red from "../assets/red.png";
import gray from "../assets/gray.png";
import yellow from "../assets/yellow.png";
import blue from "../assets/blue.png";
import green from "../assets/green.png";

const ProductView = () => {
  //   Range
  const [rangeValue, setRangeValue] = useState(0);
  const minValue = 0; // Fixed minimum value
  const maxValue = 30000; // Fixed maximum value

  const [sortOption, setSortOption] = useState("default");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Handle the selection change
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSortOption(selectedOption);
  
    let sortedProducts = [...filteredProducts]; // Create a copy to avoid direct mutation
  
    switch (selectedOption) {
      case "priceLowToHigh":
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      case "ratingHighToLow":
        sortedProducts.sort((a, b) => b.rating - a.rating);
        break;
      case "ratingLowToHigh":
        sortedProducts.sort((a, b) => a.rating - b.rating);
        break;
      case "newestFirst":
        sortedProducts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        break;
      default:
        break;
    }
    
    setFilteredProducts(sortedProducts);
  };
  
  return (
    <div className="w-full px-16  h-fit flex pt-20">
      <div className="w-1/5 h-fit ">
        <h1 className="font-rubik text-home-bg-black">
          Home / <span className="text-text-light-gray">Posture</span>
        </h1>
        <h1 className="mt-8 text-home-bg-black font-rubik text-[24px]">
          Filter by Price
        </h1>
        <input
          className="mt-4 "
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
          <img src={red} alt="" />
          <img src={gray} alt="" />
          <img src={yellow} alt="" />
          <img src={green} alt="" />
          <img src={blue} alt="" />
        </div>
      </div>
      <div className="w-4/5 h-fit ">
        <div className="py-0">
          <select
            id="sortBy"
            value={sortOption}
            onChange={handleSortChange}
            className=" w-24 px-4 py-2  text-text-light-gray bg-drop-white"
          >
            <option value="default">Sort By</option>
            <option value="priceLowToHigh">Price: Low to High</option>
            <option value="priceHighToLow">Price: High to Low</option>
            <option value="ratingHighToLow">Rating: High to Low</option>
            <option value="ratingLowToHigh">Rating: Low to High</option>
            <option value="newestFirst">Newest First</option>
          </select>
        </div>
        <div className="w-full grid grid-cols-3 px-8 gap-y-20">

        </div>
      </div>
    </div>
  );
};

export default ProductView;
