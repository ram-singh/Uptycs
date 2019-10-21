import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import HelpIcon from "@material-ui/icons/Help";
import IconButton from "@material-ui/core/IconButton";

const styles = theme => ({
  wrapper: {
    margin: theme.spacing(2)
  }
});

class HelpButton extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    event.preventDefault();
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes, paper, children, ...rest } = this.props;
    // const {popoverStyle} = this.props;
    // const paperStyle = typeof popoverStyle === 'object' ? popoverStyle : {};
    // console.log("paperStyle: ", paperStyle);
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <>
        <IconButton
          aria-owns={open ? "help-popper" : undefined}
          aria-haspopup="true"
          variant="contained"
          onClick={this.handleClick}
          color="primary"
          {...rest}
        >
          <HelpIcon />
        </IconButton>
        <Popover
          id="help-popper"
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center"
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center"
          }}
          classes={{
            paper: paper
          }}
        >
          <div className={classes.wrapper}>{children}</div>
        </Popover>
      </>
    );
  }
}

HelpButton.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(styles)(HelpButton);
