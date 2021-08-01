import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Link } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  ContainerStyles: {
    background:
      "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    minHeight: "100vh",
    minWidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  ShadowStyles: {
    boxShadow: "2px 2px 8px 0 rgb(0 0 0 / 20%)",
    borderColor: "rgba(0,0,0,.1)",
    borderStyle: "solid",
    borderWidth: "1px",
    borderRadius: ".25rem",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ isSignedIn, loadUser }) {
  const classes = useStyles();
  let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSignUp = (event) => {
    event.preventDefault();
    if (email === "") window.alert("Email cannot be empty");
    else if (name === "") window.alert("name cannot be empty");
    else if (password === "") window.alert("password cannot be empty");
    else {
      fetch("https://fierce-shelf-73821.herokuapp.com/register", {
        method: "post",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      })
        .then((response) => response.json())
        .then((user) => {
          if (user === "Error!!") {
            window.alert("register not working");
          } else {
            loadUser(user, true);
            history.push("/Home");
          }
        });
    }
  };
  return (
    <div className={classes.ContainerStyles}>
      <Container
        component="main"
        maxWidth="xs"
        className={classes.ShadowStyles}
      >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSignUp}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="name"
              label="Enter Name"
              name="name"
              autoFocus
              onChange={(event) => setName(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs></Grid>
              <Grid item>
                <Link
                  onClick={() => {
                    history.push("/");
                  }}
                  variant="body2"
                  style={{ cursor: "pointer", zIndex: "4" }}
                >
                  {"Already have an account?"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </div>
  );
}
