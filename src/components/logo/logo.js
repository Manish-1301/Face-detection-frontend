import React from "react";
import { Card, CardMedia, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Imag from "../Logo/Logo1.jpg";

const useStyles = makeStyles((theme) => ({
  containerStyles: {
    paddingLeft: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      paddingLeft: theme.spacing(4),
    },
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(6),
    },
    [theme.breakpoints.up("lg")]: {
      paddingLeft: theme.spacing(6),
    },
    cursor: "pointer",
  },
}));
const Logo = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.containerStyles}>
      <Grid item xs={4} md={1}>
        <Card>
          <CardMedia
            component="img"
            image={Imag}
            title="Smart Brain"
            alt="Smart Brain"
          ></CardMedia>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Logo;
