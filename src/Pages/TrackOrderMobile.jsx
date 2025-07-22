import React, { Suspense, lazy, useState } from "react";
import Footer from "../components/Footer";

const Header = lazy(() => import("../common/Header"));

const TrackOrderMobile = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("order");

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="w-full px-8">
        {/* Headings */}
        <div className="w-full py-4 flex">
          <div
            className={`w-1/2 text-center cursor-pointer ${
                activeTab === 'order' ? "border-b-4 border-b-black pb-2" : ""
            }`}
            onClick={() => setActiveTab("order")}
          >
            <p className="text-h4-mobile font-rubik text-auth-bg">
              Order Number
            </p>
          </div>
          <div
            className={`w-1/2 text-center cursor-pointer ${
                activeTab === 'tracking' ? "border-b-4 border-b-black pb-2" : ""
            }`}
            onClick={() => setActiveTab("tracking")}
          >
            <p className="text-h4-mobile font-rubik text-auth-bg">
              Tracking Number
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="py-4">
          {activeTab === "order" && (
            <div className="">
              {/* Content for Order Number */}
              <form className="font-rubik text-h4-mobile" action="">
                <label className="w-full space-y-2" htmlFor="">
                    <p>Order Number</p>
                    <input
                     type="text"
                     className="w-full py-3 border pl-4 border-black placeholder:font-rubik placeholder:text-auth-bg"
                     />
                </label>
                <label className="w-full space-y-2" htmlFor="">
                    <p className="mt-4">Email or Phone Number</p>
                    <input
                     type="text"
                     className="w-full py-3 border pl-4 border-black placeholder:font-rubik placeholder:text-auth-bg"
                     />
                </label>

                <button className="w-full bg-home-bg-black py-3 text-white mt-8 font-rubik">
                    Track
                </button>
              </form>
            </div>
          )}
          {activeTab === "tracking" && (
            <div className="">
              {/* Content for Tracking Number */}
              <form className="font-rubik text-h4-mobile" action="">
                <label className="w-full space-y-2" htmlFor="">
                    <p>Tracking Number</p>
                    <input
                     type="text"
                     className="w-full py-3 border pl-4 border-black placeholder:font-rubik placeholder:text-auth-bg"
                     />
                </label>
                

                <button className="w-full bg-home-bg-black py-3 text-white mt-8 font-rubik">
                    Track
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default TrackOrderMobile;
