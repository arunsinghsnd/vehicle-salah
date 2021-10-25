import React from "react";
import "./styles.css";
import Card from "./Card";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

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
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card />
      </Grid>
    </Grid>
  );
};

export default Home;
