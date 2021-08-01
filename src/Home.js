import { makeStyles } from "@material-ui/core";
import React from "react";
import { useState } from "react";
import Navigation from "./Components/Navigation/Navigation";
import Logo from "./Components/Logo/Logo";
import Rank from "./Components/Rank/Rank";
import ImageLink from "./Components/ImageLink/ImageLink";
import Image from "./Components/Image/Image";
import { Redirect } from "react-router";

const useStyles = makeStyles({
  backgroundStyles: {
    background: "rgb(238,174,202)",
    // eslint-disable-next-line no-dupe-keys
    background:
      "linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
    minHeight: "100vh",
    zIndex: 2,
  },
});

const calculateFace = (data) => {
  const image = document.getElementById("face");
  const width = Number(image.width);
  const height = Number(image.height);
  return {
    leftcol: data.left_col * width,
    toprow: data.top_row * height,
    rightcol: width - data.right_col * width,
    bottomrow: height - data.bottom_row * height,
  };
};

function App({ loadUser, user, increaseImageCount }) {
  const classes = useStyles();
  const [imageURL, setImageURL] = useState("");
  const [input, setInput] = useState();
  const [box, setBox] = useState({});
  const onBoxChange = (data) => {
    setBox(data);
  };
  const onInputChange = (event) => {
    setInput(event.target.value);
  };
  const onSubmit = () => {
    if (input === "") window.alert("URL cannot be empty");
    else {
      setImageURL(input);
      fetch("https://fierce-shelf-73821.herokuapp.com/imageUrl", {
        method: "post",
        headers: { "Content-Type": "Application/json" },
        body: JSON.stringify({
          input: input,
        }),
      })
        .then((response) => response.json())
        .then((response) => {
          if (response.outputs[0].data.regions === undefined)
            window.alert("The image does not have a face");
          else {
            console.log(
              response.outputs[0].data.regions[0].region_info.bounding_box
            );
            onBoxChange(
              calculateFace(
                response.outputs[0].data.regions[0].region_info.bounding_box
              )
            );
            increaseImageCount();
          }
        })
        .catch((err) => {
          window.alert(
            "The provided Url is not a valid Url that leads to a image file"
          );
          return;
        });
    }
  };
  if (!user.isSignedIn) {
    return <Redirect to="/" />;
  }

  return (
    <div className={classes.backgroundStyles}>
      <Navigation loadUser={loadUser} />
      <Logo />
      <Rank user={user} />
      <ImageLink onInputChange={onInputChange} onSubmit={onSubmit} />
      {imageURL === "" ? null : <Image imageURL={imageURL} box={box} />}
    </div>
  );
}

export default App;
