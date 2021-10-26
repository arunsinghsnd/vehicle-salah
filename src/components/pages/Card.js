import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material//Button";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import { Grid } from "@mui/material";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    marginTop: 40,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const CardPreview = props => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.root} variant="outlined">
        <CardMedia
          component="img"
          height="300"
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {props.name}
          </Typography>
          <Typography variant="h5" component="h2">
            {props.color}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.brand}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.engine}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.power}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.price}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.rating}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.seating}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.type}
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {props.wheeler_type}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View More</Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CardPreview;
