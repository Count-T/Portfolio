import React from "react";
import { Grid } from "@material-ui/core";

export default function QueuesInfo() {
  return (
    <div>
      <h1>Queues</h1>
      <Grid container>
        <Grid className="box" item xs={6}>
          Topic
        </Grid>
        <Grid className="box" item xs={6}>
          Definition
        </Grid>
      </Grid>
    </div>
  );
}
