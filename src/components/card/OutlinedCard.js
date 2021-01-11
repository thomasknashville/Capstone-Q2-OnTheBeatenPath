import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Weather from "../weather/Weather";

import Modal from "../modal/Modal";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
  },

  pos: {
    marginBottom: 12,
  },
});

export default function OutlinedCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.pos} color="textSecondary"></Typography>
        <Typography variant="body2" component="p">
          <Weather />
        </Typography>
      </CardContent>
      <CardActions>
        <Modal />
      </CardActions>
    </Card>
  );
}
