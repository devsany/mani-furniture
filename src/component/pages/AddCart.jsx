import { Button } from "../../../components/ui/button";
import { useUser } from "@clerk/clerk-react";
import { NavLink } from "react-router-dom";
import app from "../firebaseConfig/firebase";
import { ref, get, getDatabase } from "firebase/database";
import { useEffect, useState } from "react";
import { ShoppingBag } from "lucide-react";

// import { Redirect, Route, Routes } from "react-router-dom"; // or whatever routing library you use

// import { Redirect } from "react-router-dom";
const AddCart = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const { isLoaded, user } = useUser();
  console.log("data", data);
  // const [getLocalStorageItem, setGetLocalStorageItem] = useState([]);
  // const storedTodos = localStorage.getItem("todoList");
  // console.log(JSON.parse(storedTodos));
  // setGetLocalStorageItem(JSON.parse(storedTodos));
  const fetchData = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / users /" + `${user.id}`);
    const snapshot = await get(dataRef);
    console.log(snapshot);
    if (snapshot.exists()) {
      setData(Object.values(snapshot.val()));
    } else {
      alert("data is not found");
    }
  };
  const fetchData1 = async () => {
    const db = getDatabase(app);
    const dataRef = ref(db, "data / custom /" + `${user.id}`);
    const snapshot = await get(dataRef);
    console.log(snapshot);
    if (snapshot.exists()) {
      setData1(Object.values(snapshot.val()));
    } else {
      alert("data is not found");
    }
  };
  useEffect(() => {
    fetchData();
    fetchData1();
  }, []);
  // Wait until the user information is loaded
  if (!isLoaded) {
    return (
      <div>
        <div className="flex h-[100vh] justify-center items-center">
          <h2 className="text-4xl pb-2  font-bold bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent scroll-m-30 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Loading...
          </h2>
        </div>
      </div>
    );
  }

  // If user is not logged in, redirect to another page

  // Render the cart page for logged-in users
  return (
    <div>
      <div>
        {user ? (
          <div className="grid md:grid-cols-2">
            <div>
              {data &&
                data.map((item, index) => {
                  return (
                    <>
                      <div className="border p-4 m-3 md:grid gap-5 md:grid-cols-4  grid   grid-cols-2">
                        <div>
                          <img
                            className="w-[60px] md:w-[100px] shadow-lg rounded-md"
                            src={item.imageUrl}
                            alt=""
                          />
                        </div>
                        <div className="flex items-center">
                          <button>+</button>
                          <span className="text-sm p-3">{item.price}</span>{" "}
                          <button>-</button>
                        </div>
                        <div className=" flex items-center text-sm text-gray-700">
                          {item.name} <br /> {item.category} <br />
                          Price: {item.price}
                          <br />
                          {item.color}
                        </div>
                        <div className="flex items-center">
                          {/* <Button onClick={handleClick} variant="destructive">
                          Delete
                        </Button> */}
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
            <div>
              <div className="border m-3">
                <div className="flex justify-center mt-3 ">
                  <div className="text-2xl font-bold text-gray-700">
                    Customize the product Data
                  </div>
                </div>
                {data1 &&
                  data1.map((item, index) => {
                    return (
                      <>
                        <div className="p-3   border-b-4 m-2">
                          <div className="pl-3">{index + 1}</div>
                          <div className="pl-2 pr-2 bg-purple-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-purple-700">
                            Product Name : {item.t}
                          </div>
                          <div className="grid grid-cols-3">
                            <div className="pl-2 pr-2 bg-lime-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-green-700">
                              Product Length : {item.l} {item.lm}
                            </div>
                            <div className="pl-2 pr-2 bg-orange-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-orange-700">
                              Product Breadth : {item.b} {item.bm}
                            </div>
                            <div className="pl-2 pr-2 bg-yellow-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-yellow-700">
                              Product Height : {item.h} {item.hm}
                            </div>
                          </div>
                          <div className="grid grid-cols-4">
                            <div className="pl-2 pr-2 bg-blue-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-blue-700">
                              {" "}
                              Type : {item.t}
                            </div>
                            <div className="pl-2 pr-2 bg-orange-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-orange-700">
                              {" "}
                              Quantity : {item.q}
                            </div>
                          </div>
                          <div>
                            <div className="border p-2 m-1 rounded-lg bg-gray-100">
                              <span className="pl-2 pr-2 bg-red-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-red-700">
                                {" "}
                                Instruction 1:
                              </span>{" "}
                              <br />
                              <span className="pl-2"> {item.i1}</span>
                            </div>
                          </div>
                          <div>
                            <div className="border p-2 m-1 rounded-lg bg-gray-100">
                              <span className="pl-2 pr-2 bg-red-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-red-700">
                                {" "}
                                Instruction 2:
                              </span>{" "}
                              <br />
                              <span className="pl-2"> {item.i2}</span>
                            </div>
                          </div>
                          <div>
                            <div className="border p-2 m-1 rounded-lg bg-gray-100">
                              <span className="pl-2 pr-2 bg-red-400 md:text-md text-sm m-1 rounded-lg border-2 text-gray-700 border-red-700">
                                {" "}
                                Instruction 3:
                              </span>{" "}
                              <br />
                              <span className="pl-2"> {item.i3}</span>
                            </div>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        ) : (
          <div className="h-[100vh] bg-gradient-to-t from-green-50 to-pink-100  ">
            <div className="md:grid h-[200px] md:pt-[120px]  md:grid-cols-2 ">
              <div className="p-[50px]  md:ml-[70px]   flex items-center ">
                <div>
                  <h2 className="text-4xl  p-1 font-bold bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Get ready to shine — add it to your cart!
                  </h2>

                  <Button
                    variant="secondary"
                    className="border mt-4 md:mt-5 hover:border-yellow-500 border-pink-300 shadow-md shadow-yellow-100"
                  >
                    <NavLink to="https://leading-wallaby-6.accounts.dev/sign-in#/?redirect_url=http%3A%2F%2Flocalhost%3A5174%2F">
                      <div className="flex">
                        <div className="text-pink-500">Get Started </div>
                        <div className="pt-[2px]">
                          <ShoppingBag className="ml-2 text-pink-500 border-none h-4 w-4" />
                        </div>
                      </div>
                    </NavLink>
                  </Button>
                </div>
              </div>
              <div>
                <img src="add_to_cart-removebg-preview.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Your cart components go here */}
    </div>
  );
};

export default AddCart;
