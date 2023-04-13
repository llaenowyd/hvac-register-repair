import { useCurrentImageStepper } from "../hooks/useCurrentImageStepper";
import { useThemedStyleClass } from "../hooks/useThemedStyleClass";

import classes from "./Button.module.css";

const LeftButton = () => {
  const className = useThemedStyleClass(classes.button);
  const [stepLeft] = useCurrentImageStepper();

  return (
    <button className={className} onClick={stepLeft}>
      ←
    </button>
  );
};

export default LeftButton;
