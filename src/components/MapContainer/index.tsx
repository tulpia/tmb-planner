import { useEffect } from "react";
import L, { Map } from "leaflet";

function MapContainer({ map }: { map: undefined | Map }) {
  useEffect(() => {
    if (!map) {
      map = L.map("map", {
        center: [45.83292035209294, 6.865260690430338],
        zoom: 12,
        layers: [
          L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"),
        ],
      });
    }
  }, [map]);

  return (
    <div
      id="map"
      style={{ height: "100%", width: "100%", overflow: "hidden" }}
    ></div>
  );
}

export default MapContainer;
