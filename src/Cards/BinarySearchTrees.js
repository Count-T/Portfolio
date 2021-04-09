import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <Link to="/binarysearchtrees">
        <CardHeader title="Binary Search Tree" />
      </Link>
      <img
        style={{ height: 300, width: 300 }}
        src="http://www.crondose.com/wp-content/uploads/2016/06/bst-8.png"
        alt=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          Store multiple values
        </Typography>
      </CardContent>
    </Card>
  );
}
