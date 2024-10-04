import { useState } from "react";
import "./App.css";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Product from "./component/pages/Product";
import AddCart from "./component/pages/AddCart";
import { NavLink, Route, Routes } from "react-router-dom";

import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

import { useUser } from "@clerk/clerk-react";
import ProductID from "./component/pages/ProductID";

function App() {
  const [toggleNav, setToggleNav] = useState(false);
  const handleToggle = () => {
    setToggleNav(!toggleNav);
  };
  const handleNavDis = () => {
    setToggleNav(false);
  };
  const { user } = useUser();
  return (
    <>
      <div>
        <div className={`md:border  md:h-[60px] grid md:grid-cols-2 gap-8`}>
          <div>
            <div className="grid grid-cols-2 ">
              <div className="p-2">
                <img
                  className="w-[250px]"
                  src="logo furniture.png"
                  alt="logo"
                />
              </div>
              <div className="md:hidden m-6 flex justify-end block float-end">
                {toggleNav ? (
                  <img
                    onClick={handleToggle}
                    className="h-[20px] "
                    src="close.png"
                    alt=""
                  />
                ) : (
                  <img
                    onClick={handleToggle}
                    className="h-[20px] "
                    src="burger-bar (1).png"
                    alt=""
                  />
                )}
              </div>
            </div>
            <div>
              {toggleNav ? (
                <div className="grid  first-line: bg-slate-500 block m-4 rounded-lg md:hidden md:grid-cols-4 md:gap-2 border">
                  <NavLink onClick={handleNavDis} className=" " to="/">
                    <div className=" w-[100%] text-center  text-white   p-[1.2em]">
                      Home
                    </div>
                  </NavLink>
                  <div>
                    <NavLink onClick={handleNavDis} to="about_us">
                      <div className=" w-[100%] text-center text-white    p-[1.2em]">
                        About us
                      </div>
                    </NavLink>
                  </div>
                  <div>
                    <NavLink onClick={handleNavDis} to="product_page">
                      <div className=" w-[100%] text-center  text-white  p-[1.2em]">
                        Product Page
                      </div>
                    </NavLink>
                  </div>
                  <div className=" ">
                    <NavLink onClick={handleNavDis} to="add_to_cart">
                      <div className=" w-[100%] text-center  text-white  p-[1.2em]">
                        Add to cart Page
                      </div>
                    </NavLink>
                  </div>
                  <div className="flex justify-center">
                    <SignedOut>
                      <SignInButton className="" />
                    </SignedOut>
                    <SignedIn>
                      <UserButton className="pb-4" />
                    </SignedIn>
                  </div>
                  <div>
                    <div className="text-sm text-center pr-2 text-slate-900">
                      {" "}
                      {user ? (
                        <h2>
                          Welcome, {user.firstName} {user.lastName}
                        </h2>
                      ) : (
                        <span className="text-sm text-center pr-2 text-slate-900">
                          Hii,
                          <br /> Guest
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          </div>

          <div className=" text-black h-[50px ] text-center items-center  hidden md:grid md:grid-cols-6 md:gap-2  ">
            <div className="  text-center ">
              <NavLink className="text-slate-900" to="/">
                Home
              </NavLink>
            </div>
            <div>
              <NavLink className="text-slate-900" to="about_us">
                About
              </NavLink>
            </div>
            <div>
              <NavLink className="text-slate-900" to="product_page">
                Product
              </NavLink>
            </div>
            <div>
              <NavLink className="text-slate-900" to="add_to_cart">
                Cart
              </NavLink>
            </div>
            <div className="pt-1 float-end">
              <SignedOut>
                <SignInButton className="pl-2 pr-2 pt-1 pb-1" />
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
            <div>
              <div className="text-sm pr-2 text-slate-500">
                {" "}
                {user ? (
                  <h2>
                    Welcome, {user.firstName} {user.lastName}
                  </h2>
                ) : (
                  <span className="text-sm text-center pr-2 text-slate-900">
                    Hii,
                    <br /> Guest
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* nav route */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/product_page" element={<Product />} />
          <Route path="/add_to_cart" element={<AddCart />} />
          <Route path="/product_page/:id" element={<ProductID />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
