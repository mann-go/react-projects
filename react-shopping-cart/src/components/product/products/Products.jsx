import { useEffect, useState } from "react";
import ProductItem from "../product-item/ProductItem";
import "./Products.css";
import { getAllProducts } from "../../../api/FakeStoreAPI";
import LoadingSpinner from "../../reusable/loading-spinner/LoadingSpinner";

function Products({ props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await getAllProducts();
      if (data) {
        setProducts(data);
      } else {
        console.error("No product data recieved");
      }

      setIsLoading(false);
    };

    if (props === undefined) {
      fetchProducts();
    }
  }, [props]);

  if (isLoading) {
    return (
      <LoadingSpinner />
    );
  } else {
    return (
      <>
        <h2>Products Page</h2>
        <div className="products">
          {products?.map((product) => (
            <ProductItem key={`product-${product.id}`} product={product} />
          ))}
        </div>
      </>
    );
  }
}

export default Products;
