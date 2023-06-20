import { Outlet } from "react-router-dom";
import ResponsiveAppBar from "../components/AppBar";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { pb } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Root({ title }) {
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!pb.authStore.isValid) navigate("/login");
  })

  return (
    <>
      <header>
        <ResponsiveAppBar />
      </header>
      <main>
        <Container>
          {title ? (
            <Typography mt={5} variant="h4" gutterBottom>
              {title}
            </Typography>
          ) : (
            ""
          )}

          <Outlet />
        </Container>
      </main>
    </>
  );
}
