import React from "react";
import { NavLink } from "react-router-dom";
import { popular } from "../JSON/PRODUCT_JSON";

const NewArival = () => {
  return (
    <div>
      <div className="flex justify-center">
        {" "}
        <h2
          className="mt-[50px]
         lg:mt-[110px] md:mt-[110px] text-2xl  md:text-3xl font-bold text-amber-800 drop-shadow-lg font-serif"
        >
          New Arrivals & Trending Products
        </h2>
      </div>
      <div className="flex justify-center">
        <span>
          Choice and contact on{" "}
          <span className="text-xl font-bold">+91 93040 33250</span>
        </span>
      </div>
      <div className="flex justify-center">
        <div className="md:flex md:gap-[20px]     mt-10 ">
          {popular &&
            popular.map((item, index) => {
              return (
                <>
                  <div key={item.id}>
                    <div className="mb-10">
                      <div>
                        <div className="mb-[-10px] border pl-2 pr-2 mt-[10px] rounded-md border-yellow-300 bg-yellow-400 ml-[10px] absolute">
                          {item.title}
                        </div>
                        <img
                          className="z-0 w-[300px] rounded-md shadow-md"
                          src={item.img}
                          alt={item.name}
                        />
                      </div>
                      {/* <div className="mt-1 font-serif text-gray-700 mb-2">
                      {item.name}
                    </div> */}
                      <div></div>
                      <div className="mt-[15px] flex justify-between">
                        <div className="">
                          <span className="font-serif border pl-3 pt-1 pb-1 rounded-md bg-purple-300 text-slate-700 pr-3">
                            {item.name}
                          </span>
                        </div>
                        <div className="font-serif text-[17px] border pl-3   rounded-md bg-green-300 text-slate-700 pr-3">
                          {item.price}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default NewArival;
