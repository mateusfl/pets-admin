import { Stack, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import { pb } from "../lib/utils";

export default function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const authData = await pb
      .collection("users")
      .authWithPassword(data.username, data.password);
    if (authData) navigate("/consultas");
  };

  return (
    <>
      <Container maxWidth="sm">
        <Typography variant="h5" gutterBottom sx={{ mt: 15 }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TextField
              {...register("username")}
              required
              variant="outlined"
              label="Usuário"
              margin="dense"
              fullWidth
            />
            <TextField
              {...register("password")}
              required
              variant="outlined"
              label="Senha"
              margin="dense"
              type="password"
              fullWidth
            />
          </Stack>
          <Button sx={{ mt: 2 }} type="submit" variant="contained">
            Entrar
          </Button>
        </form>
      </Container>
    </>
  );
}
