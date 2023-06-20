import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Delete, Edit } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";

export default function OutlinedCard({ id, tutor, patient, time }) {
  const parsedTime = new Date(time).toLocaleString();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) =>
      fetch(`http://127.0.0.1:8090/api/collections/appointments/records/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });

  const card = (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <CardContent>
            <Typography variant="h5" component="div">
              {patient ? patient : "Nome não encontrado"}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {time ? parsedTime : "horário não encontrado"}
            </Typography>
            <Typography variant="body2">
              Tutor: {tutor ? tutor : "Não encontrado"}
            </Typography>
          </CardContent>
        </AccordionSummary>
        <AccordionDetails>
          <CardActions>
            <Button
              sx={{ mr: 1 }}
              variant="outlined"
              startIcon={<Edit />}
              component={Link}
              to={`/consultas/${id}`}
              size="small"
            >
              Editar
            </Button>
            <Button
              variant="outlined"
              startIcon={<Delete />}
              color="error"
              size="small"
              onClick={() => mutation.mutate(id)}
            >
              Excluir
            </Button>
          </CardActions>
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
