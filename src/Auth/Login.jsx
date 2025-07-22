import { lazy, useState, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import useAuth to get login method
import userService from "../services/userService";
import { Link } from "react-router-dom";

const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Login = () => {
  const { login } = useAuth(); // Get login method from AuthContext
  const { logout } = useAuth(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleLogout = () => {
    logout(); // Call the logout function from AuthContext
    navigate("/"); // Redirect the user to the homepage or login page after logging out
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userService.login(formData, login); // Pass login method to update state
      navigate("/");
      setFormData("")// Redirect to home page after login
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="lg:text-h1-desktop text-h1-mobile font-bold font-tomorrow">Login</h2>
        <form
          className="flex flex-col w-4/5 lg:w-1/3 gap-8 mt-8 lg:mt-16"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full py-3 lg:py-6 pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="w-full py-3 lg:py-6 pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <p className="font-rubik w-fit border-b-2 border-auth-border pb-1 font-medium text-body-mobile lg:text-body-desktop text-black text-opacity-50 decoration-auth-border">
            Forget Password?
          </p>
          <button
            className="border w-2/4 lg:w-2/3 items-center justify-center py-2 lg:py-4 flex m-auto bg-auth-bg text-white font-rubik font-medium text-h3-mobile lg:text-h3-desktop"
            type="submit"
          >
            Login
          </button>
          <p className="font-rubik w-fit m-auto font-medium border-b-2 border-auth-border lg:text-subtext-desktop text-subtext-mobile pb-2 text-black text-opacity-50 text-center">
            <Link to="/sign-up">Create Account</Link>
          </p>
        </form>
        <button
        onClick={handleLogout}
      className="bg-red-500 text-white py-2 px-4 rounded mt-4"
        >
          Log Out
        </button>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Login;
