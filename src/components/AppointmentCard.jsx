import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function OutlinedCard({ tutor, patient, time }) {
  const card = (
    <React.Fragment>
      <CardContent>
        {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {patient ? patient : "Nome não encontrado"}
          </Typography> */}
        <Typography variant="h5" component="div">
          {patient ? patient : "Nome não encontrado"}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {time ? time : "horário não encontrado"}
        </Typography>
        <Typography variant="body2">
          Tutor: {tutor ? tutor : "Não encontrado"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Detalhes</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
