// Libraries
import { useState, useEffect } from "react";
import L, { LatLng, LatLngBounds } from "leaflet";
import GpxParser from "gpxparser";
import { useMap, Polyline } from "react-leaflet";

// Assets
import trace from "./../../assets/traces/tmb-tour-du-mont-blanc.gpx?raw";

function GPXTrack() {
  const [positions, setPositions] = useState<Array<LatLng>>([]);
  const map = useMap();

  useEffect(() => {
    if (!positions.length) {
      const gpx = new GpxParser();
      const tempPosition: LatLng = new L.LatLng(
        45.83295025348233,
        6.865346521114489,
      );
      let bounds: LatLngBounds = new L.LatLngBounds(tempPosition, tempPosition);
      gpx.parse(trace);

      const tempPositions = gpx.tracks[0].points.map((p) => {
        const latlngbounds = new L.LatLng(p.lat, p.lon);

        if (!bounds) {
          bounds = new L.LatLngBounds(latlngbounds, latlngbounds);
        } else {
          bounds.extend(new LatLngBounds(latlngbounds, latlngbounds));
        }

        return latlngbounds;
      });

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
}

export default GPXTrack;
