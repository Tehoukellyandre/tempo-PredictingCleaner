import { useCallback, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import type { Position } from "..";


const villes = [
  {
    nom: "Cotonou",
    coordonnees: { latitude: 6.3703, longitude: 2.3912 },
  },
  {
    nom: "Paris",
    coordonnees: { latitude: 48.8566, longitude: 2.3522 },
  },
  {
    nom: "Tokyo",
    coordonnees: { latitude: 35.6762, longitude: 139.6503 },
  },
  {
    nom: "Montréal",
    coordonnees: { latitude: 45.5019, longitude: -73.5674 },
  },
];

export default function SelectVilles({onPositionChange}: { onPositionChange : (coord : Position)=> void}) {
  const [villeSelectionnee, setVilleSelectionnee] = useState<string| undefined>("");
  const [coordonnees, setCoordonnees] = useState<Position|undefined>(undefined);


  const handleChange = useCallback((event: { target: { value: string; }; }) => {
    const villeChoisie = villes.find((v) => v.nom === event.target.value);
    setVilleSelectionnee(villeChoisie?.nom);
    setCoordonnees(villeChoisie?.coordonnees);
    if(villeChoisie)
      onPositionChange(villeChoisie.coordonnees) 
  },[]);


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
        🌍 select an Citie
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
