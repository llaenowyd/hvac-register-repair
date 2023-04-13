import { useCurrentImageStepper } from "../hooks/useCurrentImageStepper";
import { useThemedStyleClass } from "../hooks/useThemedStyleClass";

import classes from "./Button.module.css";

const RightButton = () => {
  const className = useThemedStyleClass(classes.button);
  const [, stepRight] = useCurrentImageStepper();

  return (
    <button className={className} onClick={stepRight}>
      →
    </button>
  );
};

export default RightButton;
