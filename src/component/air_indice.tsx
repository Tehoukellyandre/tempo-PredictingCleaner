import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function  AirIndiceValidation() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button variant="outlined" onClick={handleOpen}>Légende</Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}

      >
        <Box className="absolute bottom-4 left-4 bg-white/90 p-3 rounded-lg shadow-md text-sm z-50">
            <h4 className="font-semibold mb-2">Indice de qualité de l’air (AQI)</h4>
            <ul className="space-y-1">
            <li><span className="inline-block w-4 h-4 bg-green-500 mr-2 rounded"></span> 0–50 : Bon</li>
            <li><span className="inline-block w-4 h-4 bg-yellow-400 mr-2 rounded"></span> 51–100 : Modéré</li>
            <li><span className="inline-block w-4 h-4 bg-orange-400 mr-2 rounded"></span> 101–150 : Mauvais pour sensibles</li>
            <li><span className="inline-block w-4 h-4 bg-red-500 mr-2 rounded"></span> 151–200 : Mauvais</li>
            <li><span className="inline-block w-4 h-4 bg-purple-500 mr-2 rounded"></span> 201–300 : Très mauvais</li>
            <li><span className="inline-block w-4 h-4 bg-rose-800 mr-2 rounded"></span> 300+ : Dangereux</li>
            </ul>
        </Box>
      </Modal>
    </div>
  );
}