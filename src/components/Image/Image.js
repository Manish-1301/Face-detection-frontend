import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import "./image.css";

const useStyles = makeStyles((theme) => ({
  BoxStyles: {
    margin: "0 auto",
    marginTop: theme.spacing(2),
    display: "flex",
    justifyContent: "center",
  },
  ImageStyles: {
    width: 500,
    height: "auto",
    [theme.breakpoints.down("sm")]: {
      width: 400,
    },
    [theme.breakpoints.down("xs")]: {
      width: 300,
    },
    [theme.breakpoints.down(300)]: {
      width: 250,
    },
  },
  divStyle: {
    position: "relative",
  },
}));

const Image = ({ imageURL, box }) => {
  const classes = useStyles();
  return (
    <Box className={classes.BoxStyles}>
      <div className={classes.divStyle}>
        <img
          src={imageURL}
          id="face"
          alt="Face"
          className={classes.ImageStyles}
        />
        <div
          className="bounding-box"
          style={{
            top: box.toprow,
            right: box.rightcol,
            bottom: box.bottomrow,
            left: box.leftcol,
          }}
        />
      </div>
    </Box>
  );
};

export default Image;
