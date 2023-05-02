import { Box, Container, Grid, makeStyles,Breadcrumbs,Typography } from "@material-ui/core";
import { useAppSelector } from "../store/store";
import { Link } from "react-router-dom";

const useStyles = makeStyles(() => ({
  clientBox: {
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "8px",
    lineHeight: "32px",
    transition: "all .4s ease",
    boxShadow:
      "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
    "&:hover": {
      backgroundColor: "rgba(7, 168, 243, 0.178)",
    },
  },
  clientLink: {
    textDecoration: "none",
    color: "#000",
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const Clients = () => {
  const { clientBox, clientLink } = useStyles();
  const clients = useAppSelector((state) => state.client.clients);

  return (
    <Box className="main-content">
      <Container
        maxWidth="lg"
        style={{ paddingTop: "100px", paddingBottom: "64px" }}
      >
        <Breadcrumbs aria-label="breadcrumb" style={{marginBottom:"20px"}}>
          <Link color="inherit" to="/">
            Home
          </Link>
          <Typography>Clients</Typography>
        </Breadcrumbs>
        <Grid container spacing={2}>
          {clients.map((client) => (
            <Grid item xs={4} key={client.id}>
              <Link
                to={`/client/${client.id}`}
                state={client}
                className={clientLink}
              >
                <Box className={clientBox}>
                  <strong>id: {client.id}</strong>
                  <Box>ActualAddress: {client.actualAddress}</Box>
                  <Box>FIN: {client.fin}</Box>
                  <Box>Series and Code: {client.seriesAndCode}</Box>
                  <Box>
                    Fullname: {client.name} {client.surname} {client.fatherName}
                  </Box>
                  <Box>Registration Address: {client.registrationAddress}</Box>
                  <Box>Birthdate: {client.birthdate}</Box>
                  <Box>Mobile: {client.mobile}</Box>
                  <Box>Home Phone: {client.homePhoneNumber}</Box>
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Clients;
