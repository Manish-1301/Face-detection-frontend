import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import { Button, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    alignSelf: "stretch",
    width: 500,
    margin: "0 auto",
    [theme.breakpoints.down("sm")]: {
      width: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
    [theme.breakpoints.down(400)]: {
      width: 250,
    },
    boxShadow: "2px 2px 8px 0 rgb(0 0 0 / 20%)",
    borderColor: "rgba(0,0,0,.1)",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: ".25rem",
    padding: theme.spacing(2),
    backgroundColor: "transparent",
  },
  input: {
    padding: "2px 4px",
    marginLeft: theme.spacing(1),
    flex: 1,
    [theme.breakpoints.down("xs")]: {
      padding: "1px 2px",
    },
    backgroundColor: "#fff",
  },
}));

const ImageLink = ({ onInputChange, onSubmit }) => {
  const classes = useStyles();
  return (
    <Box component="span" m={1}>
      <Paper component="form" className={classes.root}>
        <InputBase
          className={classes.input}
          placeholder="Enter the Image Link"
          inputProps={{ "aria-label": "search google maps" }}
          onChange={onInputChange}
        />
        <Button variant="contained" color="primary" onClick={onSubmit}>
          Detect
        </Button>
      </Paper>
    </Box>
  );
};

export default ImageLink;
