import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { DateTimePicker } from "@mui/x-date-pickers";
import { useForm, Controller } from "react-hook-form";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function NewAppointment({ title }) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        patient: data.patient,
        tutor: data.tutor,
        time: data.time,
        species: data.species
      }),
    }).then((res) => res.json());

    if (res) navigate("/consultas");
  };

  return (
    <>
      {title ? (
        <Typography mt={5} variant="h4" gutterBottom>
          {title}
        </Typography>
      ) : (
        ""
      )}
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
        <Button sx={{mt: 2}} type="submit" variant="contained">
          Cadastrar
        </Button>
      </form>
    </>
  );
}
