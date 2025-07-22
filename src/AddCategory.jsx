import React, { useState, useEffect } from "react";
import { createCategory, getCategories } from "./services/categoryService";

const AddCategory = () => {
  const [categories, setCategories] = useState([]); // To store fetched categories
  const [formData, setFormData] = useState({
    name: "",
  });

  useEffect(() => {
    // Fetch categories when the component mounts
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories); // Store categories in state
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newCategory = {
        name: formData.name,
      };
      await createCategory(newCategory); // Create new category
      setFormData({ name: "" }); // Reset the form
      alert("Category added successfully!");
      // Optionally refetch categories to update the list
      const fetchedCategories = await getCategories();
      setCategories(fetchedCategories);
    } catch (error) {
      console.error("Error adding category:", error);
      alert("Failed to add category.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter category name"
          required
        />
        <button type="submit">Add Category</button>
      </form>

      <h3>Categories:</h3>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default AddCategory;
