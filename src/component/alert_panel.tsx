import Alert from "@mui/material/Alert"
import Typography from "@mui/material/Typography"

export function AlertPanel({city , aqi ,status} :{ city:string , aqi : string , status: string}) {

  console.log(city)
  const GetAlertConfig = () => {
    switch (status) {
      case "Bon":
        return (
          <Alert
            variant="filled"
            severity="success"
            sx={{
              background: "linear-gradient(90deg, #43e97b 0%, #38f9d7 100%)",
              color: "#fff",
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Qualité de l'air excellente
            </Typography>
            La qualité de l'air à {city} est actuellement bonne (AQI: {aqi}). Profitez pleinement de vos activités extérieures !
          </Alert>
        );
      case "Modéré":
        return (
          <Alert
            variant="filled"
            severity="info"
            sx={{
              background: "linear-gradient(90deg, #f7971e 0%, #ffd200 100%)",
              color: "#333",
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Qualité de l'air modérée
            </Typography>
            La qualité de l'air à {city} est modérée (AQI: {aqi}). Les personnes sensibles peuvent envisager de limiter les activités intenses à l'extérieur.
          </Alert>
        );
      case "Mauvais":
        return (
          <Alert
            variant="filled"
            severity="warning"
            sx={{
              background: "linear-gradient(90deg, #f7971e 0%, #fd5c63 100%)",
              color: "#fff",
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Qualité de l'air mauvaise
            </Typography>
            La qualité de l'air à {city} est mauvaise (AQI: {aqi}). Limitez les activités extérieures, surtout pour les personnes sensibles.
          </Alert>
        );
      case "Très Mauvais":
        return (
          <Alert
            variant="filled"
            severity="error"
            sx={{
              background: "linear-gradient(90deg, #fd5c63 0%, #a40606 100%)",
              color: "#fff",
              boxShadow: 3,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Qualité de l'air très mauvaise
            </Typography>
            La qualité de l'air à {city} est très mauvaise (AQI: {aqi}). Évitez les activités extérieures autant que possible.
          </Alert>
        );
      case "Dangereux":
        return (
          <Alert
            variant="filled"
            severity="error"
            sx={{
              background: "linear-gradient(90deg, #8e0e00 0%, #1f1c18 100%)",
              color: "#fff",
              boxShadow: 3,
              border: "2px solid #fff",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Qualité de l'air dangereuse
            </Typography>
            La qualité de l'air à {city} est dangereuse (AQI: {aqi}). Restez à l'intérieur et suivez les recommandations des autorités sanitaires.
          </Alert>
        );
      default:
        return null;
    }
  };



  return (
      <GetAlertConfig />
  )
}
