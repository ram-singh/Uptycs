import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ComputerIcon from "@material-ui/icons/Computer";
import IntroIcon from "@material-ui/icons/Home";
import { Link } from "@reach/router";

function NavList(props) {
  return (
    <List>
      <ListItem button component={Link} to="/">
        <ListItemIcon>
          <IntroIcon />
        </ListItemIcon>
        <ListItemText primary="Intro" />
      </ListItem>
      <ListItem button component={Link} to="assets">
        <ListItemIcon>
          <ComputerIcon />
        </ListItemIcon>
        <ListItemText primary="Assets" />
      </ListItem>
    </List>
  );
}

export default NavList;
