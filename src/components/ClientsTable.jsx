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

export default function ClientsTable({ tableData }) {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (id) =>
      fetch(`http://127.0.0.1:8090/api/collections/clients/records/${id}`, { method: "DELETE" }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["clients"] });
    },
  });
  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>Nome</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>CPF</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Contato</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData && tableData.length > 0 ? (
              tableData.map((client) => (
                <TableRow
                  key={client.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {client.name}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {client.cpf}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {client.contact}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {client.email}
                  </TableCell>
                  <TableCell>
                    <IconButton
                      component={Link}
                      to={`/clientes/${client.id}`}
                      color="info"
                      sx={{ mr: 1 }}
                      aria-label="edit"
                    >
                      <Edit />
                    </IconButton>
                    <IconButton
                      onClick={() => mutation.mutate(client.id)}
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
