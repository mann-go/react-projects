import CategoryItem from "../category-item/CategoryItem";
import "./Categories.css";

function Categories() {
  const categories = [
    "Men's Clothing",
    "Jewelery",
    "Electronics",
    "Women's Clothing",
  ];

  return (
    <>
      <div className="categories-wrapper">
        <h2>Categories</h2>
        {categories.map((category) => (
          <CategoryItem key={category} props={category} />
        ))}
      </div>
    </>
  );
}

export default Categories;
