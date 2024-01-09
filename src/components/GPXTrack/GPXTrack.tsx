// Libraries
import { useState, useEffect } from "react";
import L, { LatLng, LatLngBounds } from "leaflet";
import GpxParser, { Point } from "gpxparser";
import { useMap, Polyline, Map } from "react-leaflet";

// Assets
import trace from "./../../assets/traces/tmb-tour-du-mont-blanc.gpx?raw";

const GPXTrack = () => {
  const [positions, setPositions] = useState<Array<LatLng>>([]);
  const map: Map = useMap();

  useEffect(() => {
    if (!positions.length) {
      const gpx: GpxParser = new GpxParser();
      const tempPosition: LatLng = new L.LatLng(
        45.83295025348233,
        6.865346521114489,
      );
      const bounds: LatLngBounds = new L.LatLngBounds(
        tempPosition,
        tempPosition,
      );
      gpx.parse(trace);

      const tempPositions: Array<LatLng> = gpx.tracks[0].points.map(
        (p: Point) => {
          const latlng: LatLng = new L.LatLng(p.lat, p.lon);

          bounds.extend(new LatLngBounds(latlng, latlng));

          return latlng;
        },
      );

      setPositions(tempPositions);

      map.fitBounds(bounds);
    }
  }, [map, positions]);

  return (
    <Polyline
      pathOptions={{ fillColor: "red", color: "blue" }}
      positions={positions}
    />
  );
};

export default GPXTrack;
