import { useState } from "react";

import { Suspense } from "react";



import Bulk from "../../../components/Bulk";
import Footer from "../../../components/Footer";
import chair1 from "../../../assets/chair1.png";
import star from "../../../assets/start.png";
import red from "../../../assets/red.png";
import gray from "../../../assets/gray.png";
import yellow from "../../../assets/yellow.png";
import blue from "../../../assets/blue.png";
import green from "../../../assets/green.png";
import Header from "../../../common/Header";

const Posture = () => {
  

  //   Range
  const [rangeValue, setRangeValue] = useState(0);
  const minValue = 0; // Fixed minimum value
  const maxValue = 30000; // Fixed maximum value

  const [sortOption, setSortOption] = useState("default");

  // Handle the selection change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);

    // Add logic here to sort your data based on the selected option
  };

 

  const collections2 = [
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
    {
      discount: "-50%",
      image: chair1,
      description:
        "SmileSellers Hector High Back Multi-Purpose Gaming Chair, Mesh..",
      image2: star,
      rating: "2000",
      price: "Rs. 12999.00",
      actualprice: "Rs. 12999.00",
    },
  ];

  return (
    <div className="w-full h-screen">
      <Header />

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
            {collections2.map((collection, index) => (
              <div key={index} className="w-full  h-fit py-4">
                {/* -----------------Div-1-1-------------------- */}
                <div className="w-fit h-fit px-4 py-0 flex items-end justify-end   bg-discount-bg text-white font-rubik ml-56">
                  <p>{collection.discount}</p>
                </div>
                {/* -----------------Div-1-2-------------------- */}
                <div>
                  <img src={collection.image} alt="" />
                </div>
                {/* -----------------Div-1-3-------------------- */}
                <div className=" flex m-auto flex-col  mx-8 text-left pr-20 mt-4 font-rubik font-medium">
                  <div>
                    <p>{collection.description}</p>
                  </div>
                  <div className="mt-2 flex gap-4 ">
                    <div>
                      <img src={collection.image2} alt="" />
                    </div>
                    <div className="mt-1">
                      <p className="font-rubik text-arrivals-rating font-light">
                        {collection.rating}
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 font-rubik">
                    <p className="text-[16px]">
                      <span className="line-through text-sub-text-best  text-[10px]">
                        {collection.price}
                      </span>
                      <span className="ml-2 text-black">
                        {collection.actualprice}
                      </span>
                    </p>
                  </div>
                </div>
                {/* -----------------Div-1-4-------------------- */}
                <div className="font-rubik flex  border-2 border-home-bg-black w-fit m-auto px-8 py-4 mt-4 text-home-bg-black font-medium">
                  <button>ADD TO CART</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Suspense>
        <Bulk />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Posture;
