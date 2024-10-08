import { useUser } from "@clerk/clerk-react";
import { ShoppingBasket } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import app from "../firebaseConfig/firebase";

import { ref, set, push, getDatabase } from "firebase/database";

// akdfhakdf

// import {
//   Drawer,
//   DrawerClose,
//   DrawerContent,
//   DrawerDescription,
//   DrawerFooter,
//   DrawerHeader,
//   DrawerTitle,
//   DrawerTrigger,
// } from "@/components/ui/drawer";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

const Customize = () => {
  const { isLoaded, user } = useUser();
  //   console.log(user.firstName);
  //   console.log(user.lastName);
  //   console.log(user.emailAddresses[0].emailAddress);
  const [fname] = useState(user?.firstName);
  const [lname] = useState(user?.lastName);
  const [email] = useState(user?.emailAddresses[0].emailAddress);
  const [state] = useForm("xwpkeabp");
  const currentDate = new Date();
  const [error, setError] = useState({});

  const [m, setM] = useState({
    l: "",
    lm: "",
    b: "",
    bm: "",
    h: "",
    hm: "",
    q: "",
    t: "",
    i1: "",
    i2: "",
    i3: "",
    fname: fname,
    lname: lname,
    email: email,
    date: currentDate.toLocaleDateString(),
  });

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  //   const [lm, setLm] = useState("");
  //   const [bm, setBm] = useState("");
  //   const [hm, setHm] = useState("");
  // const [open, setOpen] = useState(false);
  //   const isDesktop = useMediaQuery("(min-width: 768px)");
  //
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = {};
    if (!m.l) {
      error.l = "Length require";
    } else if (!m.lm) {
      error.lm = "Mesurnment require";
    } else if (!m.b) {
      error.b = "Width Require";
    } else if (!m.bm) {
      error.bm = "Mesurnment require";
    } else if (!m.h) {
      error.h = "Height Require";
    } else if (!m.hm) {
      error.hm = "Mesurnment require";
    } else if (!m.q) {
      error.q = "Quantity Require";
    } else if (!m.t) {
      error.t = "Type Require";
    } else if (!m.i1) {
      error.i1 = "Instructions Require";
    } else if (!m.i2) {
      error.i2 = "Instructions Require";
    } else if (!m.i3) {
      error.i3 = "Instructions Require";
    } else {
      const db = getDatabase(app);
      const newDocm = push(ref(db, "data / custom /" + `${user.id}`));
      set(newDocm, {
        l: m.l,
        lm: m.lm,
        b: m.b,
        bm: m.bm,
        h: m.h,
        hm: m.hm,
        q: m.q,
        t: m.t,
        i1: m.i1,
        i2: m.i2,
        i3: m.i3,
      })
        .then(() => {
          alert("data saved successfully");
        })
        .catch((err) => {
          alert("error", err.message);
        });
    }

    setError(error);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setM({ ...m, [name]: value });
  };
  //   const handleChangeb = (e) => {
  //     const { name, value } = e.target;
  //     setBm({ ...m, [name]: value });
  //   };
  //   const handleChangeh = (e) => {
  //     const { name, value } = e.target;
  //     setHm({ ...m, [name]: value });
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // Submit logic here
  //     console.log(m);
  //   };
  return (
    <div>
      <div></div>
      <div>
        {user ? (
          <div>
            <h2 className="p-2 m-2 text-3xl bold text-gray-700 border-l-4 border-green-500">
              Add m
            </h2>
            <div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-8 lg:p-10 sm:p-8 p-6 md:p-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                  <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
                    <div>
                      {/* <label htmlFor="names">Name</label> */}
                      <div>
                        <label htmlFor="l">Length of product </label>
                        <input
                          className="border w-[100%] shadow-sm rounded-sm pl-1"
                          id="l"
                          type="text"
                          name="l"
                          placeholder="Length *"
                          value={m.l}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mt-2">
                        {" "}
                        <select
                          className="border w-[100%] shadow-sm rounded-sm pl-1"
                          name="lm"
                          value={m.lm}
                          onChange={handleChange}
                        >
                          <option value="">Select Masurment</option>
                          <option value="C.M.">C.M. (Cente Meter)</option>
                          <option value="M.">M. (Meter)</option>
                          <option value="Inch">Inch </option>
                          <option value="ft (feet)">ft (foot)</option>

                          {/* Add more options */}
                        </select>
                      </div>
                    </div>
                    <div className="text-red-500">
                      {" "}
                      {error && <div> {error.l}</div>}
                      {error && <div> {error.lm}</div>}
                    </div>
                  </div>

                  <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
                    {" "}
                    <div>
                      <label htmlFor="b">Width of Product</label>
                    </div>
                    <div>
                      {" "}
                      <input
                        className="border w-[100%] shadow-sm rounded-sm pl-1"
                        id="b"
                        type="number"
                        name="b"
                        placeholder="Width"
                        onChange={handleChange}
                        value={m.b}
                      />
                    </div>
                    <div className="mt-2">
                      {" "}
                      <select
                        className="border w-[100%] shadow-sm rounded-sm pl-1"
                        name="bm"
                        value={m.bm}
                        onChange={handleChange}
                      >
                        <option value="">Select Masurment</option>
                        <option value="C.M.">C.M. (Cente Meter)</option>
                        <option value="M.">M. (Meter)</option>
                        <option value="Inch">Inch </option>
                        <option value="ft (feet)">ft (foot)</option>

                        {/* Add more options */}
                      </select>
                    </div>
                    <div>
                      <div className="text-red-500">
                        {" "}
                        {error && <div> {error.b}</div>}
                        {error && <div> {error.bm}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="shadow-lg rounded-md font-mono text-md h-[120px] p-2">
                    <div>
                      <label htmlFor="h">Height of product</label>
                    </div>
                    <div>
                      <input
                        className="border w-[100%] shadow-sm rounded-sm pl-1"
                        id="h"
                        type="number"
                        name="h"
                        placeholder="Height"
                        onChange={handleChange}
                        value={m.h}
                      />
                    </div>

                    <div className="mt-2">
                      {" "}
                      <select
                        className="border w-[100%] shadow-sm rounded-sm pl-1"
                        name="hm"
                        value={m.hm}
                        onChange={handleChange}
                      >
                        <option value="">Select Masurment</option>
                        <option value="C.M.">C.M. (Cente Meter)</option>
                        <option value="M.">M. (Meter)</option>
                        <option value="Inch">Inch </option>
                        <option value="ft (feet)">ft (foot)</option>

                        {/* Add more options */}
                      </select>
                    </div>
                    <div>
                      <div className="text-red-500">
                        {" "}
                        {error && <div> {error.h}</div>}
                        {error && <div> {error.hm}</div>}
                      </div>
                    </div>
                  </div>
                  <div className="shadow-lg rounded-md font-mono text-md h-[90px] p-2">
                    <div>
                      <label htmlFor="q">Quantity</label>
                    </div>
                    <div>
                      {" "}
                      <input
                        className="border w-[100%] shadow-sm rounded-sm pl-1"
                        type="number"
                        name="q"
                        placeholder="Number of Quantity"
                        onChange={handleChange}
                        value={m.q}
                      />
                    </div>
                    <div className="text-red-500">
                      {" "}
                      {error && <div> {error.q}</div>}
                      {error && <div> {error.qm}</div>}
                    </div>
                  </div>
                  <div className="shadow-lg rounded-md font-mono text-md h-[90px] p-2">
                    <div>
                      <label htmlFor="type">Type</label>
                    </div>
                    <div>
                      {" "}
                      <select
                        className="border w-[100%] shadow-sm rounded-sm pl-1"
                        name="t"
                        value={m.t}
                        onChange={handleChange}
                      >
                        <option value="">Select Product</option>
                        <option value="Bed">Bed</option>
                        <option value="Chair">Chair</option>
                        <option value="Table">Table</option>
                        <option value="Shofa">Shofa</option>
                        <option value="Door">Door</option>
                        {/* Add more options */}
                      </select>
                    </div>
                    <div className="text-red-500">
                      {" "}
                      {error && <div> {error.t}</div>}
                      {error && <div> {error.tm}</div>}
                    </div>
                  </div>

                  {/* Checkbox for dietary preferences, file input for image, etc. */}
                </div>
                <div className="grid grid-cols-1 gap-8 pl-6 sm:pl-6 md:pl-10 pr-10 pb-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                  <div className="rounded-md font-mono text-md  ">
                    <div>
                      <label htmlFor="i1">Instructions 1</label>
                    </div>
                    <div>
                      {" "}
                      <textarea
                        className="shadow-lg border  rounded-md"
                        id="i1"
                        name="i1"
                        placeholder="instruction 1*"
                        rows={8}
                        cols={45}
                        onChange={handleChange}
                        value={m.i1}
                      />
                    </div>
                    <div>
                      {error && <div className="text-red-500">{error.i1}</div>}
                    </div>
                  </div>
                  <div className=" rounded-md font-mono text-md  ">
                    <div>
                      <label htmlFor="i2">Instruction 2</label>
                    </div>
                    <div>
                      {" "}
                      <textarea
                        className="shadow-lg border rounded-md"
                        id="i2"
                        name="i2"
                        placeholder="Instruction 2*"
                        rows={8}
                        cols={45}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      {" "}
                      {error && <div className="text-red-500">{error.i2}</div>}
                    </div>
                  </div>
                  <div className="rounded-md font-mono text-md   sm:col-span-1 ">
                    <div>
                      <label htmlFor="notes">Instructions 3</label>
                    </div>
                    <div>
                      <textarea
                        className="shadow-lg border rounded-md"
                        name="i3"
                        placeholder="Instructions 3"
                        rows={8}
                        cols={45}
                        onChange={handleChange}
                        value={m.i3}
                      />
                    </div>
                    <div>
                      {error && <div className="text-red-500">{error.i3}</div>}
                    </div>
                  </div>
                </div>
                <div>
                  {/* <Dialog open={open} onOpenChange={setOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit Profile</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                          Make changes to your profile here. Click save when you
                          done.
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog> */}
                </div>
                <div className="flex justify-end">
                  <button className="mr-8 bg-green-200 border " type="submit">
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        ) : (
          <div className="h-[100vh] bg-gradient-to-t from-green-50 to-pink-100  ">
            <div className="md:grid h-[200px] md:pt-[120px]  md:grid-cols-2 ">
              <div className="p-[50px]  md:ml-[70px]   flex items-center ">
                <div>
                  <h2 className="text-4xl  p-1 font-bold bg-gradient-to-r from-pink-500 to-yellow-600 bg-clip-text text-transparent scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Gather Around Good Food!
                  </h2>

                  <button className="border   mt-4 md:mt-5 hover:border-yellow-500 border-pink-300 shadow-md shadow-yellow-100">
                    <NavLink to="https://leading-wallaby-6.accounts.dev/sign-in#/?redirect_url=http%3A%2F%2Flocalhost%3A5174%2F">
                      <div className="flex">
                        <div className="text-pink-500">Get Started </div>
                        <div className="pt-[2px]">
                          <ShoppingBasket className="ml-2 text-pink-500 border-none h-4 w-4" />
                        </div>
                      </div>
                    </NavLink>
                  </button>
                </div>
              </div>
              <div>
                <img src="write_logo.png" alt="" />
              </div>
            </div>
          </div>
        )}
      </div>
      {/* Your cart components go here */}
    </div>
  );
};

export default Customize;
