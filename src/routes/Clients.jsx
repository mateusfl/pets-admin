import { Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import ClientsTable from "../components/ClientsTable";

export default function Clients({ title }) {
  const { isLoading, data } = useQuery({
    queryKey: ["clients"],
    queryFn: () => fetch("http://localhost:3000/clients").then((res) => res.json()),
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

      <ClientsTable tableData={data}/>
    </>
  );
}
