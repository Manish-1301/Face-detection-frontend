import React from "react";
import { AppBar, Toolbar, Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  ToolbarStyles: {
    display: "flex",
    justifyContent: "flex-end",
  },
  HeaderStyles: {
    background: "transparent",
    boxShadow: "none",
  },
});
const Navigation = ({ loadUser }) => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.HeaderStyles}>
      <Toolbar className={classes.ToolbarStyles}>
        <Button
          variant="outlined"
          color="inherit"
          onClick={() =>
            loadUser(
              {
                id: "",
                name: "",
                Email: "",
                entries: 0,
                joined: "",
              },
              false
            )
          }
        >
          Sign Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
