import { useState, useEffect } from "react";
import { getMockUsers } from "./MockUsers";
import Review from "./Review";
import "./UserReviews.css";
import LoadingSpinner from "../../reusable/loading-spinner/LoadingSpinner";

const initialComments = [
  "The best thing since sliced bread!",
  "For a fake website, the clothes I got from Shamazon were insanely good quality!",
  "Fast and reliable service!",
  "Honestly didn’t expect much... now I won’t shop anywhere else!",
  "Arrived so fast I thought it was magic.",
  "Five stars, no notes. Just vibes.",
  "Didn’t think I needed it till I bought it. Now I’m obsessed.",
];

function UserReviews() {
  const [isLoading, setIsLoading] = useState(true);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getMockUsers();
        if (data) {
          setUserReviews(data);
        } else {
          console.error("No product data recieved");
        }
      } catch (err) {
        console.error("Failed to fetch users: ", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  function setUserReviews(users) {
    console.log(users);
    if (users) {
      const reviews = users.results
        .slice(0, initialComments.length)
        .map((user, index) => ({
          id: index + 1,
          name: `${user.name.first} ${user.name.last}`,
          image: user.picture.large,
          comment: initialComments[index],
        }));
      setReviews(reviews);
    }
  }

  if (isLoading) {
    return <LoadingSpinner />;
  } else {
    return (
      <>
        <div className="review-container">
          {reviews?.map((review) => (
            <Review key={review.id} review={review} />
          ))}
        </div>
      </>
    );
  }
}

export default UserReviews;
