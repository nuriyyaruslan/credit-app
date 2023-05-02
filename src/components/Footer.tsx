import { Box, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: "#400CCC",
    paddingTop:'20px',
    paddingBottom: '20px',
    boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
  },
  copyright: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#FFFEFE",
    textAlign: "left",
  },
}));

function Footer() {
  const { footer, copyright } = useStyles();

  const footerCopyright = (
    <Typography component="p" className={copyright} style={{ textAlign: 'center' }}>
      &copy; copyright by <a href="https://www.linkedin.com/in/nuriyya-ruslanovna-301200125/" target="_blank" style={{ color: '#fff' }}>nuriyya ruslan</a>
    </Typography>
  );

  return (
    <footer>
      <Box className={footer}>
        {footerCopyright}
      </Box>
    </footer>
  );
}
export default Footer;
