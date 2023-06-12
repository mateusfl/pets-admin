import { useState } from "react";
import ResponsiveAppBar from "./components/AppBar";
import OutlinedCard from "./components/AppointmentCard";
import { Container } from "@mui/material";
import {Typography} from "@mui/material";
import {Grid} from "@mui/material";

function App() {
  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Container>
          <Typography mt={5} variant="h4" gutterBottom>
            h3. Heading
          </Typography>
          <Grid container columns={{ xs: 4, md: 12 }} spacing={2}>
            <Grid item>
              <OutlinedCard/>
            </Grid>
            <Grid item>
              <OutlinedCard/>
            </Grid>
            <Grid item>
              <OutlinedCard/>
            </Grid>
            <Grid item>
              <OutlinedCard/>
            </Grid>
            <Grid item>
              <OutlinedCard/>
            </Grid>
            <Grid item>
              <OutlinedCard/>
            </Grid>
            <Grid item>
              <OutlinedCard/>
            </Grid>
            <Grid item>
              <OutlinedCard/>
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}

export default App;
