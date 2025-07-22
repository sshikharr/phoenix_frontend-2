import { createContext, useState, useEffect, useContext } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig";

// Create AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [idToken, setIdToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize authentication: check localStorage and Firebase
    const initializeAuth = async () => {
      const token = localStorage.getItem("authToken");
      setUserIsAuthenticated(!!token);

      // Firebase auth listener
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        console.log("onAuthStateChanged triggered, user:", user ? user.email : null);
        if (user) {
          try {
            const token = await user.getIdToken();
            const tokenResult = await user.getIdTokenResult();
            console.log("Token issued at:", new Date(tokenResult.issuedAtTime));
            console.log("Token expires at:", new Date(tokenResult.expirationTime));

            // Store token in localStorage
            localStorage.setItem("authToken", token);
            setUserIsAuthenticated(true);
            setCurrentUser(user);
            setIdToken(token);
            console.log("User authenticated, email:", user.email);
          } catch (error) {
            console.error("Auth setup error:", error);
            localStorage.removeItem("authToken");
            setUserIsAuthenticated(false);
            setCurrentUser(null);
            setIdToken(null);
          }
        } else {
          console.log("No Firebase user detected, checking localStorage token.");
          if (token) {
            // If token exists but no Firebase user, clear it
            localStorage.removeItem("authToken");
            setUserIsAuthenticated(false);
          }
          setUserIsAuthenticated(false);
          setCurrentUser(null);
          setIdToken(null);
        }
        setIsLoading(false);
      });

      return () => {
        console.log("Cleaning up onAuthStateChanged listener");
        unsubscribe();
      };
    };

    initializeAuth();
  }, []);

  // Handle user login
  const login = async (tokenOrEmail, password) => {
    if (typeof tokenOrEmail === "string" && !password) {
      // Token-based login
      localStorage.setItem("authToken", tokenOrEmail);
      setUserIsAuthenticated(true);
      return { user: "token-based" };
    } else {
      // Firebase login with email and password
      try {
        const userCredential = await signInWithEmailAndPassword(auth, tokenOrEmail, password);
        const user = userCredential.user;
        const token = await user.getIdToken();

        // Store token in localStorage
        localStorage.setItem("authToken", token);
        setUserIsAuthenticated(true);
        setCurrentUser(user);
        setIdToken(token);
        console.log("Firebase login successful:", user.email);
        return { user: user.email };
      } catch (error) {
        console.error("Firebase login error:", error);
        throw error;
      }
    }
  };

  // Handle user logout
  const logout = async () => {
    localStorage.removeItem("authToken");
    setUserIsAuthenticated(false);
    setCurrentUser(null);
    setIdToken(null);

    try {
      await firebaseSignOut(auth);
      console.log("User signed out successfully");
    } catch (error) {
      console.error("Error signing out from Firebase:", error);
      throw error;
    }
  };

  // Get fresh Firebase token
  const getIdToken = async () => {
    if (currentUser) {
      try {
        const token = await currentUser.getIdToken(true);
        setIdToken(token);
        localStorage.setItem("authToken", token);
        return token;
      } catch (error) {
        console.error("Error getting ID token:", error);
        throw error;
      }
    }
    return null;
  };

  return (
    <AuthContext.Provider
      value={{
        userIsAuthenticated,
        login,
        logout,
        currentUser,
        idToken,
        isLoading,
        getIdToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);