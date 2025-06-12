import { Link } from "react-router-dom";
import "./CategoryItem.css";

function CategoryItem({ props }) {
  const category = cleanPropURL(props);

  return (
    <>
      <Link to={`products/${category}`}>
        <div className="category-item">
          <h2>{props}</h2>
        </div>
      </Link>
    </>
  );
}

function cleanPropURL(prop) {
  const output = prop
    .toLowerCase()
    .replace(/['"]/g, "") // Remove quotes / apostrophes
    .replace(/\s+/g, "-"); // Replace spaces with dashes

  return output;
}

export default CategoryItem;
