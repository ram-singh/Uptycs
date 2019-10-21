import React from "react";
import PropTypes from 'prop-types';
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import HelpButton from "../../common/HelpButton";
import AssetsTable from "./AssetsTable";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    height: "100%"
  },
  helpPopoverPaper: {
    width: 300
  }
});

function AssetsPage(props) {
  const {classes}  = props;
  // const popoverStyle =  { width: 300 };
  return (
    <div>
      <Typography paragraph variant="h1">
        Assets
      </Typography>
      <Grid container alignItems="stretch" spacing={2}>
        <Grid item xs={10}>
          <Paper className={classes.paper}>
            <Typography paragraph>
              Welcome to the Asset listing page! On this page you will find a
              list of assets enrolled on the Uptycs platform. There is just one
              problem. The <code>AssetTable</code> component is incomplete! It
              is up to you to interact with the API and build out the table
              below.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={2}>
          <Paper className={classes.paper}>
            <HelpButton paper={classes.helpPopoverPaper}>
              <Typography paragraph variant="h2">
                All about assets
              </Typography>
              <Typography paragraph variant="body1">
                At Uptycs, assets are any computer that is monitored using
                osquery. Assets could be a laptop, desktop, or a server in the
                cloud! They could run Ubuntu, Windows, Mac OS, or one of those
                other operating systems. This help content is getting quite
                long. Hopefully this looks ok.
              </Typography>
            </HelpButton>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <AssetsTable />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
AssetsPage.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(AssetsPage);
