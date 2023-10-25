import { useVenuePhotos } from "./useVenuePhotos.tsx";
import { useState, MouseEvent } from "react";

export const useVenueSlider = (albumId: number) => {
  const photos = useVenuePhotos(albumId);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (photos && activeStep === photos?.length - 1) {
      setActiveStep(0);
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (photos && activeStep === 0 && photos.length > 0) {
      setActiveStep(photos.length - 1);
      return;
    }
    setActiveStep(activeStep - 1);
  };
  return { photos, activeStep, handleBack, handleNext };
};
