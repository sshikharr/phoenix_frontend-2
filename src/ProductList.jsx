import { useState, useEffect } from "react"
import { getProducts } from "./services/productService"


const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(()=>{
        const fetchProducts = async () => {
            try {
                const data = await getProducts()
                setProducts(data)
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
     fetchProducts()
    },[])
    

  return (
    <div>
        <h1>Product List</h1>
    </div>
  )
}

export default ProductList