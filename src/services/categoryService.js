import axios from "axios";

// The base URL for your backend API
const API_URL = "http://localhost:3000/api/categories";

// Function to get all categories
export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data; // Return the categories data
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error; // Rethrow error to handle in the component
  }
};

// Function to create a new category
export const createCategory = async (categoryData) => {
  try {
    const response = await axios.post(API_URL, categoryData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data; // Return the created category
  } catch (error) {
    console.error("Error creating category:", error.response ? error.response.data : error.message);
    throw error; // Rethrow error to handle in the component
  }
};
