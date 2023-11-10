import { useVenueDetails } from "./useVenueDetails.tsx";
import { useParams } from "react-router-dom";
import { DetailedViewContainer } from "./DetailedView.styled.tsx";

import { VenueDetailsComponent } from "./VenueDetailsComponent";
import { VenueBookingComponent } from "./VenueBookingComponent";
export const DetailedView = () => {
  const params = useParams();
  const venueId = Number(params.id);
  const { venueDetails } = useVenueDetails(venueId);

  return (
    venueDetails && (
      <DetailedViewContainer>
        <VenueDetailsComponent venueDetails={venueDetails} />
        <VenueBookingComponent venueDetails={venueDetails} />
      </DetailedViewContainer>
    )
  );
};
