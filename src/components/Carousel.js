import { useCallback } from "react";
import { useSwipeable } from "react-swipeable";

import { useCurrentImage } from "../hooks/useCurrentImage";
import { useCurrentImageStepper } from "../hooks/useCurrentImageStepper";

import classes from "../styles/Carousel.module.css";

// const staticHandlers = Object.fromEntries(
//   [
//     "onSwipeStart",
//     "onSwiped",
//     "onSwiping",
//     "onTap",
//     "onTouchStartOrOnMouseDown",
//     "onTouchEndOrOnMouseUp",
//   ].map((handler) => [
//     handler,
//     (eventData) => {
//       console.log(handler, eventData);
//     },
//   ])
// );

function Carousel() {
  const currentImage = useCurrentImage();
  const [stepLeft, stepRight] = useCurrentImageStepper();

  const onSwiped = useCallback(
    (eventData) => {
      if (eventData.dir === "Left") {
        stepRight();
      } else {
        stepLeft();
      }
    },
    [stepLeft, stepRight]
  );

  const swipeHandlers = useSwipeable({
    // ...staticHandlers,
    onSwiped,
    trackMouse: true,
  });

  return (
    <div className={classes.carousel} {...swipeHandlers}>
      <div className={classes.imageContainer}>
        <img className={classes.image} src={currentImage} />
      </div>
    </div>
  );
}

export default Carousel;
