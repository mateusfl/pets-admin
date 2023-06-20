import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import AppointmentsTable from "../components/AppointmentsTable";
import { pb } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Appointments({ title }) {
  const navigate = useNavigate();
  const { isLoading, error, data } = useQuery({
    queryKey: ["appointments"],
    queryFn: () =>
      fetch("http://127.0.0.1:8090/api/collections/appointments/records").then((res) => res.json()),
  });
  useEffect(() => {
    if(!pb.authStore.isValid) navigate("/login");
  })

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
