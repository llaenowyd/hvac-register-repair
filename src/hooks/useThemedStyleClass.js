import { useMemo } from "react";
import { useDeviceColorScheme } from "@a110/rito";

import themeClasses from "../styles/Theme.module.css";

export const useThemedStyleClass = (styleClass) => {
  const colorScheme = useDeviceColorScheme();

  return useMemo(() => {
    const colorSchemeClass =
      "dark" === colorScheme ? themeClasses.dark : themeClasses.light;

    return [styleClass, colorSchemeClass].join(" ");
  }, [colorScheme, styleClass]);
};
