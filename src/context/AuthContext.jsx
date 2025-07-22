import { createContext, useState, useEffect, useContext } from "react";

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setUserIsAuthenticated(!!token); // If token exists, user is authenticated
  }, []);

  // Handle user login
  const login = (token) => {
    localStorage.setItem("authToken", token); // Store token in localStorage
    setUserIsAuthenticated(true); // Update state to indicate user is logged in
  };

  

  // Handle user logout
  const logout = () => {
    localStorage.removeItem("authToken"); // Remove token from localStorage
    setUserIsAuthenticated(false); // Update state to indicate user is logged out
  };

  return (
    <AuthContext.Provider value={{ userIsAuthenticated, login, logout}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
