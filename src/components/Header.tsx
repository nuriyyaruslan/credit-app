import { AppBar, Button, Link, Toolbar, Typography, makeStyles } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const headersData = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Clients",
      href: "/clients",
    },
];

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#400CCC",
    paddingRight: "79px",
    paddingLeft: "118px",
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
    textDecoration:'none',
    "&:hover": {
      textDecoration: "none",
    },
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
 },
 toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function Header() {
  const { header, logo,toolbar,menuButton } = useStyles();

  const displayDesktop = () => {
    return (
    <Toolbar className={toolbar}>
        {creditAppLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const creditAppLogo = (
    <Typography variant="h6" component="h1">
      <Link href='/' className={logo}>
        Credit App
      </Link>
    </Typography>
  );
  
  const getMenuButtons = () => {
    return headersData.map(({ label, href }) => {
      return (
        <Button
        {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton
         }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <AppBar className={header}>{displayDesktop()}</AppBar>
  );
}
export default Header;
