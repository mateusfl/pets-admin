import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';

export default function ErrorPage() {
  return (
    <>
      <Typography mt={5} variant="h5" gutterBottom>
        Ocorreu um erro ao acessar essa página, pode ser que ela não exista.
      </Typography>
      <Button variant="contained" component={Link} to={"/"}>
         <KeyboardReturnIcon /> Página principal
      </Button>
    </>
  );
}
