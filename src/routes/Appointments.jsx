import { Typography } from "@mui/material";
import { Grid } from "@mui/material";
import OutlinedCard from "../components/AppointmentCard";
import { useQuery } from "@tanstack/react-query";
import AppointmentsTable from "../components/AppointmentsTable";

export default function Appointments({ title }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["appointments"],
    queryFn: () =>
      fetch("http://localhost:3000/appointments").then((res) => res.json()),
  });

  return (
    <>
      {title ? (
        <Typography mt={5} variant="h4" gutterBottom>
          {title}
        </Typography>
      ) : (
        ""
      )}
      <AppointmentsTable tableData={data}/>
    </>
  );
}
