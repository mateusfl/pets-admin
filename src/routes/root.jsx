import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ResponsiveAppBar from "../components/AppBar";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";

export default function Root({ title }) {
  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Container>
          {title ? (
            <Typography mt={5} variant="h4" gutterBottom>
              {title}
            </Typography>
          ) : (
            ""
          )}

          <Outlet />
        </Container>
      </main>
    </>
  );
}
