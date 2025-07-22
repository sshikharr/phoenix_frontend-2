// SignUp.js
import React, { Suspense, useState } from "react";
import userService from "../services/userService";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = React.lazy(() => import("../common/Header"));
const Footer = React.lazy(() => import("../components/Footer"));

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
  });

  const {login} = useAuth()

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.signup(formData, login); // Pass login method from context
      navigate('/'); // Redirect to home or dashboard after successful signup and login
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Suspense>
      <Header />

      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="lg:text-h1-desktop text-h1-mobile  font-bold font-tomorrow ">
          Create Account
        </h2>
        <form
          className="flex flex-col  w-4/5 lg:w-1/3 gap-8 mt-8 lg:mt-16"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full py-3 lg:py-6  pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="w-full py-3 lg:py-6  pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="w-full py-3 lg:py-6  pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="w-full py-3 lg:py-6  pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />

          <button
            className="border w-2/4 lg:w-2/3 items-center justify-center py-2 lg:py-4 flex m-auto bg-auth-bg text-white font-rubik font-medium text-h3-mobile lg:text-h3-desktop"
            type="submit"
          >
            Sign Up
          </button>
          <p className="font-rubik w-fit m-auto font-medium  border-auth-border lg:text-subtext-desktop text-subtext-mobile pb-2 text-black text-opacity-50   text-center">
            <Link to="/login">
              Have trouble logging in?{" "}
              <span className="font-bold text-black">Get help</span>{" "}
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </Suspense>
  );
};

export default SignUp;
