import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapWrapper } from "./MyMapContainer.styled.tsx";
import { Coordinates } from "../../../shared/types/Venue.ts";
import { FunctionComponent } from "react";

interface MyMapContainer {
  coordinates: Coordinates;
}
export const MyMapContainer: FunctionComponent<MyMapContainer> = ({
  coordinates,
}) => {
  return (
    <MapWrapper
      center={[coordinates.latitude, coordinates.longitude]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coordinates.latitude, coordinates.longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapWrapper>
  );
};
