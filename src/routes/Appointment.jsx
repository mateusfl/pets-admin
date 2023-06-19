import { useLoaderData } from "react-router-dom";
import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function Appointment() {
  const { appointment } = useLoaderData();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    
  } = useForm({
    defaultValues: {
      patient: appointment.patient,
      tutor: appointment.tutor,
      species: appointment.species,
      time: moment(appointment.time),
    }
  });

  const onSubmit = async (data) => {
    const res = await fetch(`http://localhost:3000/appointments/${appointment.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient: data.patient,
        tutor: data.tutor,
        time: data.time,
        species: data.species,
      }),
    }).then((res) => res.json());

    if (res) navigate("/consultas");
  };
  return (
    <>
      <Typography mt={5} variant="h4" gutterBottom>
        Editar consulta de {appointment.patient}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            {...register("patient")}
            required
            variant="outlined"
            label="Nome do Paciente"
            margin="dense"
            fullWidth
          />
          <TextField
            {...register("tutor")}
            required
            variant="outlined"
            label="Nome do Tutor"
            margin="dense"
            fullWidth
          />
          <TextField
            {...register("species")}
            required
            variant="outlined"
            label="Espécie"
            margin="dense"
            fullWidth
          />
          <Controller
            control={control}
            name="time"
            render={({ field }) => (
              <DateTimePicker
                disablePast
                required
                format="DD-MM-YYYY HH:MM"
                ampm={false}
                label="Horário"
                {...field}
              />
            )}
          />
        </Stack>
        <Button sx={{ mt: 2 }} type="submit" variant="contained">
          Editar
        </Button>
      </form>
    </>
  );
}
