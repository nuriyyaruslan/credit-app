import { Box, Container, Grid, makeStyles,Breadcrumbs,Typography, Button } from "@material-ui/core";
import { Link, useLocation } from "react-router-dom";
import {useNavigate} from 'react-router-dom';

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
  breadcrumb: {
    marginBottom:'32px'
  }
}));

const Client = () => {
  const { clientBox,breadcrumb } = useStyles();
  const location = useLocation();
  const client = location.state;
  const navigate = useNavigate();

  return (
    <Box className="main-content">
      <Container
        maxWidth="lg"
        style={{ paddingTop: "100px", paddingBottom: "64px" }}
      >
        <Box className={breadcrumb}>
            <Box style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link color="inherit" to="/">
                  Home
                </Link>
                <Link color="inherit" to="/clients">
                    Clients
                </Link>
                <Typography>{client.name} {client.surname}</Typography>
              </Breadcrumbs>
              <Button type="button" variant="contained" style={{paddingTop:"10px"}} onClick={() => navigate('/takecredit') }>New credit order</Button>
            </Box>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={6} key={client.id} style={{ margin: "auto",color:"#000" }}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Client;
