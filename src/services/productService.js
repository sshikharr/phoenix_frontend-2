// src/services/productService.js
import axios from "axios";

const API_URL = "http://localhost:3000/api/products"; // Backend API endpoint

// Function to get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Function to create a new product
export const createProduct = async (productData) => {
  try {
    const response = await axios.post(API_URL, productData, {
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error.response ? error.response.data : error.message);
    throw error;
  }
};




