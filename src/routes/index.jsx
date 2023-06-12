import ResponsiveAppBar from "../components/AppBar";
import { Container, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Index() {
  return (
    <>
      <main>
        <Container>
          <Typography mt={5} variant="h4" gutterBottom>
            Página Principal
          </Typography>

          <Outlet />
        </Container>
      </main>
    </>
  );
}
