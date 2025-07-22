import { lazy, useState, useEffect, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Login = () => {
  const { login, isAuthenticated, loading } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // Redirect if already authenticated
  useEffect(() => {
    if (!loading && isAuthenticated) {
      console.log("User already authenticated, redirecting...");
      navigate("/");
    }
  }, [isAuthenticated, loading, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setError("Please enter both email and password.");
      setIsLoading(false);
      return;
    }

    try {
      const result = await login(formData.email, formData.password);
      if (result) {
        setMessage("Login successful! Welcome.");
        console.log("Login successful, user:", result.user);
        setTimeout(() => {
          navigate("/");
          setFormData({ email: "", password: "" });
        }, 1000);
      }
    } catch (err) {
      console.error("Login error:", err.message);
      let errorMessage = "An error occurred during login.";
      switch (err.code) {
        case "auth/user-not-found":
          errorMessage = "No account found with this email address.";
          break;
        case "auth/wrong-password":
          errorMessage = "Incorrect password.";
          break;
        case "auth/invalid-email":
          errorMessage = "Invalid email address.";
          break;
        case "auth/too-many-requests":
          errorMessage = "Too many failed attempts. Please try again later.";
          break;
        case "auth/network-request-failed":
          errorMessage = "Network error. Please check your connection.";
          break;
        default:
          errorMessage = err.message || "Login failed. Please try again.";
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="lg:text-h1-desktop text-h1-mobile font-bold font-tomorrow">Login</h2>
        {error && (
          <div
            className="w-4/5 lg:w-1/3 mt-4 p-4 bg-red-100 border border-red-200 rounded text-red-700 font-rubik text-body-mobile lg:text-body-desktop"
          >
            {error}
          </div>
        )}
        {message && (
          <div
            className="w-4/5 lg:w-1/3 mt-4 p-4 bg-green-100 border border-green-200 rounded text-green-700 font-rubik text-body-mobile lg:text-body-desktop"
          >
            {message}
          </div>
        )}
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
            required
            disabled={isLoading}
          />
          <input
            className="w-full py-3 lg:py-6 pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <p className="font-rubik w-fit border-b-2 border-auth-border pb-1 font-medium text-body-mobile lg:text-body-desktop text-black text-opacity-50 decoration-auth-border">
            Forget Password?
          </p>
          <button
            className="border w-2/4 lg:w-2/3 items-center justify-center py-2 lg:py-4 flex m-auto bg-auth-bg text-white font-rubik font-medium text-h3-mobile lg:text-h3-desktop"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
          <p className="font-rubik w-fit m-auto font-medium border-b-2 border-auth-border lg:text-subtext-desktop text-subtext-mobile pb-2 text-black text-opacity-50 text-center">
            <Link to="/signup">Create Account</Link>
          </p>
        </form>
        <p className="font-rubik text-subtext-mobile lg:text-subtext-desktop text-black text-opacity-50 mt-4 text-center">
          Your login session will be saved for 1 hour
        </p>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Login;