import { useCallback, useMemo } from "react";

import { useDeviceColorScheme } from "@a110/rito";

import { useCurrentImage } from "../hooks/useCurrentImage";
import { useImages } from "../hooks/useImages";
import { useSetCurrentImage } from "../hooks/useSetCurrentImage";

import classes from "../styles/MiniCarousel.module.css";

const MiniCarousel = () => {
  const colorScheme = useDeviceColorScheme();
  const images = useImages();
  const currentImage = useCurrentImage();
  const setCurrentImage = useSetCurrentImage();

  const highlightedImageClassName = useMemo(() => {
    return [
      classes.thumbnail,
      "dark" === colorScheme ? classes.highlightDark : classes.highlightLight,
    ].join(" ");
  }, [colorScheme, classes]);

  const onClick = useCallback(
    (imagePath) => {
      if (imagePath === currentImage) {
        return;
      }

      return () => setCurrentImage(imagePath);
    },
    [setCurrentImage, currentImage]
  );

  return (
    <div className={classes.container}>
      <div className={classes.flexBox}>
        {images.map((imagePath) => (
          <img
            key={imagePath}
            onClick={onClick(imagePath)}
            className={
              currentImage === imagePath
                ? highlightedImageClassName
                : classes.thumbnail
            }
            src={imagePath}
          />
        ))}
      </div>
    </div>
  );
};

export default MiniCarousel;
