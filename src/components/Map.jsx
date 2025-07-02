import "leaflet/dist/leaflet.css";//importing leaflet 
import { useEffect } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet"; //importing components from leaflet

//component to set/update the latitude and longitude when user search for an ip address
export function MapUpdater({lat, lng}){
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng], 13);
  }, [lat, lng, map]);
  return null;
}

// function to render map using leaflet
function Map({ lat, lng }) {
  return (
    <div className="w-full h-[60vh] sm:h-[400px] rounded shadow-lg border border-gray-300 ">
    <MapContainer
      key={`${lat}-${lng}`}
      center={[lat, lng]}
      zoom={13}
      className="w-full h-full"
      scrollWheelZoom={true}
    >
      <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {/* a pin showing the location based on the ip address */}
      <Marker position={[lat, lng]}>
        {/* a pop up to show on the map when the pin/marker is clicked */}
        <Popup>IP Location</Popup> 
      </Marker>
      <MapUpdater lat={lat} lng={lng}/>
    </MapContainer>
    </div>
  );
}
export default Map;
