// cartService.js

const CART_KEY = "cart";

const cartService = {
  // Add a product to the cart
  addToCart(product) {
    const cart = this.getCart();
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      existingProduct.quantity += 1; // Increase quantity if product already exists
    } else {
      cart.push({ ...product, quantity: 1 }); // Add product with initial quantity
    }

    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  },

  // Get all products from the cart
  getCart() {
    const cart = localStorage.getItem(CART_KEY);
    return cart ? JSON.parse(cart) : [];
  },

  // Remove a product from the cart by ID
  removeFromCart(productId) {
    const cart = this.getCart();
    const updatedCart = cart.filter(item => item.id !== productId);
    localStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
  },

  // Clear the cart
  clearCart() {
    localStorage.removeItem(CART_KEY);
  },
};

export default cartService;
