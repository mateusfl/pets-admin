import { Typography } from "@mui/material";
import {Stack} from "@mui/material";
import { pb } from "../lib/utils";

export default function Profile({ title }) {
  const user = pb.authStore.model;

  return (
    <>
      {title ? (
        <Typography mt={5} variant="h4" gutterBottom>
          {title}
        </Typography>
      ) : (
        ""
      )}
      <Stack>
        <Typography variant="body1" gutterBottom>
            Nome: {user.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
            Email: {user.email}
        </Typography>
      </Stack>
    </>
  );
}
