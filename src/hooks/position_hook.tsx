import { useState, useEffect } from "react";
import { type Position } from "@/index"


export function useCurrentPosition(options = {}) {
  const [position, setPosition] = useState<Position | null>(null); 
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!("geolocation" in navigator)) {
      setError(new Error("Geolocation non supporté par ce navigateur"));
      return;
    }

    let mounted = true;
    setLoading(true);

    const success = (pos: { coords: { latitude: any; longitude: any; accuracy: any; altitude: any; altitudeAccuracy: any; heading: any; speed: any; }; timestamp: any; }) => {
      if (!mounted) return;
      const { latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed } = pos.coords;
      setPosition({ latitude, longitude, accuracy, altitude, altitudeAccuracy, heading, speed, timestamp: pos.timestamp });
      setError(null);
      setLoading(false);
    };

    const fail = (err: GeolocationPositionError) => {
      if (!mounted) return;
      setError(new Error(err.message));
      setLoading(false);
    };

    navigator.geolocation.getCurrentPosition(success, fail, options);

    return () => { mounted = false; };
  }, [JSON.stringify(options)]); 

  return { position, error, loading  , setPosition};
}