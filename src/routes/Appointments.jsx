import { Typography } from "@mui/material";
import {Grid} from "@mui/material";
import OutlinedCard from "../components/AppointmentCard";

export default function Appointments({ title }) {
  return (
    <>
          {title ? (
            <Typography mt={5} variant="h4" gutterBottom>
              {title}
            </Typography>
          ) : (
            ""
          )}
      <Grid container columns={{ xs: 4, md: 12 }} spacing={2}>
        <Grid item>
          <OutlinedCard />
        </Grid>
        <Grid item>
          <OutlinedCard />
        </Grid>
        <Grid item>
          <OutlinedCard />
        </Grid>
        <Grid item>
          <OutlinedCard />
        </Grid>
      </Grid>
    </>
  );
}
