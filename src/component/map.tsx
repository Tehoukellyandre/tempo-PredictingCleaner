import { MapContainer, Marker, Popup, TileLayer , useMapEvents } from 'react-leaflet'
import type { Position } from '..'
import { useState } from 'react'
import L from 'leaflet'; 

function LocationMapper ({handleClick , updateClickedState})  {
      const event = useMapEvents({
          click : (e)=>{
            const {lat: latitude , lng :longitude} = e.latlng ;
            updateClickedState(true) ;
            handleClick([latitude, longitude])
          } 
      })
      return null 
}
export function Maper({position}:{position : Position}) {
    const [clicked , setClicked ] = useState(false) ;
    const [clickedPosition , setClickedPosition ] = useState<number[]>([])
    const clickedMarkerIcon = L.icon({
      iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
   return (
    <>
        <MapContainer 
           center={[position.latitude,  position.longitude]} 
           zoom={13} 
           scrollWheelZoom={false}
           style={{ height: '500px', width: '100%' }}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[position.latitude,  position.longitude]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
             <LocationMapper  handleClick= {setClickedPosition}  updateClickedState={setClicked}/>
            {clicked && <Marker position={[clickedPosition[0],  clickedPosition[1]]}  icon={clickedMarkerIcon}>
                <Popup>
                  you want visit here
                </Popup>
            </Marker> }
        </MapContainer>
    </>
   )


}