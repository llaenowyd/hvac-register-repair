import { useMemo } from "react";

import { useDeviceColorScheme } from "@a110/rito";

import Carousel from "./Carousel";
import Hint from "./Hint";
import MiniCarousel from "./MiniCarousel";
import PageNumber from "./PageNumber";
import Title from "./Title";

import classes from "./App.module.css";

function App() {
  const colorScheme = useDeviceColorScheme();

  const className = useMemo(() => {
    const appClass = classes.app;
    const colorSchemeClass =
      "dark" === colorScheme ? classes.dark : classes.light;

    return [appClass, colorSchemeClass].join(" ");
  }, [colorScheme]);

  return (
    <div className={className}>
      <Title />
      <Hint />
      <MiniCarousel />
      <PageNumber />
      <Carousel />
    </div>
  );
}

export default App;
