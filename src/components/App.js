import { useThemedStyleClass } from "../hooks/useThemedStyleClass";
import Carousel from "./Carousel";
import Controls from "./Controls";
import MiniCarousel from "./MiniCarousel";

import classes from "../styles/App.module.css";

function App() {
  const className = useThemedStyleClass(classes.app);

  return (
    <div className={className}>
      <MiniCarousel />
      <Controls />
      <Carousel />
    </div>
  );
}

export default App;
