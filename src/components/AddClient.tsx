import {
  Box,
  Container,
  makeStyles,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Grid,
  Button,
} from "@material-ui/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { addClient } from "../store/features/clientSlice";
import { useAppDispatch } from "../store/store";
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles(() => ({
  addClientCover: {
    minHeight: "calc(100vh - 200px)",
    paddingTop: "72px",
    paddingBottom: "64px",
  },
  formControl: {
    width: "100%",
    marginBottom: "12px",
  },
  formDataTitle: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#222",
  },
}));

type AddClient = {
  name: string;
  surname: string;
  fatherName: string;
  actualAddress: string;
  fin: string;
  seriesAndCode: string;
  registrationAddress: string;
  birthdate: string;
  mobile: number;
  homePhoneNumber: number;
};

function AddClient() {
  const { addClientCover, formControl, formDataTitle } = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const notify = () => toast("Successfully added!");
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<AddClient>();

  const onSubmit: SubmitHandler<AddClient> = (data) => {
    console.log(data);
    dispatch(addClient({
        actualAddress: data.actualAddress,
        birthdate: data.birthdate,
        fatherName: data.fatherName,
        fin: data.fin,
        name: data.name,
        homePhoneNumber: data.homePhoneNumber,
        mobile: data.mobile,
        registrationAddress: data.registrationAddress,
        surname: data.surname,
        seriesAndCode: data.seriesAndCode,
    }))
    notify();
    setTimeout(() => navigate('/clients'), 2000);
  };

  return (
    <Box style={{background:"#fff"}}>
      <Container maxWidth="md">
        <Box className={addClientCover}>
        <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)}>
            <p className={formDataTitle}>Ability to register a new customer</p>
            <FormControl className={formControl}>
              <InputLabel htmlFor="actualAddress">Actual Address</InputLabel>
              <Input
                id="actualAddress"
                aria-describedby="actualAddress"
                {...register("actualAddress", { required: true })}
              />
              {errors.actualAddress && (
                <FormHelperText
                  id="actualAddress"
                  style={{ marginLeft: "0", color: "red" }}
                >
                  Actual Address is required
                </FormHelperText>
              )}
            </FormControl>
            <p className={formDataTitle}>Identity card information</p>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <FormControl className={formControl}>
                  <InputLabel htmlFor="fin">FIN</InputLabel>
                  <Input
                    id="fin"
                    aria-describedby="fin"
                    {...register("fin", { required: true })}
                  />
                  {errors.fin && (
                    <FormHelperText
                      id="fin"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      FIN is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={formControl}>
                  <InputLabel htmlFor="seriesAndCode">
                    Series and Code
                  </InputLabel>
                  <Input
                    id="seriesAndCode"
                    aria-describedby="seriesAndCode"
                    {...register("seriesAndCode", { required: true })}
                  />
                  {errors.seriesAndCode && (
                    <FormHelperText
                      id="seriesAndCode"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      Series and Code is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={formControl}>
                  <InputLabel htmlFor="name">Name</InputLabel>
                  <Input
                    id="name"
                    aria-describedby="name"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <FormHelperText
                      id="name"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      Name is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={formControl}>
                  <InputLabel htmlFor="surname">Surname</InputLabel>
                  <Input
                    id="surname"
                    aria-describedby="surname"
                    {...register("surname", { required: true })}
                  />
                  {errors.surname && (
                    <FormHelperText
                      id="surname"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      Surname is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={formControl}>
                  <InputLabel htmlFor="fatherName">FatherName</InputLabel>
                  <Input
                    id="fatherName"
                    aria-describedby="fatherName"
                    {...register("fatherName", { required: true })}
                  />
                  {errors.fatherName && (
                    <FormHelperText
                      id="fatherName"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      FatherName is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl className={formControl}>
                  <InputLabel htmlFor="registrationAddress">
                    Registration Address
                  </InputLabel>
                  <Input
                    id="registrationAddress"
                    aria-describedby="registrationAddress"
                    {...register("registrationAddress", { required: true })}
                  />
                  {errors.registrationAddress && (
                    <FormHelperText
                      id="registrationAddress"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      Registration Address is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>

              <Grid item xs={6}>
                <FormControl
                  className={formControl}
                  style={{ position: "relative", top: "-28px" }}
                >
                  <InputLabel
                    htmlFor="birthdate"
                    style={{ position: "static", marginBottom: "12px" }}
                  >
                    Birthdate
                  </InputLabel>
                  <Input
                    type="date"
                    id="birthdate"
                    aria-describedby="birthdate"
                    {...register("birthdate", { required: true })}
                    style={{background:"#ddd"}}
                  />
                  {errors.birthdate && (
                    <FormHelperText
                      id="birthdate"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      Birthdate is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl className={formControl}>
                  <InputLabel htmlFor="mobile">Mobile number</InputLabel>
                  <Input
                    id="mobile"
                    aria-describedby="mobile"
                    type="number"
                    {...register("mobile", { required: true })}
                  />
                  {errors.mobile && (
                    <FormHelperText
                      id="mobile"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      Mobile number is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <FormControl
                  className={formControl}
                  style={{ position: "relative", top: "-28px" }}
                >
                  <InputLabel htmlFor="homePhoneNumber">
                    Home Phone Number
                  </InputLabel>
                  <Input
                    id="homePhoneNumber"
                    aria-describedby="homePhoneNumber"
                    type="number"
                    {...register("homePhoneNumber", { required: true })}
                  />
                  {errors.homePhoneNumber && (
                    <FormHelperText
                      id="homePhoneNumber"
                      style={{ marginLeft: "0", color: "red" }}
                    >
                      Home Phone Number is required
                    </FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={6} style={{ width: "100%", margin: "auto" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={{
                    paddingTop: "10px",
                    width: "100%",
                    marginTop: "100px",
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
export default AddClient;
