import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import AppointmentsTable from "../components/AppointmentsTable";

export default function Appointments({ title }) {
  const { isLoading, error, data } = useQuery({
    queryKey: ["appointments"],
    queryFn: () =>
      fetch("http://127.0.0.1:8090/api/collections/appointments/records").then((res) => res.json()),
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
      <AppointmentsTable tableData={data?.items}/>
    </>
  );
}
