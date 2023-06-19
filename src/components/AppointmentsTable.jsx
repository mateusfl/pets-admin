import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";

export default function AppointmentsTable({ tableData }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) =>
      fetch(`http://localhost:3000/appointments/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["appointments"] });
    },
  });

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{fontWeight: "bold"}}>Paciente</TableCell>
              <TableCell sx={{fontWeight: "bold"}}>Espécie</TableCell>
              <TableCell sx={{fontWeight: "bold"}}>Tutor</TableCell>
              <TableCell sx={{fontWeight: "bold"}}>Data</TableCell>
              <TableCell sx={{fontWeight: "bold"}}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData && tableData.length > 0 ? (
              tableData.map((appointment) => (
                <TableRow
                  key={appointment.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {appointment.patient}
                  </TableCell>
                  <TableCell>{appointment.species}</TableCell>
                  <TableCell>{appointment.tutor}</TableCell>
                  <TableCell>
                    {new Date(appointment.time).toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <IconButton component={Link} to={`/consultas/${appointment.id}`} color="info" sx={{ mr: 1 }} aria-label="edit">
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => mutation.mutate(appointment.id)}
                      color="error"
                      aria-label="delete"
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow
                key={0}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell>Sem dados</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
