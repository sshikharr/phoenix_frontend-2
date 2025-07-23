
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartInitialized, setCartInitialized] = useState(false);
  
  // Discount/Coupon related states
  const [discountCode, setDiscountCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  // Load from localStorage only once on mount
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    const storedDiscount = localStorage.getItem("cartDiscount");
    
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setCartItems(parsed);
        }
      } catch (err) {
        console.error("Failed to parse cart:", err);
      }
    }
    
    // Load discount data
    if (storedDiscount) {
      try {
        const discountData = JSON.parse(storedDiscount);
        setDiscountCode(discountData.code || "");
        setDiscountPercent(discountData.percent || 0);
      } catch (err) {
        console.error("Failed to parse discount data:", err);
      }
    }
    
    setCartInitialized(true);
  }, []);

  // Save cart items to localStorage
  useEffect(() => {
    if (cartInitialized) {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, cartInitialized]);

  // Save discount data to localStorage
  useEffect(() => {
    if (cartInitialized) {
      const discountData = {
        code: discountCode,
        percent: discountPercent
      };
      localStorage.setItem("cartDiscount", JSON.stringify(discountData));
    }
  }, [discountCode, discountPercent, cartInitialized]);

  // Cart item functions
  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculation functions
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => {
      const price = parseFloat(item.price?.replace(",", "") || 0);
      return total + price * item.quantity;
    }, 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getDiscountedTotal = () => {
    const subtotal = calculateSubtotal();
    return subtotal - (subtotal * discountPercent) / 100;
  };

  const getDiscountAmount = () => {
  const subtotal = calculateSubtotal();
  return parseFloat(((subtotal * discountPercent) / 100).toFixed(2));
};

  // Coupon/Discount functions
  const applyDiscountCode = (code) => {
    const trimmedCode = code.trim().toUpperCase();
    
    if (trimmedCode === "NEW10") {
      setDiscountCode(trimmedCode);
      setDiscountPercent(10);
      return { success: true, message: "Discount applied successfully!" };
    } else {
      return { success: false, message: "Invalid discount code" };
    }
  };

  const removeDiscount = () => {
    setDiscountCode("");
    setDiscountPercent(0);
  };

  const applyFixedDiscount = (percent) => {
    setDiscountPercent(percent);
    setDiscountCode("APPLIED");
  };

  // Check if discount is available
  const isDiscountAvailable = () => {
    return discountPercent === 0; // Only show available if no discount is currently applied
  };

  return (
    <CartContext.Provider
      value={{
        // Cart items and functions
        cartItems,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        
        // Calculation functions
        calculateSubtotal,
        getTotalItems,
        getDiscountedTotal,
        getDiscountAmount,
        
        // Discount/Coupon states
        discountCode,
        discountPercent,
        setDiscountCode,
        
        // Discount/Coupon functions
        applyDiscountCode,
        removeDiscount,
        applyFixedDiscount,
        isDiscountAvailable,
        
        // Computed values
        totalItems: getTotalItems(),
        subtotal: calculateSubtotal(),
        discountedTotal: getDiscountedTotal(),
        discountAmount: getDiscountAmount(),
        finalTotal: discountPercent > 0 ? getDiscountedTotal() : calculateSubtotal(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};