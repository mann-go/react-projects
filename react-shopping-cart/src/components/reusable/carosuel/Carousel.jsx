import { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSlideDone, setIsSlideDone] = useState(true);
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (isSlideDone) {
      setIsSlideDone(false);
      setTimer(
        setTimeout(() => {
          nextSlide();
          setIsSlideDone(true);
        }, 5000)
      );
    }
  }, [isSlideDone]);

  const nextSlide = () => {
    setActiveIndex((index) => {
      if (index >= children.length - 1) {
        return 0;
      } else {
        return index + 1;
      }
    });
  };

  return (
    <div className="carousel-container">
      {children.map((item, index) => {
        return (
          <div
            className={
              "carousel-item carousel-item-active-" + (activeIndex + 1)
            }
            key={index}
          >
            {item}
          </div>
        );
      })}
    </div>
  );
}

export default Carousel;
