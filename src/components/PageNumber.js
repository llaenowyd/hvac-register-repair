import { usePageNumber } from "../hooks/usePageNumber";

import classes from "../styles/PageNumber.module.css";

const PageNumber = () => {
  const [pageNumber, numImages] = usePageNumber();

  return (
    <div className={classes.container}>
      <div className={classes.label}>
        {pageNumber} / {numImages}
      </div>
    </div>
  );
};

export default PageNumber;
