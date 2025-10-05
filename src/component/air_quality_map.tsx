import { MapContainer, TileLayer, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import type { Position } from "..";
import  AirIndiceValidation from "./air_indice" ;
import { Box } from "@mui/material";

function ChangeView({ center }: { center: [number, number] }) {
  const map = useMap();
  useEffect(() => {
    map.setView(center, 11);
  }, [center]);
  return null;
}

export function AirQualityMapByAqi({ userPosition }: { userPosition: Position | null }) {
  const position: [number, number] = [
    userPosition?.latitude ?? 6.3703,
    userPosition?.longitude ?? 2.3912,
  ];

  const token = "2c9b5710218d2d22baffae4fb2dc14b03c35ef2f"; 

  return (
   <>
    <Box className="flex flex-col gap-4">
        <AirIndiceValidation />
        <div className="relative h-[100vh] w-full">
            <MapContainer center={position} zoom={11} className="h-full w-full z-0">
                <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="© OpenStreetMap contributors"
                />

                {/* Couche qualité de l’air AQICN */}
                <TileLayer
                url={`https://tiles.aqicn.org/tiles/usepa-aqi/{z}/{x}/{y}.png?token=${token}`}
                attribution='Air Quality © <a href="https://aqicn.org">AQICN.org</a>'
                opacity={0.7}
                />

                <ChangeView center={position} />
            </MapContainer>
        </div>
        
    </Box>
    
   </> 
     
  );
}
