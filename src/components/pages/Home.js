import React from "react";
import "./styles.css";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { vehicels } from "../Data/Vehicels";
import CardList from "./CardList";

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      spacing={4}
      className={classes.gridContainer}
      justify="center"
    >
      <CardList vehicels={vehicels} />
    </Grid>
  );
};

export default Home;
