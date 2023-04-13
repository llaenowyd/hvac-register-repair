import LeftButton from "./LeftButton";
import PageNumber from "./PageNumber";
import RightButton from "./RightButton";
import Title from "./Title";

import classes from "../styles/Controls.module.css";

const FlexCol = ({ children }) => (
  <div className={classes.flexCol}>{children}</div>
);
const FlexRow = ({ children }) => (
  <div className={classes.flexRow}>{children}</div>
);

const Controls = () => {
  return (
    <FlexRow>
      <LeftButton />
      <FlexCol>
        <Title />
        <PageNumber />
      </FlexCol>
      <RightButton />
    </FlexRow>
  );
};

export default Controls;
