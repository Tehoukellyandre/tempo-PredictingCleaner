import * as React from "react";
import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import { useGetAtmosphericData } from "@/hooks/query";
import { useCurrentPosition } from "@/hooks/position_hook";
import { useQuery, useQueryClient } from '@tanstack/react-query'


const villes = [
  {
    nom: "Cotonou",
    coordonnees: { lat: 6.3703, lon: 2.3912 },
  },
  {
    nom: "Paris",
    coordonnees: { lat: 48.8566, lon: 2.3522 },
  },
  {
    nom: "Tokyo",
    coordonnees: { lat: 35.6762, lon: 139.6503 },
  },
  {
    nom: "Montréal",
    coordonnees: { lat: 45.5019, lon: -73.5674 },
  },
];

export default function SelectVilles() {
  const [villeSelectionnee, setVilleSelectionnee] = useState("");
  const [coordonnees, setCoordonnees] = useState(null);



  const handleChange = (event) => {
    const villeChoisie = villes.find((v) => v.nom === event.target.value);
    setVilleSelectionnee(villeChoisie.nom);
    setCoordonnees(villeChoisie.coordonnees);
  };

  // useEffect(()=>{
  //   setPosition(coordonnees) ;
  //   queryClient.invalidateQueries({ queryKey: ['previsionsAirData'] })
        
  // },[coordonnees])

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        width: 300,
        p: 3,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: "background.paper",
      }}
    >
      <Typography variant="h6" textAlign="center">
        🌍 Sélectionne une ville
      </Typography>

      <TextField
        id="select-ville"
        select
        label="Ville"
        value={villeSelectionnee}
        onChange={handleChange}
        fullWidth
        color="primary"
      >
        {villes.map((option) => (
          <MenuItem key={option.nom} value={option.nom}>
            {/* <RoomIcon sx={{ mr: 1, color: "primary.main" }} /> */}
            {option.nom}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}
