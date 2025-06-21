import HeroImage from "../hero-image/HeroImage";
import UserReviews from "../user-reviews/UserReviews";
import "./Landing.css";

function Landing() {
  return (
    <div className="container">
      <HeroImage />
      <hr />
      <UserReviews />
    </div>
  );
}

export default Landing;
