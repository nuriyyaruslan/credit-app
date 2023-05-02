import {
  Box,
  Container,
  makeStyles,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
} from "@material-ui/core";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useStyles = makeStyles(() => ({
  TakeCreditCover: {
    minHeight: "calc(100vh - 200px)",
    paddingTop: "72px",
    paddingBottom: "64px",
  },
  formControl: {
    width: "100%",
    marginTop: "20px",
    marginBottom: "12px",
  },
  formDataTitle: {
    fontSize: "20px",
    fontWeight: 500,
    color: "#222",
  },
}));

type TakeCredit = {
  activitySector: string;
  monthlyIncome: string;
  workExperienceYears: string;
  workExperienceMonthly: string;
  region: string;
  businessAdress: string;
};

function TakeClient() {
  const { TakeCreditCover, formControl, formDataTitle } = useStyles();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<TakeCredit>();

  const onSubmit: SubmitHandler<TakeCredit> = (data) => {
    console.log(data);
  };

  return (
    <Box style={{background:"#fff"}}>
      <Container maxWidth="md">
        <Box className={TakeCreditCover}>
          <ToastContainer />
          <form onSubmit={handleSubmit(onSubmit)}>
            <h4 className={formDataTitle}>New Credit Request</h4>
            <Box>
              <strong>First stage - Information about the person</strong>
              <FormControl className={formControl}>
                <InputLabel htmlFor="activitySector">Activity sector</InputLabel>
                <Input
                  id="activitySector"
                  aria-describedby="activitySector"
                  {...register("activitySector", { required: true })}
                />
                {errors.activitySector && (
                  <FormHelperText
                    id="activitySector"
                    style={{ marginLeft: "0", color: "red" }}
                  >
                    Activity sector is required
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl className={formControl}>
                <InputLabel htmlFor="monthlyIncome">Monthly income</InputLabel>
                <Input
                  id="monthlyIncome"
                  aria-describedby="monthlyIncome"
                  {...register("monthlyIncome", { required: true })}
                />
                {errors.monthlyIncome && (
                  <FormHelperText
                    id="monthlyIncome"
                    style={{ marginLeft: "0", color: "red" }}
                  >
                    Monthly income is required
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl className={formControl}>
                <InputLabel htmlFor="workExperienceYears">Work experience(years)</InputLabel>
                <Input
                  id="workExperience"
                  aria-describedby="workExperienceYears"
                  {...register("workExperienceYears", { required: true })}
                />
                {errors.workExperienceYears && (
                  <FormHelperText
                    id="workExperienceYears"
                    style={{ marginLeft: "0", color: "red" }}
                  >
                    Work experience(years) is required
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl className={formControl}>
                <InputLabel htmlFor="workExperienceMonthly">Work experience(monthly)</InputLabel>
                <Input
                  id="workExperienceMonthly"
                  aria-describedby="workExperienceMonthly"
                  {...register("workExperienceMonthly", { required: true })}
                />
                {errors.workExperienceYears && (
                  <FormHelperText
                    id="workExperienceMonthly"
                    style={{ marginLeft: "0", color: "red" }}
                  >
                    Work experience(monthly) is required
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl className={formControl}>
                <InputLabel htmlFor="region">Region</InputLabel>
                <Input
                  id="region"
                  aria-describedby="region"
                  {...register("region", { required: true })}
                />
                {errors.region && (
                  <FormHelperText
                    id="region"
                    style={{ marginLeft: "0", color: "red" }}
                  >
                    Region is required
                  </FormHelperText>
                )}
              </FormControl>
              <FormControl className={formControl}>
                <InputLabel htmlFor="region">Business address</InputLabel>
                <Input
                  id="businessAdress"
                  aria-describedby="businessAdress"
                  {...register("businessAdress", { required: true })}
                />
                {errors.businessAdress && (
                  <FormHelperText
                    id="region"
                    style={{ marginLeft: "0", color: "red" }}
                  >
                    Business Adress is required
                  </FormHelperText>
                )}
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{
                  paddingTop: "10px",
                  width: "100%",
                  marginTop:"40px",
                }}
              >
                Next
              </Button>
            </Box>
          </form>
        </Box>
      </Container>
    </Box>
  );
}
export default TakeClient;
