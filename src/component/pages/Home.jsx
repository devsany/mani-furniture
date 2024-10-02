import { Button } from "../../../components/ui/button";
import { ChevronRight } from "lucide-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="h-[100vh] bg-gradient-to-t from-orange-50 to-blue-100  ">
        <div className="grid  items-center md:grid-cols-2 pt-[70px] md:pt-[130px] md:pt-[80px]">
          <div className="ml-10 mr-10 items-center ">
            <h2 className="text-4xl p-1 font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Furniture That Fits Your Life, Style, and Space
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              At{" "}
              <span className="bg-gradient-to-l text-white pb-1 pt-1 rounded pl-1 pr-1 from-teal-400 to-blue-500">
                {" "}
                Mani Furniture
              </span>{" "}
              , we create furniture that enhances your living space. Our
              collection combines quality, design, and comfort, ensuring every
              piece feels right at home. Discover how our furniture can
              transform your everyday moments into extraordinary experiences
            </p>
            <div className="mt-5">
              <Button
                variant="secondary"
                className="border border-blue-300 shadow-md shadow-blue-200"
              >
                <NavLink to="https://leading-wallaby-6.accounts.dev/sign-in#/?redirect_url=http%3A%2F%2Flocalhost%3A5174%2F">
                  <div className="flex">
                    <div>Get Started </div>
                    <div className="pt-[2px]">
                      <ChevronRight className="ml-1 border-none h-4 w-4" />
                    </div>
                  </div>
                </NavLink>
              </Button>
            </div>
          </div>

          <div className=" mt-10 p-[25px] md:p-[50px] md:mt-0 items-center flex justify-center">
            <img
              className="w-[100%] h-[100%]  rounded-xl shadow-md"
              src="landing show page for funiture.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
