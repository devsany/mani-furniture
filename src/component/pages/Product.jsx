import { useDispatch, useSelector } from "react-redux";
import {
  CAT_Bed_Room,
  CAT_DiningRoom,
  CAT_living_Room,
  CAT_Office,
  CAT_Outdoor,
  green,
  High_toLow,
  Low_toHigh,
} from "../../redux/action";
import { useEffect, useState } from "react";
import {
  ArrowDownSquareIcon,
  ArrowsUpFromLine,
  ArrowUpSquareIcon,
  CircleStopIcon,
  Filter,
  StarIcon,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const Product = () => {
  const value = useSelector((state) => state.data);
  const value1 = useSelector((state) => state.cat_liv);
  const dispatch = useDispatch();
  const [DataToLocalStorage, setDataToLocalStorage] = useState([]);

  const { user } = useUser();
  console.log(user);

  const handleCat = () => {
    dispatch(CAT_living_Room());
  };

  const handleGetId = (id) => {
    setLocalFn();
    const data = value.furniture.filter((item) => item.id == id);
    console.log(data[0]);
    setDataToLocalStorage([...DataToLocalStorage, data[0]]);
  };
  const setLocalFn = () => {
    localStorage.setItem("todoList", JSON.stringify(DataToLocalStorage));
  };
  useEffect(() => {
    dispatch(green());
  }, [dispatch]);

  return (
    <div>
      <div className="grid grid-cols-12 ">
        <div className="col-span-3 border">
          <div className="mt-10 ml-10">
            <div className="flex">
              <div>
                <Filter />
              </div>
              <div>Filter</div>
            </div>
            <div>
              <button
                className=" m-1 w-[90%] hover:text-white  active:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-1"
                onClick={() => {
                  dispatch(green());
                }}
              >
                Reset
              </button>
            </div>
            <div>
              <div>
                <button
                  className=" m-1 w-[90%] hover:text-white  active:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-1"
                  onClick={handleCat}
                >
                  Living room
                </button>
              </div>
              <div>
                <button
                  className=" m-1 w-[90%] hover:text-white  active:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-1"
                  onClick={() => dispatch(CAT_Bed_Room())}
                >
                  For Bed Room
                </button>
              </div>
              <div>
                <button
                  className=" m-1 w-[90%] hover:text-white  active:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-1"
                  onClick={() => dispatch(CAT_DiningRoom())}
                >
                  For Dining Room
                </button>
              </div>
              <div>
                <button
                  className=" m-1 w-[90%] hover:text-white  active:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-1"
                  onClick={() => dispatch(CAT_Outdoor())}
                >
                  For Outdoor Room
                </button>
              </div>
              <div>
                <button
                  className=" m-1 w-[90%] hover:text-white  active:text-white hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300  p-1"
                  onClick={() => dispatch(CAT_Office())}
                >
                  For Office Room
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="border col-span-9">
          <div className="border flex gap-2 justify-end">
            <div
              className="cursor-pointer font-sans flex  rounded-lg hover:text-white hover:bg-purple-900 text-sm bg-gray-200 p-2"
              onClick={() => dispatch(High_toLow())}
            >
              <div>
                <ArrowDownSquareIcon className="w-5 h-5" />
              </div>
              <div>High to Low</div>
            </div>
            <div
              className="cursor-pointer font-sans flex  rounded-lg hover:text-white hover:bg-purple-900 text-sm bg-gray-200 p-2"
              onClick={() => dispatch(Low_toHigh())}
            >
              <div>
                <ArrowUpSquareIcon className="w-5 h-5" />
              </div>
              <div>Low to high</div>
            </div>
          </div>
          {/* <button onClick={dispatch(CAT_living_Room())}>Living Room</button> */}
          {!value1 && (
            <div>
              {value && (
                <div className="md:grid md:grid-cols-4 pr-7 md:gap-3 sm:grid sm:grid-cols-1 sm:gap-3  ml-10">
                  {value.furniture &&
                    value.furniture.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="border mt-3 ">
                            <div>
                              <NavLink to={`/product_page/${item.id}`}>
                                <div className="flex justify-center">
                                  <img
                                    src={item.imageUrl}
                                    className="h-[170px]"
                                    alt={item.name}
                                  />
                                </div>
                                <div className="bg-slate-200  p-1 h-[90px]">
                                  <div>
                                    <div className="text-center  text-slate-600 font-thin text-xl">
                                      {item.name}
                                    </div>

                                    <div className="text-slate-600">
                                      ({item.material})
                                    </div>
                                  </div>
                                  <div>
                                    <span className="text-md">
                                      Rs {item.price} /-
                                    </span>
                                    <span className="float-right border border-green-400 pl-2 rounded-md text-sm bg-green-400 text-white pr-2">
                                      <div className="flex">
                                        <div>{item.rating}</div>
                                        <div className="p-[2px]">
                                          <StarIcon
                                            className="  w-[15px] h-[15px]"
                                            props="hii"
                                          />
                                        </div>
                                      </div>
                                    </span>
                                  </div>
                                </div>
                              </NavLink>
                              <div className="bg-slate-200 p-1 h-[35px]">
                                <div
                                  onClick={() => {
                                    handleGetId(item.id);
                                  }}
                                  className="text-center  ml-5 mr-5 rounded-md cursor-pointer font-bold   bg-green-400 text-white   hover:bg-purple-600"
                                >
                                  Add to Cart
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          )}
          {value1 && (
            <div className="md:grid md:grid-cols-4 md:gap-3 sm:grid sm:grid-cols-1 sm:gap-3 mt-10 ml-10">
              {value1 &&
                value1.map((item, index) => {
                  return (
                    <div key={index}>
                      <NavLink to={`/product_page/${item.id}`}>
                        <div className="border mt-3 ">
                          <div>
                            <div className="flex justify-center">
                              <img
                                src={item.imageUrl}
                                className="h-[170px]"
                                alt={item.name}
                              />
                            </div>
                            <div className="bg-slate-200  p-1 h-[90px]">
                              <div>
                                <div className="text-center  text-slate-600 font-thin text-xl">
                                  {item.name}
                                </div>

                                <div className="text-slate-600">
                                  ({item.material})
                                </div>
                              </div>
                              <div>
                                <span className="text-md">
                                  Rs {item.price} /-
                                </span>
                                <span className="float-right border border-green-400 pl-2 rounded-md text-sm bg-green-400 text-white pr-2">
                                  <div className="flex">
                                    <div>{item.rating}</div>
                                    <div className="p-[2px]">
                                      <StarIcon
                                        className="  w-[15px] h-[15px]"
                                        props="hii"
                                      />
                                    </div>
                                  </div>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </NavLink>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
