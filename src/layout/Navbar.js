import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import HomeIcon from "@material-ui/icons/Home";
import Tooltip from "@material-ui/core/Tooltip";
import PersonIcon from "@material-ui/icons/Person";
import AddPost from "../components/AddPost";
import logo from "../purdueLogo.jpg";

class Navbar extends Component {
  render() {
    return (
      <AppBar>
        <Toolbar className="nav-container">
          <AddPost></AddPost>
          <Tooltip title="Home" placement="top">
            <Link to="/Home">
              <HomeIcon color="primary"></HomeIcon>
            </Link>
          </Tooltip>
          &nbsp;&nbsp;
          <Tooltip title="My Posts" placement="top">
            <Link to="/MyPost">
              <PersonIcon color="primary"></PersonIcon>
            </Link>
          </Tooltip>
        </Toolbar>
      </AppBar>
    );
  }
}

export default Navbar;
