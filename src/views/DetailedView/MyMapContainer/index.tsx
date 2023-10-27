import { Marker, Popup, TileLayer } from "react-leaflet";
import { MapWrapper } from "./MyMapContainer.styled.tsx";

export const MyMapContainer = () => {
  return (
    <MapWrapper center={[-17.3305, -122.2485]} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-17.3305, -122.2485]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapWrapper>
  );
};
