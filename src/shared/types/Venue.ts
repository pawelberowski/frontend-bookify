export interface Coordinates {
  latitude: number;
  longitude: number;
}
export interface LocationDetails {
  postalCode: string;
  name: string;
  coordinates: Coordinates;
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
