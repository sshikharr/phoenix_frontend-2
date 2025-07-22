import { lazy, useState, Suspense } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));

const SignUp = () => {
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setIsLoading(false);
      return;
    }

    try {
      // Create user in Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log("User created in Firebase:", user.uid, user.email);

      // Register the user with your backend
      const backendUrl = "https://phoenix-backend-50z8.onrender.com"; // Replace with your backend URL
      const backendResponse = await fetch(`${backendUrl}/api/clients/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firebaseUid: user.uid,
          email: user.email,
          name: formData.name || user.email.split("@")[0],
          phoneNumber: formData.phoneNumber,
        }),
      });

      if (!backendResponse.ok) {
        const errorData = await backendResponse.json();
        throw new Error(errorData.message || "Failed to register user in backend database.");
      }

      const backendResult = await backendResponse.json();
      console.log("User successfully registered with backend:", backendResult);

      // Log in the user using AuthContext
      await login(formData.email, formData.password);
      setMessage("Signup successful! Your account has been created.");

      // Reset form
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        phoneNumber: "",
      });

      // Redirect after a short delay to show success message
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      console.error("Signup error:", err.message);
      let errorMessage = "An error occurred during signup.";
      if (err.code && err.code.includes("auth/")) {
        switch (err.code) {
          case "auth/email-already-in-use":
            errorMessage = "This email is already registered.";
            break;
          case "auth/invalid-email":
            errorMessage = "Invalid email address.";
            break;
          case "auth/weak-password":
            errorMessage = "Password is too weak. Please use a stronger password.";
            break;
          default:
            errorMessage = `Firebase Error: ${err.message}`;
        }
      } else {
        errorMessage = `Backend/Network Error: ${err.message}`;
      }
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="flex flex-col justify-center items-center py-20">
        <h2 className="lg:text-h1-desktop text-h1-mobile font-bold font-tomorrow">
          Create Account
        </h2>
        {error && (
          <div className="w-4/5 lg:w-1/3 mt-4 p-4 bg-red-100 border border-red-200 rounded text-red-700 font-rubik text-body-mobile lg:text-body-desktop">
            {error}
          </div>
        )}
        {message && (
          <div className="w-4/5 lg:w-1/3 mt-4 p-4 bg-green-100 border border-green-200 rounded text-green-700 font-rubik text-body-mobile lg:text-body-desktop">
            {message}
          </div>
        )}
        <form
          className="flex flex-col w-4/5 lg:w-1/3 gap-8 mt-8 lg:mt-16"
          onSubmit={handleSubmit}
        >
          <input
            className="w-full py-3 lg:py-6 pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
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
          <input
            className="w-full py-3 lg:py-6 pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            disabled={isLoading}
          />
          <input
            className="w-full py-3 lg:py-6 pl-4 border border-black placeholder:text-body-mobile lg:placeholder:text-body-desktop placeholder:font-rubik placeholder:font-medium placeholder:text-black placeholder:text-opacity-50"
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            disabled={isLoading}
          />
          <button
            className="border w-2/4 lg:w-2/3 items-center justify-center py-2 lg:py-4 flex m-auto bg-auth-bg text-white font-rubik font-medium text-h3-mobile lg:text-h3-desktop"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Signing up..." : "Sign Up"}
          </button>
          <p className="font-rubik w-fit m-auto font-medium border-b-2 border-auth-border lg:text-subtext-desktop text-subtext-mobile pb-2 text-black text-opacity-50 text-center">
            <Link to="/login">
              Already have an account?{" "}
              <span className="font-bold text-black">Log In</span>
            </Link>
          </p>
        </form>
      </div>
      <Footer />
    </Suspense>
  );
};

export default SignUp;