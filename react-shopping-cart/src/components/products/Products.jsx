import { useEffect, useState } from "react";
import ProductItem from "../product-item/ProductItem";
import "./Products.css";
import { getAllProducts } from "../../api/FakeStoreAPI";
import { ClimbingBoxLoader } from "react-spinners";

function Products({ props }) {
  const [isLoading, setIsLoading] = useState(true);
  const [products, setProducts] = useState([]);

  console.log("Props on load: ", props);

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
      <>
        <div className="loading-container">
          <ClimbingBoxLoader
            color="#28282B"
            height={4}
            width={100}
            loading={true}
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="wrapper">
          <h1>Products Page</h1>
          <div className="products">
            {products?.map((product) => (
              <ProductItem key={product.id} props={product} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Products;
