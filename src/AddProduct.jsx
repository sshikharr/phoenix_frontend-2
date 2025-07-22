import { useState, useEffect } from "react";
import { createProduct } from "./services/productService";
import { getCategories } from "./services/categoryService";
import imageCompression from "browser-image-compression";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
    price: "",
    stock: "",
    categoryId: "",
    images: [],
  });

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const fetchedCategories = await getCategories();
        setCategories(fetchedCategories);
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

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   if (file && formData.images.length < 5) { // Limit to 5 images
  //     const newImage = URL.createObjectURL(file);
  //     setFormData((prevState) => ({
  //       ...prevState,
  //       images: [...prevState.images, newImage],
  //     }));
  //   } else {
  //     alert("You can only upload up to 5 images.");
  //   }
  // };

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file && formData.images.length < 5) {
      try {
        // Set compression options
        const options = {
          maxSizeMB: .1, // Max size in MB
          maxWidthOrHeight: 200, // Max width or height in pixels
          useWebWorker: true,
        };
  
        // Compress the image
        const compressedFile = await imageCompression(file, options);
  
        // Convert compressed image to base64
        const reader = new FileReader();
        reader.onload = () => {
          const base64String = reader.result; // Base64 string
          setFormData((prevState) => ({
            ...prevState,
            images: [...prevState.images, base64String],
          }));
        };
        reader.readAsDataURL(compressedFile); // Read compressed file as base64
      } catch (error) {
        console.error("Error compressing image:", error);
        alert("Failed to process the image. Please try again.");
      }
    } else if (formData.images.length >= 5) {
      alert("You can only upload up to 5 images.");
    }
  };
  

  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData({ ...formData, images: updatedImages });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.stock || !formData.categoryId) {
      alert("Please fill all required fields.");
      return;
    }
    try {
      setLoading(true);
      const productData = {
        ...formData,
        id: formData.id ? parseInt(formData.id) : undefined,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
      };
      await createProduct(productData);
      alert("Product added successfully!");
      setFormData({ id: "", name: "", description: "", price: "", stock: "", categoryId: "", images: [] }); // Clear form
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Failed to add product.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        name="id"
        placeholder="Product ID"
        value={formData.id}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      ></textarea>
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={formData.stock}
        onChange={handleChange}
        required
      />
      <select
        name="categoryId"
        value={formData.categoryId}
        onChange={handleChange}
        required
      >
        <option value="">Select Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      {/* Image upload section */}
      <div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        <button type="button" onClick={() => document.querySelector('input[type="file"]').click()}>
          Add More Images
        </button>
      </div>

      {/* Display selected images */}
      <div>
        {formData.images.length > 0 && (
          <ul>
            {formData.images.map((image, index) => (
              <li key={index}>
                <img src={image} alt={`preview-${index}`} width={100} height={100} />
                <button type="button" onClick={() => handleRemoveImage(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Adding..." : "Add Product"}
      </button>
    </form>
  );
};

export default AddProduct;
