import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HelpButton from "../../common/HelpButton";

const styles = theme => ({
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "100%"
  },
  helpPopoverPaper: {
    width: 300
  }
});

function IntroPage(props) {
  const { classes } = props;

  return (
    <div>
      <Typography paragraph variant="h1">
        Intro
      </Typography>
      <Grid container alignItems="stretch" spacing={2}>
        <Grid item xs={8}>
          <Paper className={classes.paper}>
            <Typography paragraph variant="h5">
              Welcome to the Uptycs UI coding exercise!
            </Typography>

            <Typography paragraph>
              Scattered throughout this app are a variety of challenges to
              tackle. Some of them are inspired by real bugs, others are
              completely made up.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper className={classes.paper}>
            <HelpButton paper={classes.helpPopoverPaper}>
              Help buttons scattered throughout will provide additional context.
            </HelpButton>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(IntroPage);
