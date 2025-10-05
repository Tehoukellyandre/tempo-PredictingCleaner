export  type Position = {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude: number | null;
  altitudeAccuracy: number | null;
  heading: number | null;
  speed: number | null;
  timestamp: number;
};

export  type UserLocation= {
  lat: number;
  lon: number;
};

// Type for air pollution data
export type Pollutants = {
  co: number;      // Carbon monoxide
  no: number;      // Nitric oxide
  no2: number;     // Nitrogen dioxide
  o3: number;      // Ozone
  so2: number;     // Sulfur dioxide
  pm2_5: number;   // Fine particulate matter PM2.5
  pm10: number;    // Particulate matter PM10
};
