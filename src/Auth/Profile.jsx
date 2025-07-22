import { lazy, Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Header = lazy(() => import("../common/Header"));
const Footer = lazy(() => import("../components/Footer"));

const Profile = () => {
  const { currentUser, logout, isLoading, userIsAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [activeSection, setActiveSection] = useState("profile");

  // Redirect if not authenticated
  useEffect(() => {
    if (!isLoading && !userIsAuthenticated) {
      console.log("User not authenticated, redirecting to login...");
      navigate("/login");
    }
  }, [userIsAuthenticated, isLoading, navigate]);

  const handleLogout = async () => {
    setError("");
    setMessage("");
    try {
      await logout();
      setMessage("Logout successful! Redirecting...");
      console.log("Logout initiated");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      console.error("Logout error:", err.message);
      setError("Failed to logout. Please try again.");
    }
  };

  // Get addresses from localStorage
  const addresses = JSON.parse(localStorage.getItem("addresses") || "{}");
  const addressKeys = Object.keys(addresses);

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  const sidebarItems = [
    { id: "profile", label: "Profile", icon: "" },
    { id: "orders", label: "My Orders", icon: "" },
    { id: "addresses", label: "My Addresses", icon: "" },
  ];

  return (
    <Suspense fallback={<div className="flex justify-center items-center h-screen">Loading...</div>}>
      <Header />
      <div className="flex flex-col lg:flex-row min-h-screen">
        {/* Sidebar */}

        <div className="w-full lg:w-1/5 bg-gray-50 p-4 lg:overflow-y-auto border-b lg:border-b-0 lg:border-r border-gray-200 flex flex-col justify-around">
          <div>
          <h3 className="font-rubik text-body-mobile lg:text-3xl font-semibold mb-6 text-gray-800">
            Menu
          </h3>
          <ul className="space-y-1 mb-6">
            {sidebarItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 font-rubik text-body-mobile lg:text-body-desktop flex items-center gap-3 ${
                    activeSection === item.id
                      ? "bg-auth-bg text-white shadow-sm"
                      : "text-gray-700 hover:bg-gray-100 hover:text-auth-bg"
                  }`}
                >
                  <span className="text-lg">{item.icon}</span>
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
          </div>
            {/* Logout Section (Always Visible) */}
            <div className="text-center">
                <button
                className="inline-flex items-center gap-2 px-8 py-3 lg:py-4 bg-auth-bg text-white font-rubik font-medium text-h3-mobile lg:text-h3-desktop rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-sm hover:shadow-md"
                onClick={handleLogout}
                >
                🚪 Logout
                </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="lg:text-h1-desktop text-h1-mobile font-bold font-tomorrow text-center mb-8">
              Profile
            </h2>

            {/* Error and Success Messages */}
            {error && (
              <div className="mb-6 p-4 bg-red-100 border border-red-200 rounded-lg text-red-700 font-rubik text-body-mobile lg:text-body-desktop">
                ❌ {error}
              </div>
            )}
            {message && (
              <div className="mb-6 p-4 bg-green-100 border border-green-200 rounded-lg text-green-700 font-rubik text-body-mobile lg:text-body-desktop">
                ✅ {message}
              </div>
            )}

            {currentUser && (
              <div className="space-y-12">
                {/* Conditionally Render Sections */}
                {activeSection === "profile" && (
                  <section
                    id="profile"
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">👤</span>
                      <h3 className="font-rubik text-xl lg:text-2xl font-semibold text-gray-800">
                        Profile Information
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-rubik text-body-mobile lg:text-body-desktop">
                          <span className="font-medium text-gray-600">Email:</span>
                          <br />
                          <span className="text-gray-800">{currentUser.email}</span>
                        </p>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="font-rubik text-body-mobile lg:text-body-desktop">
                          <span className="font-medium text-gray-600">User ID:</span>
                          <br />
                          <span className="text-gray-800 font-mono text-sm">{currentUser.uid}</span>
                        </p>
                      </div>
                      {currentUser.displayName && (
                        <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
                          <p className="font-rubik text-body-mobile lg:text-body-desktop">
                            <span className="font-medium text-gray-600">Display Name:</span>
                            <br />
                            <span className="text-gray-800">{currentUser.displayName}</span>
                          </p>
                        </div>
                      )}
                    </div>
                  </section>
                )}

                {activeSection === "orders" && (
                  <section
                    id="orders"
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl"></span>
                      <h3 className="font-rubik text-xl lg:text-2xl font-semibold text-gray-800">
                        My Orders
                      </h3>
                    </div>
                    <div className="space-y-3">
                      <div className="border border-gray-200 rounded-lg p-4 bg-green-50">
                        <p className="font-rubik text-body-mobile lg:text-body-desktop text-gray-800">
                          <span className="font-medium">Classic Wooden Dining Chair</span>
                          <br />
                          <span className="text-sm text-gray-600">Order #12345</span>
                        </p>
                      </div>
                      <div className="text-center py-8">
                        <p className="font-rubik text-body-mobile lg:text-body-desktop text-gray-500">
                          No additional orders yet.
                        </p>
                        <p className="font-rubik text-sm text-gray-400 mt-2">
                          Start shopping to see more orders here!
                        </p>
                      </div>
                    </div>
                  </section>
                )}

                {activeSection === "addresses" && (
                  <section
                    id="addresses"
                    className="bg-white rounded-lg shadow-sm border border-gray-200 p-6"
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-2xl">📍</span>
                      <h3 className="font-rubik text-xl lg:text-2xl font-semibold text-gray-800">
                        My Addresses
                      </h3>
                    </div>
                    {addressKeys.length > 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {addressKeys.map((key) => (
                          <div key={key} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                            <p className="font-rubik text-body-mobile lg:text-body-desktop text-gray-800">
                              <span className="font-medium">📍 Location:</span>
                              <br />
                              <span>{addresses[key].city}, {addresses[key].pincode}</span>
                            </p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-8 border-2 border-dashed border-gray-200 rounded-lg">
                        <p className="font-rubik text-body-mobile lg:text-body-desktop text-gray-500">
                          No addresses saved yet.
                        </p>
                        <p className="font-rubik text-sm text-gray-400 mt-2">
                          Add your first address to get started!
                        </p>
                      </div>
                    )}
                  </section>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Profile;