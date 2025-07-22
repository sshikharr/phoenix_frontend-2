import React from "react";

import { Suspense } from "react";

import Header from "../common/Header";

const Footer = React.lazy(() => import("../components/Footer"));

const TrackOrder = () => {
 
  

  

  return (
    <div className="w-full h-screen">
     

      

      

      <Header />
      {/* ---------------------------------DIV 3-------------------------------------------- */}
      <div className="w-full px-32 py-20  h-fit">
        <h1 className="font-tomorrow font-bold text-[32px] text-center">
          TRACK YOUR ORDER
        </h1>
        <div className="mt-20 flex px-16">
          <div className="w-1/2 h-full">
            <div>
              <p className="font-rubik font-normal">Order Number</p>
              <input
                type="text"
                className="border border-black mt-4 py-3 w-[350px]"
              />
            </div>
            <div className="mt-4">
              <p className="font-rubik font-normal">Email or Phone Number</p>
              <input
                type="text"
                className="border border-black mt-4 py-3 w-[350px]"
              />
            </div>
            <div className="mt-8">
              <button className="bg-home-bg-black py-2 px-10 text-white">
                Track
              </button>
            </div>
          </div>
          <div className="w-1/2 flex">
            <div className="flex flex-col items-center gap-2 relative">
              <div className="h-24 w-px bg-order-line"></div>
              <p className="absolute bg-white px-2 text-order-line  -translate-y-1/2  top-24">
                OR
              </p>
              <div className="h-24 w-px bg-order-line"></div>
            </div>
            <div className="ml-32">
              <div>
                <p className="font-rubik">Tracking Number</p>
                <input
                  type="text"
                  className="border border-black mt-4 py-3 w-[350px] "
                />
              </div>
              <div className="mt-8">
                <button className="bg-home-bg-black py-2 px-10 text-white">
                  Track
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
};

export default TrackOrder;
