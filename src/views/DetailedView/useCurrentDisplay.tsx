import { useState } from "react";

export const displayDescription = "DisplayDescription";
export const displayGallery = "DisplayGallery";
export const displayMap = "DisplayMap";

export const useCurrentDisplay = () => {
  const [currentDisplay, setCurrentDisplay] = useState(displayDescription);

  const switchToDescription = () => {
    setCurrentDisplay(displayDescription);
  };

  const switchToGallery = () => {
    setCurrentDisplay(displayGallery);
  };

  const switchToMap = () => {
    setCurrentDisplay(displayMap);
  };

  return {
    currentDisplay,
    switchToDescription,
    switchToGallery,
    switchToMap,
  };
};
