import ResponsiveAppBar from "../components/AppBar";
import { Container, Typography, Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import OutlinedCard from "../components/AppointmentCard";
import { useQuery } from "@tanstack/react-query";

export default function Index() {
  const today = new Date().toDateString();

  const { isLoading, error, data } = useQuery({
    queryKey: ["appointments"],
    queryFn: () =>
      fetch("http://127.0.0.1:8090/api/collections/appointments/records").then((res) => res.json()),
  });

  const todayAppointments =
    data && data.items.filter((item) => new Date(item.time).toDateString() == today);

  return (
    <>
      <main>
        <Container>
          <Typography mt={5} variant="h4" gutterBottom>
            Página Principal
          </Typography>
          {todayAppointments && todayAppointments.length > 0 ? (
            <Typography mt={5} mb={3} variant="h5" gutterBottom>
              Consultas de Hoje
            </Typography>
          ) : (
            ""
          )}

          <Grid container columns={{ xs: 4, md: 12 }} spacing={2}>
            {todayAppointments && todayAppointments.length > 0 ? (
              todayAppointments.map((appointment, index) => {
                return (
                  <Grid key={index} item>
                    <OutlinedCard
                      patient={appointment.patient}
                      tutor={appointment.tutor}
                      time={appointment.time}
                      id={appointment.id}
                    />
                  </Grid>
                );
              })
            ) : (
              <Typography mt={6} variant="h5" gutterBottom>
                Nenhuma consulta para hoje.
              </Typography>
            )}
          </Grid>
          <Outlet />
        </Container>
      </main>
    </>
  );
}
