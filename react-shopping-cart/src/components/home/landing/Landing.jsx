import Carousel from "../../reusable/carosuel/Carousel";
import HeroImage from "../hero-image/HeroImage";
import UserReviews from "../user-reviews/UserReviews";
import "./Landing.css";

import images from "../../../images/images";

function Landing() {
  return (
    <div className="container">
      <Carousel>
        {images.map((image, index) => {
          return (
            <>
              <div className="text-over-image">{image.text}</div>
              <img key={index} src={image.imgURL} alt={image.imgAlt} />
            </>
          );
        })}
      </Carousel>
      <hr />
      <UserReviews />
    </div>
  );
}

export default Landing;
