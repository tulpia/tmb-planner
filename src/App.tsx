// Libraries
import { MapContainer, TileLayer } from "react-leaflet";

// Components
import GPXTrack from "./components/GPXTrack/GPXTrack";

// Assets
import "leaflet/dist/leaflet.css";

const App = () => {
  return (
    <main style={{ width: "100vw", height: "100vh" }}>
      <MapContainer
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
        style={{ height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <GPXTrack />
      </MapContainer>
    </main>
  );
};

export default App;
