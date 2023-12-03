import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  async function getISSCoords() {
    const response = await fetch(
      "https://api.wheretheiss.at/v1/satellites/25544"
    );
    const coords = await response.json();

    console.log(coords);
    console.log(coords.longitude);
    console.log(coords.latitude);

    setCoords({ longitude: coords.longitude, latitude: coords.latitude });
  }

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
