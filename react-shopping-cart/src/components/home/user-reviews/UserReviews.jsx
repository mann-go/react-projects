import Review from "./Review";
import "./UserReviews.css";

function UserReviews() {
  const reviews = [
    {
      id: 1,
      name: "John Doe",
      comment: "The best thing since sliced bread!",
      image: "",
    },
    {
      id: 2,
      name: "Jane Doe",
      comment:
        "For a fake website, the clothes I got from Shamazon were insanely good quality!",
      image: "",
    },
    {
      id: 3,
      name: "Tilly Boels",
      comment: "Fast and reliable service!",
      image: "",
    },
  ];

  return (
    <>
      <div className="review-container flex">
        {reviews?.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    </>
  );
}

export default UserReviews;
