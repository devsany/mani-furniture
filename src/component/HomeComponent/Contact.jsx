import { useForm, ValidationError } from "@formspree/react";
const Contacts = () => {
  const [state, handleSubmit] = useForm("xwpkeabp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      {" "}
      <div className="flex justify-center">
        {" "}
        <h2
          className="mt-[50px]
   lg:mt-[110px] md:mt-[110px] text-2xl  md:text-3xl font-bold text-amber-800 drop-shadow-lg font-serif"
        >
          Contact and Reach Us
        </h2>
      </div>
      <div className="flex justify-center mt-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.2481043425905!2d84.98238542898171!3d24.691607546410065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32d77dbcaf41b%3A0xb3226e49637e2c52!2sMani%20Furniture!5e0!3m2!1sen!2sin!4v1728402302589!5m2!1sen!2sin"
          width="990"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="flex justify-center">
        <div className="m-10 ">
          <div className="flex justify-center">
            {" "}
            <h2
              className="mt-[50px]
   lg:mt-[110px] md:mt-[110px] text-2xl  md:text-3xl font-bold text-amber-800 drop-shadow-lg font-serif"
            >
              Contact Form
            </h2>
          </div>
          <form
            className="border rounded-md shadow-lg m-10 p-10"
            onSubmit={handleSubmit}
          >
            <label htmlFor="l">Email Address </label>
            <input
              id="email"
              type="email"
              name="email"
              className="border mb-5 w-[100%] shadow-sm rounded-sm pl-1"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="l">Message</label>

            <textarea
              id="message"
              name="message"
              className="border w-[100%] shadow-sm rounded-sm pl-1"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              type="submit"
              className="bg-green-100"
              disabled={state.submitting}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
