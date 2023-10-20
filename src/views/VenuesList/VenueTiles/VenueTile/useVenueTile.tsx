import { useVenuePhotos } from "./useVenuePhotos.tsx";
import { useState } from "react";
import { Venue } from "../../../../shared/types/Venue.ts";

export const useVenueTile = (venue: Venue) => {
  const photos = useVenuePhotos(venue.albumId);

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    if (photos && activeStep === photos?.length - 1) {
      setActiveStep(0);
      return;
    }
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    if (photos && activeStep === 0 && photos.length > 0) {
      setActiveStep(photos.length - 1);
      return;
    }
    setActiveStep(activeStep - 1);
  };
  return { photos, activeStep, handleBack, handleNext };
};
