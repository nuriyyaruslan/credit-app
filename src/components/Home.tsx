import React, { useState } from "react";
import {
  Box,
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles
} from "@material-ui/core";
import { useForm, SubmitHandler } from "react-hook-form";
import { RootState, useAppSelector } from "../store/store";
import { useSelector, useDispatch } from "react-redux";
import { setSearchTerm } from "../store/features/clientSlice";
import { Link } from "react-router-dom";
import {useNavigate} from 'react-router-dom';
import searchIcon  from "../assets/icon1.png";


type Inputs = {
  example: string;
  finRequired: string;
};

const useStyles = makeStyles(() => ({
  showDetailsLink: {
    backgroundColor: "#f5f5f5",
    padding: "6px 8px",
    borderRadius: "8px",
    textDecoration: "none",
    transition: "all .4s ease",
    color:"rgb(25, 118, 210)",
    textTransform:"uppercase",
    fontSize:"14px",
    fontWeight: 500,
    "&:hover": {
      backgroundColor: "rgba(7, 168, 243, 0.178)",
    },
  },
  iconStyle: {
    width:"460px",
    margin: "0 auto 32px auto",
    display: "block",
  }
}));

const Home = () => {
  const { showDetailsLink, iconStyle } = useStyles();
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const dispatch = useDispatch();

  function handleSearchInput(event: React.ChangeEvent<HTMLInputElement>) {
    const searchTerm = event.target.value;
    dispatch(setSearchTerm(searchTerm));
  }

  const clients = useAppSelector((state) => state.client.clients);
  const searchTerm = useSelector((state: RootState) => state.client.searchTerm);
  const filteredData = clients.filter((item: { fin: string | string[] }) =>
    item.fin.includes(searchTerm)
  );

  console.log("start filteredData");
  console.log(filteredData);
  console.log("end filteredData");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data.finRequired);
    handleClickOpen();
  };

  const addClientPage = () => {
    navigate('/addclient');
  }

  return (
    <Box
      className="main-content"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <img src={searchIcon} alt="" className={iconStyle} />
        <small style={{marginBottom:"12px",display:"block", color:"#000"}}>example fins: (5U6P45Y, 5Y6P12Y, 5Y6P18Y, 5Y6P12P)</small>
        <Box style={{ display: "flex", alignItems: "center" }}>
          <FormControl>
            <InputLabel htmlFor="fin">Enter Fin</InputLabel>
            <Input
              {...register("finRequired", { required: true, maxLength: 7, minLength: 7 })}
              id="fin"
              aria-describedby="my-helper-text"
              style={{ width: "360px" }}
              onChange={handleSearchInput}
            />
            {errors.finRequired && (
              <FormHelperText
                id="my-helper-text"
                style={{ marginLeft: "0", color: "red" }}
              >
                Fin is required and fin length will be 7
              </FormHelperText>
            )}
          </FormControl>
          <Button
            type="submit"
            variant="contained"
            style={{ marginLeft: "24px" }}
          >
            Search
          </Button>
        </Box>
      </form>
      {filteredData?.length > 0 ? (
        filteredData?.map((item) => (
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            key={item.id}
          >
            <DialogTitle
              id="alert-dialog-title"
              style={{
                fontSize: "16px",
                textAlign: "center",
                minWidth: "400px",
                paddingTop: "32px",
                paddingBottom: "24px",
              }}
            >
              {"Search result"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText
                id="alert-dialog-description"
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  color: "#1976d2",
                }}
              >
                <span>
                  {item.name} {item.surname} {item.fatherName}
                </span>
              </DialogContentText>
            </DialogContent>
            <DialogActions style={{ padding: "16px 24px"}}>
              <Button onClick={handleClose}>Cancel</Button>
              <Link to={`/client/${item.id}`} state={item} className={showDetailsLink}>Show user details</Link>
            </DialogActions>
          </Dialog>
        ))
      ) : (
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            id="alert-dialog-title"
            style={{
              fontSize: "16px",
              textAlign: "center",
              minWidth: "400px",
              paddingTop: "32px",
              paddingBottom: "24px",
            }}
          >
            {"Search result"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              id="alert-dialog-description"
              style={{
                textAlign: "center",
                fontSize: "20px",
                color:"#222"
              }}
            >
              User not found,
              <small style={{display:"block"}}>If you want to add user, please click add button</small>
            </DialogContentText>
          </DialogContent>
          <DialogActions style={{ padding: "16px 24px"}}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={addClientPage} autoFocus>
              Add
            </Button>
          </DialogActions>
        </Dialog>
      )}
    </Box>
  );
};

export default Home;
