import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import SignUp from "./Components/SignUp/SignUp";
import SignIn from "./Components/SignIn/SignIn";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    Email: "",
    entries: 0,
    joined: "",
    isSignedIn: false,
  });
  const loadUser = (data, isSignedIn) => {
    setUser({
      ...user,
      id: data.id,
      name: data.name,
      Email: data.Email,
      entries: data.entries,
      joined: data.joined,
      isSignedIn: isSignedIn,
    });
  };
  const increaseImageCount = () => {
    fetch("https://fierce-shelf-73821.herokuapp.com/images", {
      method: "put",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({
        id: user.id,
      }),
    })
      .then((response) => response.json())
      .then((count) => {
        setUser({ ...user, entries: count });
      })
      .catch((err) => window.alert(err));
  };
  return (
    <Router>
      <Switch>
        <Route exact path="/" loadUser>
          <SignIn isSignedIn={user.isSignedIn} loadUser={loadUser} />
        </Route>
        <Route path="/Home">
          <Home
            loadUser={loadUser}
            user={user}
            increaseImageCount={increaseImageCount}
          />
        </Route>
        <Route path="/signUp">
          <SignUp isSignedIn={user.isSignedIn} loadUser={loadUser} />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
