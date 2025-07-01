import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

export function MapUpdater(lat, lng){
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);
  return null;
}

function Map({ lat, lng }) {
  return (
    <MapContainer
      center={[lat, lng]}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      MapUpdater(lat,lng)
    </MapContainer>
  );
}
export default Map;
