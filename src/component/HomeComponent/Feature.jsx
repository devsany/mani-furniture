import React from "react";
import { feature } from "../JSON/PRODUCT_JSON";
import { NavLink } from "react-router-dom";

const Feature = () => {
  return (
    <div className="flex justify-center">
      <div className="md:flex md:gap-[100px]     mt-10 ">
        {feature &&
          feature.map((item, index) => {
            return (
              <>
                <div key={item.id}>
                  <div className="mb-10">
                    <div>
                      <img
                        className="w-[300px] rounded-md shadow-md"
                        src={item.img}
                        alt={item.name}
                      />
                    </div>
                    {/* <div className="mt-1 font-serif text-gray-700 mb-2">
                      {item.name}
                    </div> */}
                    <div className="mt-[15px]">
                      <NavLink>
                        <span className="font-serif">{item.name}</span>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Feature;
