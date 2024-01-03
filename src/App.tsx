import "./App.css";
import "leaflet/dist/leaflet.css";
import { useRef } from "react";
import MapContainer from "./components/MapContainer";

function App() {
  const mapRef = useRef();

  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <MapContainer map={mapRef.current} />
    </main>
  );
}

export default App;
