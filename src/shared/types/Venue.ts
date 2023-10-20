export interface LocationDetails {
  postalCode: string;
  name: string;
}
export interface Venue {
  id: number;
  location: LocationDetails;
  pricePerNightInEUR: string;
  rating: number;
  capacity: number;
  name: string;
  albumId: number;
}
