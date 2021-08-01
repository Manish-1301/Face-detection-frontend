import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography.button,
    backgroundColor: "transparent",
    color: "#ffffff",
    padding: theme.spacing(1),
  },
  center: {
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1rem",
    },
  },
}));
const Rank = ({ user }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h3" gutterBottom className={classes.center}>
        {`${user.name},your count is`}
      </Typography>
      <Typography variant="h4" className={classes.center}>
        {`#${user.entries}`}
      </Typography>
    </div>
  );
};

export default Rank;
